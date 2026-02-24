function transform(input) {
if (!input || typeof input !== 'object') {
return { all_translations: null, releases: [] };
}

var response = { "all_translations": input.IDX_0 || null }; 
var all_releases = [];
var time_since_map = {}; // Object for release_id -> seconds_since_previous

// Process each repository's releases
var repo_index = 1;
for (var key in input) {
if (key !== 'IDX_0' && input[key] && input[key].data && Array.isArray(input[key].data)) {
var repo_releases = input[key].data;

// Sort by published date (newest to oldest for easier time delta calculation)
repo_releases.sort(function(a, b) {
return new Date(b.published_at) - new Date(a.published_at);
});

// Take only the 5 latest releases from this repository
var latest_releases = repo_releases.slice(0, 5);

// Calculate time since previous release for each release in this repo
for (var i = 0; i < latest_releases.length; i++) {
                    var release = latest_releases[i];
                    var seconds_since_previous = null;

                    if (i < latest_releases.length - 1) {
                            // There's a previous release in our list
                      var current_time = new Date(release.published_at).getTime() / 1000;
                      var previous_release = latest_releases[i + 1];
                      var previous_time = new Date(previous_release.published_at).getTime() / 1000;

                      seconds_since_previous = Math.abs(current_time - previous_time);
                      } else if (i === latest_releases.length - 1 && repo_releases.length > latest_releases.length) {
                      // This is the oldest of our 3, but there might be older releases in the full list
                      // Find the next oldest release after our 3
                      var current_time = new Date(release.published_at).getTime() / 1000;

                      // Look for the next release in the full sorted list
                      for (var j = latest_releases.length; j < repo_releases.length; j++) {
                                                               var older_release = repo_releases[j];
                                                               if (older_release) {
                                                               var older_time = new Date(older_release.published_at).getTime() / 1000;
                        seconds_since_previous = Math.abs(current_time - older_time);
                        break;
                        }
                        }
                        }

                        // Store time delta in map
                        if (seconds_since_previous !== null) {
                        time_since_map[release.id] = seconds_since_previous;
                        }
                        }

                        // Transform each release to include only necessary properties
                        var transformed_releases = latest_releases.map(function(release) {
                        // Extract repo info from html_url
                        var repo_owner = '';
                        var repo_name = '';
                        var repo_full_name = '';

                        if (release.html_url) {
                        var url_parts = release.html_url.split('/');
                        // GitHub release URL format: https://github.com/owner/repo/releases/tag/v1.0.0
                        // Parts: [https:, '', github.com, owner, repo, releases, tag, v1.0.0]
                        if (url_parts.length >= 5) {
                        repo_owner = url_parts[3] || '';
                        repo_name = url_parts[4] || '';
                        repo_full_name = repo_owner + '/' + repo_name;
                        }
                        }

                        return {
                        id: release.id,
                        name: release.name || release.tag_name || '',
                        published_at: release.published_at || '',
                        prerelease: release.prerelease || false,
                        draft: release.draft || false,
                        tag_name: release.tag_name || '',
                        // Add repo information
                        repo_name: repo_name,
                        repo_full_name: repo_full_name,
                        // Add time since previous release
                        seconds_since_previous: time_since_map[release.id] || null
                        };
                        });
                        // Also add to all releases for the main releases array
                        all_releases = all_releases.concat(transformed_releases);
                        repo_index++;
                        }
                        }

                        // Sort all releases by published date (newest first)
                        all_releases.sort(function(a, b) {
                        return new Date(b.published_at) - new Date(a.published_at);
                        });

                        response['all_releases'] = all_releases;

                        return response;
                        }