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
    "since_previous": "since previous"
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

async function fetchReleases(ownerRepo) {
  try {
    var res = await fetch('https://api.github.com/repos/' + ownerRepo + '/releases', {
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'trmnl-github-releases-plugin'
      }
    });
    // Non-2xx (404 unknown/renamed repo, 403 rate-limited/private, ...) — drop this
    // repo and keep rendering the others instead of failing the whole plugin.
    if (!res.ok) return [];
    var data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    return [];
  }
}

async function run(input) {
  var settings = (input && input.trmnl && input.trmnl.plugin_settings && input.trmnl.plugin_settings.custom_fields_values) || {};
  var owner_repos = (settings.owner_repos || '')
    .split(',')
    .map(function (r) { return r.trim(); })
    .filter(Boolean);

  var per_repo = await Promise.all(owner_repos.map(async function (owner_repo) {
    return { owner_repo: owner_repo, releases: await fetchReleases(owner_repo) };
  }));

  var all_releases = [];

  per_repo.forEach(function (entry) {
    var repo_releases = entry.releases.slice().sort(function (a, b) {
      return new Date(b.published_at) - new Date(a.published_at);
    });

    var latest_releases = repo_releases.slice(0, 5);
    var time_since_map = {};

    for (var i = 0; i < latest_releases.length; i++) {
      var release = latest_releases[i];
      var seconds_since_previous = null;
      var older_release = i < latest_releases.length - 1 ? latest_releases[i + 1] : repo_releases[latest_releases.length];

      if (older_release) {
        var current_time = new Date(release.published_at).getTime() / 1000;
        var older_time = new Date(older_release.published_at).getTime() / 1000;
        seconds_since_previous = Math.abs(current_time - older_time);
      }

      if (seconds_since_previous !== null) {
        time_since_map[release.id] = seconds_since_previous;
      }
    }

    var repo_name = entry.owner_repo.split('/')[1] || '';

    var transformed_releases = latest_releases.map(function (release) {
      return {
        id: release.id,
        name: release.name || release.tag_name || '',
        published_at: release.published_at || '',
        prerelease: release.prerelease || false,
        draft: release.draft || false,
        tag_name: release.tag_name || '',
        repo_name: repo_name,
        repo_full_name: entry.owner_repo,
        seconds_since_previous: time_since_map[release.id] || null
      };
    });

    all_releases = all_releases.concat(transformed_releases);
  });

  all_releases.sort(function (a, b) {
    return new Date(b.published_at) - new Date(a.published_at);
  });

  return {
    all_translations: ALL_TRANSLATIONS,
    all_releases: all_releases
  };
}
