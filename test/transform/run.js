'use strict';
// node test/transform/run.js: runs plugin/src/transform.js in a fresh vm
// sandbox per case with a fake fetch, the way TRMNL's runtime calls run().
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SRC = fs.readFileSync(path.join(__dirname, '../../plugin/src/transform.js'), 'utf-8');
const NOW_S = Math.floor(Date.parse('2026-09-15T12:00:00Z') / 1000);

function load(fetchImpl) {
  const sb = { fetch: fetchImpl, console, Date, Math, JSON, Promise, setTimeout, clearTimeout, AbortController, module: { exports: {} } };
  vm.createContext(sb);
  vm.runInContext(SRC, sb);
  return sb.module.exports;
}

function res(status, body, headers) {
  const h = Object.assign({}, headers);
  return { status, ok: status >= 200 && status < 300, headers: { get: (k) => h[k.toLowerCase()] || null },
           json: async () => body };
}

function rel(id, daysAgo, extra) {
  return Object.assign({ id, name: 'v' + id, tag_name: 'v' + id, body: 'x'.repeat(1000),
    published_at: new Date((NOW_S - daysAgo * 86400) * 1000).toISOString(), prerelease: false, draft: false }, extra);
}

function input(fields, state) {
  return { trmnl: { system: { timestamp_utc: NOW_S }, user: { locale: 'en' }, state,
    plugin_settings: { custom_fields_values: Object.assign({ owner_repos: 'a/one,b/two' }, fields) } } };
}

let passed = 0, failed = 0;
async function test(name, fn) {
  try { await fn(); passed++; console.log('✓ ' + name); }
  catch (e) { failed++; console.log('✗ ' + name + ': ' + e.message); }
}
function assert(c, m) { if (!c) throw new Error(m || 'assertion failed'); }

(async () => {
  await test('releases from every repository, newest first, trimmed', async () => {
    const { run } = load(async (url) => /a\/one/.test(url)
      ? res(200, [rel(1, 3), rel(2, 10)], { etag: 'E1' }) : res(200, [rel(3, 1)], { etag: 'E2' }));
    const r = await run(input({}));
    assert(r.top_releases.map((x) => x.id).join() === '3,1,2', r.top_releases.map((x) => x.id).join());
    assert(!('body' in r.top_releases[0]), 'release notes were carried');
    assert(r.top_releases[1].seconds_since_previous === 7 * 86400, 'gap ' + r.top_releases[1].seconds_since_previous);
    assert(r.trmnl_state.repos['a/one'].etag === 'E1', 'etag not kept');
  });

  await test('a repository that does not exist costs only itself, and is named', async () => {
    const { run } = load(async (url) => /a\/one/.test(url) ? res(404, {}) : res(200, [rel(3, 1)]));
    const r = await run(input({}));
    assert(r.top_releases.length === 1, 'the other repo was lost');
    assert(r.failed_repos[0].repo === 'a/one' && r.failed_repos[0].reason === 'not_found', JSON.stringify(r.failed_repos));
  });

  await test('rate limited: last good releases from state, and the board says why', async () => {
    const state = { repos: { 'a/one': { etag: 'E1', releases: [{ id: 9, name: 'v9', tag_name: 'v9', published_at: '2026-09-14T00:00:00Z', prerelease: false, draft: false }] } } };
    const seen = [];
    const { run } = load(async (url, opts) => { seen.push(opts.headers['If-None-Match']); return res(403, {}); });
    const r = await run(input({}, state));
    assert(r.top_releases.map((x) => x.id).join() === '9', 'state not used: ' + JSON.stringify(r.top_releases));
    assert(r.rate_limited === true, 'rate limit not reported');
    assert(seen.indexOf('E1') >= 0, 'no conditional request');
  });

  await test('304 reuses the saved releases', async () => {
    const state = { repos: { 'a/one': { etag: 'E1', releases: [{ id: 9, name: 'v9', tag_name: 'v9', published_at: '2026-09-14T00:00:00Z' }] } } };
    const { run } = load(async (url) => /a\/one/.test(url) ? res(304, null) : res(200, []));
    const r = await run(input({}, state));
    assert(r.top_releases.length === 1 && r.rate_limited === false, JSON.stringify(r));
  });

  await test('a token is sent, and a rate limit with a token is not blamed on the missing token', async () => {
    let auth = null;
    const { run } = load(async (url, opts) => { auth = opts.headers.Authorization; return res(403, {}); });
    const r = await run(input({ github_token: ' ghp_x ' }));
    assert(auth === 'Bearer ghp_x', 'auth ' + auth);
    assert(r.rate_limited === false, 'told to add a token that is already there');
  });

  await test('a body that never arrives is cut at the deadline', async () => {
    const { run } = load(async (url) => /a\/one/.test(url)
      ? { status: 200, ok: true, headers: { get: () => null }, json: () => new Promise(() => {}) }
      : res(200, [rel(3, 1)]));
    const t = Date.now();
    const r = await run(input({}));
    assert(Date.now() - t < 4000, 'took ' + (Date.now() - t) + 'ms');
    assert(r.top_releases.length === 1, 'the answering repo was lost');
  });

  await test('filters: drafts, pre-releases, days, latest only (Yes/No values)', async () => {
    const list = [rel(1, 1, { draft: true }), rel(2, 2, { prerelease: true }), rel(3, 5), rel(4, 40)];
    const mk = () => load(async (url) => /a\/one/.test(url) ? res(200, list) : res(200, []));
    let r = await mk().run(input({}));
    assert(r.top_releases.map((x) => x.id).join() === '3,4', 'defaults ' + r.top_releases.map((x) => x.id).join());
    r = await mk().run(input({ include_drafts: 'Yes', include_prereleases: 'Yes', days_to_show: '30' }));
    assert(r.top_releases.map((x) => x.id).join() === '1,2,3', 'all within 30 days ' + r.top_releases.map((x) => x.id).join());
    r = await mk().run(input({ only_show_latest: 'Yes' }));
    assert(r.top_releases.map((x) => x.id).join() === '3', 'latest ' + r.top_releases.map((x) => x.id).join());
    assert(r.top_releases[0].seconds_since_previous === 35 * 86400, 'the gap is to the previous older release: ' + r.top_releases[0].seconds_since_previous);
  });

  await test('repositories: commas, newlines, links, duplicates', async () => {
    const { parseRepos } = load(async () => res(200, []));
    const got = parseRepos('LoveRetro/NextUI, https://github.com/nodejs/node.git\nlovero/x,loveretro/nextui, junk');
    assert(JSON.stringify(got) === JSON.stringify(['LoveRetro/NextUI', 'nodejs/node', 'lovero/x']), JSON.stringify(got));
  });

  console.log('\n' + passed + '/' + (passed + failed) + ' passed');
  process.exit(failed ? 1 : 0);
})();
