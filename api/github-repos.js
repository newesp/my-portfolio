export default async function handler(req, res) {
  const GITHUB_USER = 'newesp';
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    res.status(500).json({ error: 'GITHUB_TOKEN environment variable is not set on the server.' });
    return;
  }

  try {
    const all = [];
    let page = 1;
    while (true) {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
        },
      );

      if (!response.ok) {
        res.status(response.status).json({ error: `GitHub API error: ${response.status}` });
        return;
      }

      const batch = await response.json();
      if (!Array.isArray(batch)) {
        res.status(502).json({ error: 'Unexpected response shape from GitHub API.' });
        return;
      }

      all.push(...batch);
      if (batch.length < 100) break;
      page += 1;
    }

    const publicRepos = all.filter((repo) => !repo.private);

    res.setHeader('Vercel-CDN-Cache-Control', 'public, max-age=86400');
    res.setHeader('Vercel-Cache-Tag', 'github-repos');
    res.status(200).json(publicRepos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch repositories.' });
  }
}
