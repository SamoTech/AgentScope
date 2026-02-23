// netlify/functions/proxy.js
exports.handler = async (event) => {
  const FMP_KEY = process.env.FMP_API_KEY || 'demo';
  const { action, tickers, feeds } = event.queryStringParameters || {};

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=1200' // 15 min edge cache
  };

  try {
    if (action === 'stocks') {
      if (!tickers) return { statusCode: 400, headers, body: JSON.stringify({error: 'Missing tickers'}) };
      const res = await fetch(`https://financialmodelingprep.com/api/v3/quote/${tickers}?apikey=${FMP_KEY}`);
      if (!res.ok) throw new Error('Failed to fetch from FMP');
      const data = await res.json();
      return { statusCode: 200, headers, body: JSON.stringify(data) };
    }
    
    if (action === 'news') {
      if (!feeds) return { statusCode: 400, headers, body: JSON.stringify({error: 'Missing feeds'}) };
      const feedsParam = feeds.split(',');
      const rssFetches = feedsParam.map(feed => {
        const parts = feed.split('|');
        if (parts.length < 2) return Promise.resolve([]);
        const name = decodeURIComponent(parts[0]);
        const u = decodeURIComponent(parts[1]);
        return fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(u)}&count=25`)
          .then(r => r.json())
          .then(d => (d.items || []).map(it => ({ ...it, _src: name })))
          .catch(() => []);
      });
      
      const hnFetch = fetch('https://hacker-news.firebaseio.com/v0/beststories.json')
        .then(r => r.json())
        .then(ids => Promise.all((ids || []).slice(0, 25).map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json()).catch(() => null)
        )))
        .then(items => items.filter(i => i && i.title && /\b(ai|agent|llm|gpt|claude|gemini|openai|anthropic|model|automat|robot|copilot|neural)\b/i.test(i.title)).map(i => ({
          title: i.title, link: i.url || `https://news.ycombinator.com/item?id=${i.id}`,
          description: `⬆ ${i.score || 0} pts · 💬 ${i.descendants || 0} comments`,
          pubDate: new Date(i.time * 1000).toISOString(), _src: 'Hacker News',
        })))
        .catch(() => []);

      const [hn, ...rssData] = await Promise.all([hnFetch, ...rssFetches]);
      const all = [...hn, ...rssData.flat()];
      return { statusCode: 200, headers, body: JSON.stringify(all) };
    }

    return { statusCode: 400, headers, body: JSON.stringify({error: 'Invalid action'}) };
  } catch (error) {
    console.error('Proxy Error:', error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
  }
};
