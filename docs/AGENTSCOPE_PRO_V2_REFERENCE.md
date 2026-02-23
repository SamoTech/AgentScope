# 🤖 AgentScope Pro v2 — Complete Developer Reference

> **Repo:** https://github.com/SamoTech/AgentScope  
> **Live:** https://agentscope.netlify.app  
> **Version:** v2.0 Professional  
> **Stack:** Vanilla HTML / CSS / JS · Netlify · FMP API · RSS2JSON · HN Firebase API  
> **Last Updated:** February 2026

---

## 🌟 What is AgentScope Pro?

AgentScope Pro v2 is a **single-file, zero-build, zero-backend professional AI intelligence terminal** that runs anywhere — open `index.html` in a browser or deploy to Netlify/Cloudflare Pages in seconds.

It tracks the **agentic AI ecosystem** in real-time:
- **30 AI stocks** across 7 segments (Pure AI, GPU, Cloud, Agents, Chips, Data/AI, Robotics)
- **13 news sources** (Hacker News + 12 specialized RSS feeds)
- **Professional Bloomberg-style UI** with ticker tape, sidebar analytics, heatmaps
- **5-dimensional filtering** (source, category, sentiment, search, time)

---

## 🆕 What's New in v2.0

### Stocks Expansion: 9 → 30 Tickers

| Segment | Tickers |
|---------|----------|
| **🤖 Pure AI** | AI (C3.ai), SOUN, BBAI, AITX, AMBA |
| **🖥 GPU/Infra** | NVDA, AMD, INTC |
| **☁️ Cloud** | MSFT, GOOGL, AMZN, ORCL, IBM |
| **⚡ Agents** | META, CRM, NOW, PEGA, NICE |
| **💡 Chips** | AVGO, ARM, QCOM, MRVL, ASML |
| **📊 Data/AI** | PLTR, SNOW, MDB, DDOG, S |
| **🦶 Robotics** | TSLA, IRBT |

### News Sources: 4 → 13 Feeds

| Source | Type | Coverage |
|--------|------|----------|
| **Hacker News** | JSON API | Developer AI discussions, top stories |
| **TechCrunch AI** | RSS | Startups, funding, launches |
| **VentureBeat AI** | RSS | Enterprise AI, agent frameworks |
| **AI News** | RSS | Research, industry |
| **The Verge AI** | RSS | Consumer AI, product news |
| **Wired AI** | RSS | Long-form tech journalism |
| **MIT Technology Review** | RSS | Research-grade coverage |
| **ZDNet AI** | RSS | Enterprise technology |
| **InfoQ AI** | RSS | Engineering & architecture |
| **Analytics Vidhya** | RSS | ML/Data Science |
| **KDnuggets** | RSS | Data science, ML news |
| **AI Business** | RSS | Business applications of AI |
| **DataScienceWeekly** | RSS | Curated DS/AI newsletter |

### UI & UX Enhancements

- **📊 Sidebar Analytics** (desktop)
  - 🔥 Heatmap (top 8 movers)
  - 📊 Sector performance bars (avg % per segment)
  - 📰 Source distribution chart
  - 🏷️ Trending topics cloud (clickable keywords)
  - ⌨️ Keyboard shortcuts reference

- **📢 Ticker Tape** — Bloomberg-style scrolling marquee with all 30 stocks

- **🟢 Market Status** — Live NYSE/NASDAQ open/closed detection (Eastern Time)

- **🎯 8 KPI Cells**
  - Last Sync Time
  - Stocks Tracked (30)
  - Articles Live
  - Top Gainer (ticker + %)
  - Top Loser (ticker + %)
  - News Sources (13)
  - Next Refresh (countdown)

- **🔍 Global Search** — Searches across both stocks AND news simultaneously

- **🏛️ Sort Controls** — % change ↓↑, price ↓↑, A–Z

- **🟽 Quick Filters** — One-click 🟽 Gainers / 🟽 Losers buttons

- **🟢 Sentiment Filter Row** — Filter news by 📈 Bullish / ➡ Neutral / 📉 Bearish

- **🏛️ Policy Category** — New auto-detected bucket for regulatory/legal AI news

---

## 💻 Architecture

```
index.html (single file, ~1,568 lines)
│
├─ <style> — Full design system
│   ├─ :root tokens (dark) + [data-theme="light"] overrides
│   ├─ Nav, Ticker Tape, KPI Bar
│   ├─ Workspace grid (main + sidebar)
│   ├─ Stock cards (.s-card)
│   ├─ News cards (.n-card)
│   ├─ Sidebar widgets (heatmap, sectors, src-dist, topics)
│   └─ Skeleton loaders, toast, footer
│
└─ <script> — IIFE application
    ├─ CFG      — Config: API keys, 30 stocks, 12 RSS sources
    ├─ S        — State object (stocks, news, filters, timers)
    ├─ UTILS    — timeAgo, readTime, fmtP, fmtC
    ├─ MARKET   — checkMarketStatus (NYSE hours detection)
    ├─ SENTIMENT— Keyword-based bullish/bearish/neutral
    ├─ CATEGORY — agents / research / infra / funding / policy
    ├─ TOPICS   — extractTopics (20 AI keywords)
    ├─ SPARKLINE— Canvas 2D mini-charts with gradient fill
    ├─ STOCKS   — fetchStocks, sortedStocks, renderStocks
    ├─ TAPE     — renderTape (ticker marquee)
    ├─ HEATMAP  — renderHeatmap (top 8 movers sidebar)
    ├─ SECTORS  — renderSectors (avg % per segment)
    ├─ KPI      — updateKPI (7 cells)
    ├─ NEWS     — fetchNews (HN + 12 RSS), filterNews, renderNews
    ├─ SIDEBAR  — renderSrcDist, renderTopics
    ├─ COUNTDOWN— startCountdown
    ├─ REFRESH  — refreshAll (parallel stock + news fetch)
    ├─ THEME    — toggleTheme
    └─ EVENTS   — all addEventListener calls + keyboard shortcuts
```

---

## 🎨 Design System Tokens

```css
/* Dark (default) */
--bg-base:    #03070f   /* Page background */
--bg-surface: #080f1c   /* Nav, KPI bar */
--bg-card:    #0c1526   /* Stock + news cards */
--bg-raised:  #111d34   /* Chips, badges */
--bg-hover:   #162238   /* Hover state */
--bg-input:   #0a1323   /* Search inputs */

/* Accent */
--accent:     #3d8bff   /* Primary interactive color */
--accent-dim: rgba(61,139,255,0.15)
--accent-glow:0 0 20px rgba(61,139,255,0.25)

/* Status */
--green:      #00d68f   /* Positive / up */
--red:        #ff4d6a   /* Negative / down */
--yellow:     #f5c518   /* Warning / highlight */
--purple:     #a78bfa   /* Accent alt */

/* Text */
--text-1:  #dce8ff       /* Primary */
--text-2:  (60% opacity) /* Secondary */
--text-3:  (35% opacity) /* Muted */
--text-4:  (18% opacity) /* Disabled */

/* Fonts */
--f-mono: "JetBrains Mono"   /* Code, data, KPIs */
--f-ui:   "Outfit"            /* Headlines, titles, KPI values */
```

---

## 🛠️ Full AI Development Prompt

Use this verbatim with **Claude**, **GPT-4o**, **Gemini**, or any capable LLM to continue building AgentScope Pro.

---

```markdown
You are an expert frontend engineer specializing in real-time financial data
dashboards, vanilla JavaScript, and professional information design. You are
building AgentScope Pro (https://github.com/SamoTech/AgentScope), a
single-file, zero-build, zero-backend AI intelligence dashboard.

## Tech Constraints
- Pure HTML/CSS/JS in one file. No npm, no bundler, no framework.
- ES2020 browser JS only (IIFE pattern, no modules).
- No new CDN dependencies unless critical.
- Must work by opening index.html directly in a browser.
- Must deploy to Netlify/Cloudflare Pages with zero build config.

## Current Stack
- Fonts: JetBrains Mono (data) + Outfit (UI/display) via Google Fonts
- APIs:  FMP (stocks), RSS2JSON (RSS feeds), HN Firebase JSON API
- Stocks: 30 tickers across 7 segments (Pure AI, GPU/Infra, Cloud, Agents,
          Chips, Data/AI, Robotics)
- News:  13 sources (Hacker News + 12 RSS feeds: TechCrunch AI, VentureBeat,
         AI News, The Verge AI, Wired AI, MIT Tech Review, ZDNet AI, InfoQ AI,
         Analytics Vidhya, KDnuggets, AI Business, DataScienceWeekly)

## Architecture (IIFE sections in order)
CFG → S (state) → UTILS → MARKET STATUS → SENTIMENT → CATEGORY →
TOPICS → SPARKLINE → STOCKS → TAPE → HEATMAP → SECTORS → KPI →
NEWS → SIDEBAR → COUNTDOWN → REFRESH → THEME → EVENTS → INIT

## State Object (S)
{
  stocks:      [],     // FMP quote objects + seg/name metadata
  allNews:     [],     // All fetched articles, deduplicated, sorted by date
  filteredNews:[],     // Result of current filter combination
  seg: 'all',          // Stock segment filter
  src: 'all',          // News source filter
  cat: 'all',          // News category filter
  sent: 'all',         // Sentiment filter
  q: '',               // Global search query
  sort: 'change_desc', // Stock sort mode
  countdownSec: 300,
  timers: {}           // Interval/timeout refs
}

## Design Tokens (CSS custom properties)
Dark theme default, [data-theme="light"] overrides:
--bg-base, --bg-surface, --bg-card, --bg-raised, --bg-hover, --bg-input
--brd, --brd-md, --brd-hi
--accent, --accent-dim, --accent-glow
--green, --green-dim, --green-brd
--red, --red-dim, --red-brd
--yellow, --yellow-dim
--text-1, --text-2, --text-3, --text-4
--f-mono (JetBrains Mono), --f-ui (Outfit)
--r-sm (4px), --r-md (8px), --r-lg (12px)
--t (0.18s), --ease (cubic-bezier 0.4,0,0.2,1)

## Components Reference
.s-card           — Stock card (pos/neg/flat modifier)
  .s-ticker       — Symbol (Outfit 800)
  .s-change       — % badge (up/down/flat)
  .s-name         — Full company name
  .s-seg-tag      — Segment label pill
  .s-price        — Current price (Outfit 700)
  .s-spark canvas — Canvas sparkline
  .s-footer       — Volume display

.n-card           — News card
  .n-source       — Source badge
  .n-time         — "Xm ago"
  .n-title a      — Headline link (Outfit 600)
  .n-desc         — Truncated description
  .n-sent         — Sentiment badge (bullish/bearish/neutral)
  .n-cat          — Category badge
  .n-read         — Read time

.hm-cell          — Heatmap cell (hm-pos/hm-neg/hm-flat)
.sector-row       — Sector bar row
.src-row          — Source distribution row
.topic-tag        — Trending topic chip

## Key Functions
fetchStocks()         — Fetches FMP API, falls back to mock data
renderStocks()        — Filters/sorts S.stocks → HTML cards + sparklines
sortedStocks()        — Applies S.seg + S.q + S.sort to S.stocks
renderTape()          — Builds scrolling ticker tape HTML (duplicated for loop)
renderHeatmap()       — Top 8 movers → heatmap cells
renderSectors()       — Avg % per segment → bar chart
updateKPI()           — Updates 7 KPI cells
fetchNews()           — Parallel HN + RSS fetches → deduplicates → sorts
filterNews()          — Applies S.src + S.cat + S.sent + S.q → S.filteredNews
renderNews()          — Renders S.filteredNews → HTML news cards
renderSrcDist()       — Article counts per source → bar chart + filter chips
renderTopics()        — Keyword extraction → topic cloud buttons
sentiment(t,d)        — Returns 'bullish'|'bearish'|'neutral'
category(t,d)         — Returns 'agents'|'research'|'infra'|'funding'|'policy'
checkMarketStatus()   — NYSE hours check → status dot color
toggleTheme()         — Flips data-theme, redraws sparklines
refreshAll()          — Parallel stock+news fetch → resets countdown

## ═══ TASK INSTRUCTIONS ══════════════════════════════

[REPLACE BELOW WITH YOUR SPECIFIC TASK — EXAMPLES:]

### TASK A: Add GitHub Trending AI Repos Panel
Add a third panel between the market and news panels showing trending GitHub
repositories. Use the GitHub Search API (no auth for public repos):
  GET https://api.github.com/search/repositories
    ?q=topic:artificial-intelligence+pushed:>2025-06-01
    &sort=stars&order=desc&per_page=12

Display as cards: repo name (linked), owner avatar, description (truncated),
star count with ⭐, language tag, last push date. Add to IIFE as a new section
/* ── GITHUB ── */ after the NEWS section. Add a filter for topics:
'llm', 'agents', 'rag', 'fine-tuning'. Match the .n-card design language.
Add a KPI cell for "Trending Repos" count.

### TASK B: Netlify Edge Function — FMP Proxy with Cache
Create netlify/functions/stocks.js that:
1. Accepts GET /api/stocks?tickers=NVDA,AMD,...
2. Reads process.env.FMP_KEY for the API key
3. Module-level Map cache: if data is <90s old, return cached result
4. Fetches from FMP with the real key, returns JSON with CORS headers:
   Access-Control-Allow-Origin: * 
5. Update CFG.FMP_KEY to '' and the fetch URL to '/api/stocks?tickers='

### TASK C: Advanced Sentiment with Scoring
Replace the boolean keyword classifier with a weighted scoring system:

const BULL_WEIGHTS = {
  'billion':3, 'partnership':3, 'record':2, 'launch':2, 'fund':2,
  'growth':1, 'invest':1, 'expand':1, 'win':1, 'deal':2
};
const BEAR_WEIGHTS = {
  'layoff':3, 'ban':3, 'lawsuit':3, 'probe':2, 'fine':2,
  'fail':2, 'drop':1, 'concern':1, 'risk':1, 'delay':1
};

Return { sentiment, confidence } where confidence is 0-100 based on score
magnitude. Display confidence as a small % next to the badge:
"📈 Bullish 84%"

### TASK D: Price Alerts System
Add an alert modal triggered by clicking a stock card. Users set:
  - Alert when price > $X
  - Alert when % change > X%
  - Alert when % change < -X%
Store alerts in localStorage as JSON array. Check against stock data after
each fetchStocks() call. Show a red dot badge on the nav when triggered.
List active alerts in a new sidebar section "🔔 Alerts".

### TASK E: Portfolio Tracker
Add a "+" button on each stock card that adds it to a portfolio tracked in
localStorage. Show total portfolio value, today's P&L, and top holdings in
a new sidebar section. Allow users to enter share count when adding.
Persist across sessions. Show portfolio summary in a new KPI cell.

### TASK F: PWA + Offline Mode
1. Create manifest.json:
   { "name": "AgentScope Pro", "short_name": "AgentScope",
     "start_url": "/", "display": "standalone",
     "background_color": "#03070f", "theme_color": "#3d8bff",
     "icons": [{"src":"icon-192.png","sizes":"192x192","type":"image/png"}] }
2. Create sw.js (cache-first strategy):
   - On install: cache index.html, fonts
   - On fetch: return cache if available, else network
   - Store last API responses in cache for offline viewing
3. Register in index.html:
   if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')
4. Show "📡 Offline" badge in nav when navigator.onLine === false

### TASK G: Real-time Price Updates via WebSocket
Replace the 5-minute polling with real-time updates using Finnhub's free
WebSocket: wss://ws.finnhub.io?token=YOUR_FREE_TOKEN
Subscribe to all 30 tickers on connect. On 'trade' events, update S.stocks
price in-place and re-render only the changed card (no full re-render).
Animate changed prices with a 300ms highlight flash (green for up, red for down).
Fall back to polling if WebSocket fails.

### TASK H: URL Hash Watchlist (Shareable Dashboards)
On load, check window.location.hash. If it matches /#TICK1,TICK2,...
(comma-separated tickers, 1-5 uppercase letters each):
1. Override CFG.STOCKS with the hash tickers
2. Fetch only those tickers from FMP
3. Show a "Shared Watchlist" badge in the nav
4. Add a "Share" button that copies the current filter state as a URL:
   /#NVDA,AMD,MSFT?seg=GPU/Infra&sort=change_desc

### TASK I: News Digest Summary (Claude API)
After fetchNews(), batch the top 20 headlines and call the Anthropic API
(claude-haiku-4-5-20251001) to generate a 3-sentence "AI Market Digest"
summary. Display it in a new sidebar section "📋 Daily Digest" at the top.
Include a loading spinner while generating. Cache the digest for 30 minutes.

API call:
const res = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'anthropic-version': '2023-06-01' },
  body: JSON.stringify({
    model: 'claude-haiku-4-5-20251001', max_tokens: 200,
    messages: [{ role: 'user', content:
      `Summarize these AI news headlines in exactly 3 sentences for a market dashboard.
       Focus on the most impactful developments. Be concise and factual.
       Headlines:\n${headlines.join('\n')}` }]
  })
});

## Output Requirements
1. Return the COMPLETE updated index.html (not diffs).
2. Preserve all existing functionality unless explicitly replacing it.
3. Add new IIFE sections with /* ── LABEL ── */ comment headers.
4. New CSS components go under a matching comment block.
5. Test mentally: does it work without a build step?
6. Graceful degradation: if new API fails, show error state, not blank panel.
7. Match animation pattern: animation: cardIn 0.35s var(--ease) both;
8. All external links: target="_blank" rel="noopener"
9. No alert(), confirm(), or prompt() — use toast notifications instead.
10. Mobile responsive: test at 480px and 768px breakpoints.
```

---

## 🗂️ Roadmap

### ✅ v1.0 — Base Release
- FMP stocks (7 tickers), RSS news (4 sources), dark UI, auto-refresh

### ✅ v1.1 — Signal Layer
- Sparklines, sentiment badges, category tags, theme toggle, deduplication,
  countdown timer, search debounce, mock data fallback, 9 stocks

### ✅ v2.0 — Professional (current)
- 30 stocks · 13 news sources · sidebar · heatmap · sector bars
- Ticker tape · market status · 7 KPIs · 5-filter news · sort controls
- Trending topics · source distribution chart · gainer/loser filters
- Sentiment filter row · policy category · global search · 7 segments

### 🔜 v2.1 — Intelligence Layer
- [ ] GitHub Trending AI repos panel (Task A)
- [ ] Netlify Function FMP proxy — protect API key (Task B)
- [ ] Weighted sentiment scoring with confidence % (Task C)
- [ ] PWA offline support (Task F)

### 📅 v3.0 — Personalization
- [ ] Price alerts with localStorage (Task D)
- [ ] Portfolio tracker (Task E)
- [ ] URL hash shareable watchlists (Task H)
- [ ] WebSocket real-time price updates (Task G)

### 🧪 v4.0 — AI-Powered
- [ ] Claude-powered news digest summary (Task I)
- [ ] Batch sentiment classification via LLM API
- [ ] AI ecosystem map (visual graph of frameworks + companies)
- [ ] Earnings calendar integration

---

## 👨‍💻 Contributing

AgentScope Pro is intentionally kept **hackable and extensible**.

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit: `git commit -m "feat: add my feature"`
5. Push: `git push origin feature/your-feature`
6. Open a Pull Request

**Tip:** Use the AI Development Prompt above to prototype features with Claude/GPT-4o first.

---

## 💖 Sponsor

If you find AgentScope Pro useful, consider supporting development:

- **GitHub Sponsors:** [github.com/sponsors/SamoTech](https://github.com/sponsors/SamoTech)
- **PayPal:** samo.hossam@gmail.com

---

## 📄 License

[MIT License](../LICENSE) © 2026 SamoTech (Ossama Hashim)

---

*AgentScope Pro v2 · Built with ❤️ by [SamoTech](https://github.com/SamoTech) · Cairo, Egypt · 2026*