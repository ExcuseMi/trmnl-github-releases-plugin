// Inlined instead of fetched at render time: keeps the 5s serverless budget
// for GitHub calls and avoids a hard dependency on raw.githubusercontent.com.
// Keep in sync with i18n.json when adding/editing languages.
const ALL_TRANSLATIONS = {
  "en": {
    "github_releases": "GitHub Releases",
    "last": "Last",
    "days": "days",
    "day": "day",
    "all_releases": "All releases",
    "no_releases_found": "No releases found.",
    "no_releases_found_time": "No GitHub releases found for the selected time period",
    "since_previous": "since previous",
    "rate_limited": "GitHub's hourly limit was reached. Add a GitHub token in the plugin settings.",
    "repos_failed": "Could not read"
  },
  "nl": {
    "github_releases": "GitHub Releases",
    "last": "Laatste",
    "days": "dagen",
    "day": "dag",
    "all_releases": "Alle releases",
    "no_releases_found": "Geen releases gevonden.",
    "no_releases_found_time": "Geen GitHub releases gevonden voor de geselecteerde periode",
    "since_previous": "sinds vorige"
  },
  "fr": {
    "github_releases": "Versions GitHub",
    "last": "Derniers",
    "days": "jours",
    "day": "jour",
    "all_releases": "Toutes les versions",
    "no_releases_found": "Aucune version trouvée.",
    "no_releases_found_time": "Aucune version GitHub trouvée pour la période sélectionnée",
    "since_previous": "depuis la précédente"
  },
  "de": {
    "github_releases": "GitHub-Releases",
    "last": "Letzte",
    "days": "Tage",
    "day": "Tag",
    "all_releases": "Alle Releases",
    "no_releases_found": "Keine Releases gefunden.",
    "no_releases_found_time": "Keine GitHub-Releases für den ausgewählten Zeitraum gefunden",
    "since_previous": "seit vorheriger"
  },
  "es": {
    "github_releases": "Lanzamientos de GitHub",
    "last": "Últimos",
    "days": "días",
    "day": "día",
    "all_releases": "Todos los lanzamientos",
    "no_releases_found": "No se encontraron lanzamientos.",
    "no_releases_found_time": "No se encontraron lanzamientos de GitHub para el período seleccionado",
    "since_previous": "desde anterior"
  },
  "it": {
    "github_releases": "Release di GitHub",
    "last": "Ultimi",
    "days": "giorni",
    "day": "giorno",
    "all_releases": "Tutte le release",
    "no_releases_found": "Nessuna release trovata.",
    "no_releases_found_time": "Nessuna release di GitHub trovata per il periodo selezionato",
    "since_previous": "dalla precedente"
  },
  "pt": {
    "github_releases": "Lançamentos do GitHub",
    "last": "Últimos",
    "days": "dias",
    "day": "dia",
    "all_releases": "Todos os lançamentos",
    "no_releases_found": "Nenhum lançamento encontrado.",
    "no_releases_found_time": "Nenhum lançamento do GitHub encontrado para o período selecionado",
    "since_previous": "desde anterior"
  },
  "pt-BR": {
    "github_releases": "Lançamentos do GitHub",
    "last": "Últimos",
    "days": "dias",
    "day": "dia",
    "all_releases": "Todos os lançamentos",
    "no_releases_found": "Nenhum lançamento encontrado.",
    "no_releases_found_time": "Nenhum lançamento do GitHub encontrado para o período selecionado",
    "since_previous": "desde anterior"
  },
  "ru": {
    "github_releases": "Релизы GitHub",
    "last": "Последние",
    "days": "дней",
    "day": "день",
    "all_releases": "Все релизы",
    "no_releases_found": "Релизы не найдены.",
    "no_releases_found_time": "Релизы GitHub не найдены за выбранный период",
    "since_previous": "с предыдущей"
  },
  "ja": {
    "github_releases": "GitHubリリース",
    "last": "最新",
    "days": "日間",
    "day": "日",
    "all_releases": "すべてのリリース",
    "no_releases_found": "リリースが見つかりません。",
    "no_releases_found_time": "選択した期間のGitHubリリースが見つかりません",
    "since_previous": "前回から"
  },
  "zh": {
    "github_releases": "GitHub 发布",
    "last": "最近",
    "days": "天",
    "day": "天",
    "all_releases": "所有发布",
    "no_releases_found": "未找到发布。",
    "no_releases_found_time": "所选时间段内未找到 GitHub 发布",
    "since_previous": "自上次"
  },
  "ko": {
    "github_releases": "GitHub 릴리스",
    "last": "최근",
    "days": "일",
    "day": "일",
    "all_releases": "모든 릴리스",
    "no_releases_found": "릴리스를 찾을 수 없습니다.",
    "no_releases_found_time": "선택한 기간 동안 GitHub 릴리스를 찾을 수 없습니다",
    "since_previous": "이전부터"
  },
  "ar": {
    "github_releases": "إصدارات GitHub",
    "last": "آخر",
    "days": "أيام",
    "day": "يوم",
    "all_releases": "جميع الإصدارات",
    "no_releases_found": "لم يتم العثور على إصدارات.",
    "no_releases_found_time": "لم يتم العثور على إصدارات GitHub للفترة المحددة",
    "since_previous": "منذ السابق"
  },
  "tr": {
    "github_releases": "GitHub Sürümleri",
    "last": "Son",
    "days": "gün",
    "day": "gün",
    "all_releases": "Tüm sürümler",
    "no_releases_found": "Sürüm bulunamadı.",
    "no_releases_found_time": "Seçilen zaman dilimi için GitHub sürümü bulunamadı",
    "since_previous": "öncekinden beri"
  },
  "sv": {
    "github_releases": "GitHub-versioner",
    "last": "Senaste",
    "days": "dagar",
    "day": "dag",
    "all_releases": "Alla versioner",
    "no_releases_found": "Inga versioner hittades.",
    "no_releases_found_time": "Inga GitHub-versioner hittades för den valda tidsperioden",
    "since_previous": "sedan föregående"
  },
  "pl": {
    "github_releases": "Wydania GitHub",
    "last": "Ostatnie",
    "days": "dni",
    "day": "dzień",
    "all_releases": "Wszystkie wydania",
    "no_releases_found": "Nie znaleziono wydań.",
    "no_releases_found_time": "Nie znaleziono wydań GitHub dla wybranego okresu",
    "since_previous": "od poprzedniego"
  },
  "hi": {
    "github_releases": "GitHub रिलीज़",
    "last": "पिछले",
    "days": "दिन",
    "day": "दिन",
    "all_releases": "सभी रिलीज़",
    "no_releases_found": "कोई रिलीज़ नहीं मिली।",
    "no_releases_found_time": "चयनित अवधि के लिए कोई GitHub रिलीज़ नहीं मिली",
    "since_previous": "पिछले से"
  },
  "cs": {
    "github_releases": "Vydání GitHub",
    "last": "Posledních",
    "days": "dní",
    "day": "den",
    "all_releases": "Všechna vydání",
    "no_releases_found": "Nebyla nalezena žádná vydání.",
    "no_releases_found_time": "Pro vybrané časové období nebyla nalezena žádná vydání GitHub",
    "since_previous": "od předchozího"
  },
  "da": {
    "github_releases": "GitHub-udgivelser",
    "last": "Seneste",
    "days": "dage",
    "day": "dag",
    "all_releases": "Alle udgivelser",
    "no_releases_found": "Ingen udgivelser fundet.",
    "no_releases_found_time": "Ingen GitHub-udgivelser fundet for den valgte periode",
    "since_previous": "siden forrige"
  },
  "fi": {
    "github_releases": "GitHub-julkaisut",
    "last": "Viimeiset",
    "days": "päivää",
    "day": "päivä",
    "all_releases": "Kaikki julkaisut",
    "no_releases_found": "Julkaisuja ei löytynyt.",
    "no_releases_found_time": "GitHub-julkaisuja ei löytynyt valitulta ajanjaksolta",
    "since_previous": "edellisestä"
  }
};

// ---------------------------------------------------------------------
// Serverless run(). TRMNL gives it five seconds in all, so every request
// shares one deadline well inside that, including reading the body.
//
// GitHub allows 60 unauthenticated requests an hour per IP, and TRMNL's
// servers share their IPs with every other plugin, so without a token the
// answer is usually 403. Two things keep the board filled regardless:
// an optional token, and trmnl_state. Each repository's last good answer
// and its ETag are kept there; a conditional request that comes back 304
// costs nothing against the limit, and a failed one shows what was read
// last time.
// ---------------------------------------------------------------------

var BUDGET_MS = 3000;
var PER_PAGE = 10;          // the five shown per repository, and enough older ones to time the gap
var SHOWN_PER_REPO = 5;
var MAX_REPOS = 30;

function msUntil(deadline) { return deadline - Date.now(); }

function yes(v, dflt) {
  if (v === undefined || v === null || String(v).trim() === '') return dflt;
  var t = String(v).trim().toLowerCase();
  return t === 'yes' || t === 'true';
}

// "owner/repo", one per entry. The field arrives as a comma-separated string
// (or a list); a pasted github.com link is read as the repository it names.
function parseRepos(raw) {
  var list = Array.isArray(raw) ? raw : String(raw || '').split(/[,\n]/);
  var seen = {}, out = [];
  list.forEach(function (r) {
    var t = String(r || '').trim().replace(/^https?:\/\/(www\.)?github\.com\//i, '').replace(/\.git$/i, '');
    var m = /^([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)/.exec(t);
    if (!m) return;
    var key = m[1] + '/' + m[2];
    if (seen[key.toLowerCase()]) return;
    seen[key.toLowerCase()] = true;
    out.push(key);
  });
  return out.slice(0, MAX_REPOS);
}

// fetch() with the deadline over the whole request, body included. A timer
// that stops at the headers lets a slow body hold the render past the limit.
async function fetchJson(url, headers, deadline) {
  var ms = msUntil(deadline);
  if (ms <= 0) return { status: 0, error: 'timeout' };
  var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var timer = controller ? setTimeout(function () { controller.abort(); }, ms) : null;
  var cut = controller ? new Promise(function (_, reject) {
    controller.signal.addEventListener('abort', function () { reject(new Error('timeout')); });
  }) : null;
  function bounded(p) { return cut ? Promise.race([p, cut]) : p; }
  try {
    var res = await bounded(fetch(url, controller ? { headers: headers, signal: controller.signal } : { headers: headers }));
    var out = { status: res.status, etag: res.headers && res.headers.get ? res.headers.get('etag') : null,
                remaining: res.headers && res.headers.get ? res.headers.get('x-ratelimit-remaining') : null };
    if (res.status === 200) out.body = await bounded(res.json());
    return out;
  } catch (e) {
    return { status: 0, error: 'timeout' };
  } finally {
    if (timer) clearTimeout(timer);
  }
}

// Only what the board uses, so the state stays small.
function trim(rel) {
  return {
    id: rel.id,
    name: rel.name || rel.tag_name || '',
    tag_name: rel.tag_name || '',
    published_at: rel.published_at || rel.created_at || '',
    prerelease: !!rel.prerelease,
    draft: !!rel.draft
  };
}

function readState(input) {
  var st = input && input.trmnl && input.trmnl.state;
  if (typeof st === 'string') { try { st = JSON.parse(st); } catch (e) { st = null; } }
  var repos = st && typeof st === 'object' && st.repos && typeof st.repos === 'object' ? st.repos : {};
  return { repos: repos };
}

async function loadRepo(ownerRepo, token, cached, deadline) {
  var headers = {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'trmnl-github-releases-plugin'
  };
  if (token) headers['Authorization'] = 'Bearer ' + token;
  if (cached && cached.etag && Array.isArray(cached.releases)) headers['If-None-Match'] = cached.etag;
  var r = await fetchJson('https://api.github.com/repos/' + ownerRepo + '/releases?per_page=' + PER_PAGE, headers, deadline);
  if (r.status === 200 && Array.isArray(r.body)) {
    return { releases: r.body.map(trim), etag: r.etag || null, fresh: true };
  }
  if (r.status === 304 && cached) return { releases: cached.releases, etag: cached.etag, fresh: true };
  var why = r.status === 404 ? 'not_found'
    : (r.status === 403 || r.status === 429) ? 'rate_limited'
    : r.status === 401 ? 'bad_token'
    : r.error || 'error';
  // A repository that no longer exists is not shown from memory.
  if (why !== 'not_found' && cached && Array.isArray(cached.releases)) {
    return { releases: cached.releases, etag: cached.etag, fresh: false, error: why };
  }
  return { releases: [], etag: null, fresh: false, error: why };
}

function byNewest(a, b) { return new Date(b.published_at) - new Date(a.published_at); }

async function run(input) {
  var settings = (input && input.trmnl && input.trmnl.plugin_settings && input.trmnl.plugin_settings.custom_fields_values) || {};
  var nowS = (input && input.trmnl && input.trmnl.system && input.trmnl.system.timestamp_utc) || Math.floor(Date.now() / 1000);
  var deadline = Date.now() + BUDGET_MS;
  var repos = parseRepos(settings.owner_repos);
  var token = String(settings.github_token || '').trim();
  var includePre = yes(settings.include_prereleases, false);
  var includeDrafts = yes(settings.include_drafts, false);
  var latestOnly = yes(settings.only_show_latest, false);
  var days = parseInt(settings.days_to_show, 10);
  if (!(days > 0)) days = 0;

  var state = readState(input);
  var nextState = { repos: {} };
  var results = await Promise.all(repos.map(function (repo) {
    return loadRepo(repo, token, state.repos[repo], deadline).then(function (res) {
      return { repo: repo, res: res };
    });
  }));

  var top = [], failed = [], rateLimited = false;
  results.forEach(function (entry) {
    var res = entry.res;
    if (res.releases.length) nextState.repos[entry.repo] = { etag: res.etag, releases: res.releases };
    if (res.error) {
      failed.push({ repo: entry.repo, reason: res.error, stale: res.releases.length > 0 });
      if (res.error === 'rate_limited') rateLimited = true;
    }
    // Newest first; the gap to the previous release counts every release,
    // shown or not, which is what the setting promises.
    var all = res.releases.slice().sort(byNewest);
    var shown = all.filter(function (rel) {
      if (rel.draft && !includeDrafts) return false;
      if (rel.prerelease && !includePre) return false;
      return true;
    });
    if (latestOnly) shown = shown.slice(0, 1);
    shown = shown.slice(0, SHOWN_PER_REPO);
    shown.forEach(function (rel) {
      if (days && new Date(rel.published_at).getTime() / 1000 < nowS - days * 86400) return;
      var ix = all.indexOf(rel), older = all[ix + 1];
      top.push({
        id: rel.id,
        name: rel.name,
        tag_name: rel.tag_name,
        published_at: rel.published_at,
        prerelease: rel.prerelease,
        draft: rel.draft,
        repo_name: entry.repo.split('/')[1],
        repo_full_name: entry.repo,
        seconds_since_previous: older
          ? Math.abs(new Date(rel.published_at) - new Date(older.published_at)) / 1000 || null
          : null
      });
    });
  });
  top.sort(byNewest);

  // The returned keys are the template's root variables; trmnl_state comes
  // back as input.trmnl.state on the next render.
  return {
    all_translations: ALL_TRANSLATIONS,
    top_releases: top,
    days_filter: days,
    failed_repos: failed,
    rate_limited: rateLimited && !token,
    trmnl_state: nextState
  };
}

if (typeof module !== 'undefined') module.exports = { run: run, parseRepos: parseRepos };
