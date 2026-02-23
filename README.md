# 🤖 AgentScope Pro

**Professional AI Intelligence Terminal**

AgentScope Pro is a **single-file, zero-build, zero-backend AI intelligence dashboard** that tracks the agentic AI ecosystem in real-time. Open `index.html` in any browser or deploy to Netlify/Cloudflare Pages in seconds — no installation required.

[![Live Dashboard](https://img.shields.io/badge/Live-Dashboard-00e0ff?style=for-the-badge&logo=netlify&logoColor=white)](https://agentscope.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-6b46c1?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/SamoTech/AgentScope?style=for-the-badge&color=ffd166)](https://github.com/SamoTech/AgentScope/stargazers)
[![Sponsor](https://img.shields.io/badge/Sponsor-💖-ff69b4?style=for-the-badge)](https://github.com/sponsors/SamoTech)

---

## 🎯 Live Dashboard

**🚀 https://agentscope.netlify.app**

- **30 AI stocks** across 7 segments (Pure AI, GPU, Cloud, Agents, Chips, Data/AI, Robotics)
- **13 news sources** with sentiment analysis and category classification
- **Bloomberg-style UI** with ticker tape, sidebar analytics, heatmaps
- **5-dimensional filtering** (source, category, sentiment, search, time)
- **Light/Dark themes** (T key) · **Auto-refresh** every 5 minutes
- **Keyboard shortcuts**: R = refresh, T = theme, / = search

---

## 🆕 What's New in v2.0 Professional

### 📊 Stock Tracking: 9 → 30 Tickers Across 7 Segments

| Segment | Tickers |
|---------|----------|
| **🤖 Pure AI** | AI (C3.ai), SOUN, BBAI, AITX, AMBA |
| **🖥 GPU/Infra** | NVDA, AMD, INTC |
| **☁️ Cloud** | MSFT, GOOGL, AMZN, ORCL, IBM |
| **⚡ Agents** | META, CRM, NOW, PEGA, NICE |
| **💡 Chips** | AVGO, ARM, QCOM, MRVL, ASML |
| **📊 Data/AI** | PLTR, SNOW, MDB, DDOG, S |
| **🦶 Robotics** | TSLA, IRBT |

### 📰 News Expansion: 4 → 13 Sources

| Source | Type | Coverage |
|--------|------|----------|
| **Hacker News** | API | Developer discussions, top AI stories |
| **TechCrunch AI** | RSS | Startups, funding, product launches |
| **VentureBeat AI** | RSS | Enterprise AI, agent frameworks |
| **AI News** | RSS | Research, industry analysis |
| **The Verge AI** | RSS | Consumer AI products |
| **Wired AI** | RSS | Long-form tech journalism |
| **MIT Technology Review** | RSS | Research-grade coverage |
| **ZDNet AI** | RSS | Enterprise technology |
| **InfoQ AI** | RSS | Engineering & architecture |
| **Analytics Vidhya** | RSS | ML/Data Science |
| **KDnuggets** | RSS | Data science, ML news |
| **AI Business** | RSS | Business applications |
| **DataScienceWeekly** | RSS | Curated newsletter |

### 🎆 Professional UI Enhancements

#### 📊 Sidebar Analytics (Desktop)
- 🔥 **Heatmap** — Top 8 movers with color-coded cells
- 📊 **Sector Performance** — Average % change bars per segment
- 📰 **Source Distribution** — Article counts by publisher with bar chart
- 🏷️ **Trending Topics** — Clickable AI keyword cloud extracted from all articles
- ⌨️ **Keyboard Shortcuts** — Quick reference panel

#### 📢 Bloomberg-Style Features
- **Ticker Tape** — Scrolling marquee with all 30 stocks (real-time % changes)
- **Market Status** — Live NYSE/NASDAQ open/closed indicator (Eastern Time)
- **8 KPI Cells** — Last Sync | Stocks Tracked | Articles Live | Top Gainer | Top Loser | Sources | Next Refresh

#### 🎯 Advanced Filtering
- **Global Search** — Searches stocks AND news simultaneously
- **Sort Controls** — % change ↓↑ | Price ↓↑ | A–Z
- **Quick Filters** — 🟽 Gainers | 🟽 Losers (one-click)
- **Sentiment Row** — 📈 Bullish | ➡ Neutral | 📉 Bearish
- **5D News Filter** — Source + Category + Sentiment + Search + Time

#### 🎨 Visual Design
- **Canvas Sparklines** — Gradient-filled trend charts on every stock card
- **Sentiment Badges** — Color-coded keyword-based analysis (📈 Bullish / 📉 Bearish / ➡ Neutral)
- **Category Tags** — 🤖 Agents / 🔬 Research / ⚙️ Infra / 💰 Funding / 🏛️ Policy
- **Loading Skeletons** — Shimmer animation (no blank flashes)
- **Staggered Fade-In** — Smooth card entrance animations
- **JetBrains Mono + Outfit** — Professional terminal aesthetic

---

## 💻 Architecture

### Single-File Design

```
index.html (1 file, ~1,568 lines)
├─ <style>  — Complete design system with CSS custom properties
│   ├─ :root tokens (dark) + [data-theme="light"] overrides
│   ├─ Nav, Ticker Tape, KPI Bar, Sidebar
│   ├─ Stock cards, News cards, Heatmap, Charts
│   └─ Skeleton loaders, animations, responsive grid
│
└─ <script> — IIFE application (zero globals)
    ├─ CFG       — Config: 30 stocks, 13 sources, API keys
    ├─ STATE     — Single state object (stocks, news, filters)
    ├─ UTILS     — timeAgo, readTime, fmtPrice, fmtChange
    ├─ MARKET    — NYSE/NASDAQ hours detection
    ├─ SENTIMENT — Keyword-based classifier
    ├─ CATEGORY  — Auto-detect article categories
    ├─ TOPICS    — Extract trending keywords
    ├─ SPARKLINE — Canvas 2D charts with gradients
    ├─ STOCKS    — Fetch, filter, sort, render
    ├─ TAPE      — Scrolling ticker marquee
    ├─ HEATMAP   — Top movers visualization
    ├─ SECTORS   — Avg % per segment bars
    ├─ NEWS      — Parallel HN + RSS fetch + dedupe
    ├─ SIDEBAR   — Analytics widgets
    ├─ KPI       — Update dashboard metrics
    ├─ COUNTDOWN — Next refresh timer
    ├─ THEME     — Light/dark toggle
    └─ EVENTS    — Keyboard shortcuts + filters
```

### Design System Tokens

```css
/* Dark Theme (Default) */
--bg-base:    #03070f   /* Page background */
--bg-surface: #080f1c   /* Nav, KPI bar */
--bg-card:    #0c1526   /* Cards */
--accent:     #3d8bff   /* Interactive elements */
--green:      #00d68f   /* Positive */
--red:        #ff4d6a   /* Negative */
--text-1:     #dce8ff   /* Primary text */
--f-mono:     "JetBrains Mono"  /* Data, code */
--f-ui:       "Outfit"          /* UI, headlines */

/* Light theme available via [data-theme="light"] */
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Pure HTML, CSS, JavaScript (ES2020) |
| **Architecture** | IIFE module pattern (zero globals) |
| **Fonts** | JetBrains Mono (Google Fonts) + Outfit |
| **Charts** | Canvas 2D API (sparklines, heatmap) |
| **Hosting** | Netlify (or Cloudflare Pages, GitHub Pages) |
| **Stock Data** | FinancialModelingPrep API (FMP) |
| **News** | Hacker News API + RSS2JSON (12 RSS feeds) |
| **Build** | ❌ None — runs directly in browser |
| **Dependencies** | ❌ None — zero npm packages |

---

## 🚀 Quick Start

### Option 1: Run Locally (No Install)

```bash
# Clone and open
git clone https://github.com/SamoTech/AgentScope.git
cd AgentScope
open index.html  # macOS
# OR: start index.html on Windows
# OR: python3 -m http.server 8000
```

### Option 2: Deploy to Netlify (1 Click)

1. Fork this repo
2. Connect to Netlify: **"New site from Git"**
3. Build settings: **Leave empty** (static site, no build needed)
4. Optional: Add environment variable `FMP_API_KEY` (your FMP key)
5. Deploy → Live at `https://your-site.netlify.app`

### Option 3: Cloudflare Pages

```yaml
Build command: exit 0
Build output directory: /
Root directory: /
```

### Option 4: GitHub Pages

1. Go to repo Settings → Pages
2. Source: Deploy from `main` branch, `/` root
3. Your site: `https://<username>.github.io/AgentScope`

---

## 🧪 Local Development

**Zero setup required.** Just edit `index.html` and refresh your browser.

```bash
# Recommended: Use VS Code Live Server extension
code index.html
# Right-click → "Open with Live Server"

# Or use Python
python3 -m http.server 8000
# Visit http://localhost:8000
```

**All changes are instant** — no build step, no hot reload config, no webpack.

---

## 📈 Roadmap

### ✅ v1.0 — Base Release (Completed)
- FMP stock data (7 tickers)
- RSS news (4 sources: HN, TechCrunch, VentureBeat, AI News)
- Dark-themed two-panel UI with KPIs
- Segment + source filters
- Auto-refresh every 5 minutes

### ✅ v1.1 — Signal Layer (Completed)
- ✅ Canvas sparkline charts on stock cards
- ✅ Sentiment badges (bullish/bearish/neutral)
- ✅ Category tags (Agents/Research/Infra/Funding)
- ✅ Light/dark theme toggle
- ✅ Loading skeleton animation
- ✅ Top Mover KPI + countdown timer
- ✅ Cross-source news deduplication
- ✅ Read time estimates
- ✅ Keyboard shortcuts (R, T)
- ✅ Expanded to 9 stocks (added PLTR, ORCL)
- ✅ IIFE architecture with labeled sections
- ✅ Mock data fallback
- ✅ Search debounce (280ms)

### ✅ v2.0 — Professional (Current)
- ✅ **30 stocks** across 7 segments
- ✅ **13 news sources** (HN + 12 RSS feeds)
- ✅ **Sidebar analytics** (heatmap, sectors, source dist, topics)
- ✅ **Ticker tape** scrolling marquee
- ✅ **Market status** indicator (NYSE hours)
- ✅ **8 KPI cells** (sync, stocks, articles, gainer, loser, sources, refresh)
- ✅ **5-dimensional news filtering**
- ✅ **Sort controls** (% change, price, A-Z)
- ✅ **Gainer/Loser quick filters**
- ✅ **Sentiment filter row**
- ✅ **Policy category** (regulatory news)
- ✅ **Global search** (stocks + news)
- ✅ **Trending topics** sidebar widget

### 🔜 v2.1 — Intelligence Layer (Next)
- [ ] **GitHub Trending AI Repos** panel
- [ ] **Netlify Function** FMP proxy (hide API key)
- [ ] **Weighted sentiment** with confidence scores
- [ ] **PWA + offline mode** (service worker)
- [ ] **Custom domain** (e.g., agentscope.dev)

### 📅 v3.0 — Personalization
- [ ] **Price alerts** (localStorage persistence)
- [ ] **Portfolio tracker** (shares, P&L, holdings)
- [ ] **URL hash watchlists** (shareable custom tickers)
- [ ] **WebSocket real-time prices** (Finnhub)
- [ ] **User preferences** (default filters, watchlist)

### 🧪 v4.0 — AI-Powered
- [ ] **Claude-powered news digest** (3-sentence summary)
- [ ] **Batch sentiment via LLM** (confidence scores)
- [ ] **AI ecosystem map** (visual framework graph)
- [ ] **Earnings calendar** integration
- [ ] **Multi-agent workflow** tracking

---

## 👨‍💻 AI Development Prompt

**Want to extend AgentScope Pro?** Use this prompt with Claude, GPT-4o, or Gemini:

```markdown
You are building AgentScope Pro (https://github.com/SamoTech/AgentScope),
a single-file AI intelligence dashboard.

Constraints:
- Pure HTML/CSS/JS (no npm, bundler, framework)
- IIFE pattern (no modules)
- Must work by opening index.html directly
- Deploys to Netlify/Cloudflare with zero config

Current stack:
- 30 stocks (7 segments: Pure AI, GPU, Cloud, Agents, Chips, Data/AI, Robotics)
- 13 news sources (HN + 12 RSS feeds)
- FMP API (stocks) + RSS2JSON + HN Firebase API
- JetBrains Mono + Outfit fonts

Task: [YOUR FEATURE REQUEST]

Output:
- Complete updated index.html
- Preserve all existing functionality
- Add new IIFE section with /* ── LABEL ── */ header
- Match existing animation patterns
- Mobile responsive (480px, 768px)
- Graceful error handling
```

**Full developer reference with 9 example tasks:**
📚 [docs/AGENTSCOPE_PRO_V2_REFERENCE.md](docs/AGENTSCOPE_PRO_V2_REFERENCE.md)

---

## 🔗 APIs & Data Sources

| API | Purpose | Tier | Rate Limit |
|-----|---------|------|------------|
| **FMP** | Stock prices & changes | Free developer | Limited requests |
| **Hacker News** | Top AI stories | Free | Unlimited |
| **RSS2JSON** | RSS feed parsing | Public | ~1,000/day |
| **13 RSS Feeds** | AI news aggregation | Free | No limit |

**Replace/extend:** You can use your own FMP key or self-host RSS proxies.

---

## 🤝 Contributing

AgentScope Pro is **intentionally simple and hackable**.

### How to Contribute

1. **Fork** the repo
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make your changes** (edit `index.html` directly)
4. **Commit with clear message:**
   ```bash
   git commit -m "feat: add [your feature]"
   ```
5. **Push and open PR:**
   ```bash
   git push origin feature/your-feature
   ```

### Contribution Ideas

- ⭐ Add new AI news sources
- 📊 Add new stock tickers or segments
- 🎨 Improve UI/UX design
- 🐛 Fix bugs or improve error handling
- 📝 Improve documentation
- ⚡ Performance optimizations
- 🌍 Internationalization (i18n)

**Tip:** Use the AI Development Prompt to prototype features first!

**Sponsor workflow:** Type `/sponsor` in any issue to get sponsor links.

---

## 💖 Sponsor

If AgentScope Pro saves you time or provides value, consider supporting development:

- **GitHub Sponsors:** [github.com/sponsors/SamoTech](https://github.com/sponsors/SamoTech)
- **PayPal:** samo.hossam@gmail.com

Your support enables:
- ✨ New features and enhancements
- 🐛 Bug fixes and maintenance
- 📚 Documentation improvements
- 🌐 Community support

---

## 📄 License

[MIT License](LICENSE) © 2026 **SamoTech** (Ossama Hashim)

Permission is hereby granted, free of charge, to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software.

---

## 🎓 Learn More

### Documentation

- **📚 Pro v2 Developer Reference:** [docs/AGENTSCOPE_PRO_V2_REFERENCE.md](docs/AGENTSCOPE_PRO_V2_REFERENCE.md)
  - Complete architecture breakdown
  - Design system tokens
  - AI development prompt with 9 example tasks
  - Component reference
  - Function documentation

- **📄 v1.1 Analysis:** [docs/AGENTSCOPE_ANALYSIS_AND_PROMPT.md](docs/AGENTSCOPE_ANALYSIS_AND_PROMPT.md) *(legacy)*
  - v1.0 → v1.1 upgrade analysis
  - 14 identified issues + solutions
  - 15 enhancement proposals

### Quick Links

- **Live Dashboard:** https://agentscope.netlify.app
- **GitHub Repo:** https://github.com/SamoTech/AgentScope
- **Issues:** https://github.com/SamoTech/AgentScope/issues
- **Discussions:** https://github.com/SamoTech/AgentScope/discussions

---

## ⭐ Star History

If you find this project useful, please consider giving it a star! ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=SamoTech/AgentScope&type=Date)](https://star-history.com/#SamoTech/AgentScope&Date)

---

**Made with ❤️ by [SamoTech](https://github.com/SamoTech)** · Cairo, Egypt · February 2026

*Tracking the agentic AI revolution, one data point at a time.* 🚀🤖