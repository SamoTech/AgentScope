# 🤖 AgentScope

**AI Agents Intelligence Center**

AgentScope is a lightweight, production-ready **AI intelligence dashboard** that brings together:
- Live **AI agents news** from multiple sources with **sentiment analysis** and **category classification**.
- Live **AI market data** for the main infrastructure and agent-related stocks with **sparkline charts**.
- A clean, responsive **single-page UI** with **light/dark themes** that can be hosted anywhere (Netlify, Cloudflare Pages, GitHub Pages).

It is designed as a **reference implementation** for dashboards that monitor agentic AI ecosystems (frameworks, infra, products) without any backend services.

[![Live Dashboard](https://img.shields.io/badge/Live-Dashboard-00e0ff?style=for-the-badge&logo=netlify&logoColor=white)](https://agentscope.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-6b46c1?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/SamoTech/AgentScope?style=for-the-badge&color=ffd166)](https://github.com/SamoTech/AgentScope/stargazers)
[![Sponsor](https://img.shields.io/badge/Sponsor-💖-ff69b4?style=for-the-badge)](https://github.com/sponsors/SamoTech)

---

## 🎯 Live Dashboard

**🚀 https://agentscope.netlify.app**

- Best viewed on desktop, fully responsive on mobile.
- Auto-refreshes every 5 minutes for both market and news data.
- **Theme toggle** (T key) for light/dark mode.
- **Keyboard shortcuts** (R = refresh, T = theme).

---

## 📦 Project Structure

```text
AgentScope/
├─ index.html          # Main single-page dashboard (all-in-one: HTML + CSS + JS)
├─ README.md           # Project documentation (you are here)
├─ LICENSE             # MIT license
├─ FUNDING.yml         # GitHub Sponsors / PayPal info
├─ css/
│  └─ style.css        # (legacy - superseded by embedded CSS in v1.1)
├─ js/
│  └─ app.js           # (legacy - superseded by embedded JS in v1.1)
└─ .github/
   └─ workflows/
      └─ sponsor.yml   # /sponsor workflow and sponsor automation
```

**Note:** v1.1 uses a **single-file architecture** (index.html contains all CSS and JS) for maximum portability and zero build requirements.

---

## 🚀 Features

### v1.1 — Current Production Version ✅

#### AI Market Overview
- **Live AI infrastructure stock prices** (NVDA, AMD, MSFT, GOOGL, META, AVGO, ARM, PLTR, ORCL).
- **Real-time % change** with green/red coloring for quick sentiment.
- **Canvas sparkline charts** on every stock card showing intraday trend visualization.
- **Segment tags** (🖥 GPU/Infra, ☁️ Cloud, 🤖 Agents, 🔗 Networking, 💡 Chips/IP, 📊 Data/AI).
- **Segment filtering** to focus on a specific part of the AI stack.
- **Mock data fallback** — if FMP API fails, shows plausible demo data (no broken UI).

#### AI Agents News Feed
- **Live news** from:
  - Hacker News (top stories)
  - TechCrunch AI
  - VentureBeat AI
  - AI News
- **Sentiment badges** on every article: 📈 Bullish / 📉 Bearish / ➡ Neutral (keyword-based classification).
- **Category tags**: 🤖 Agents / 🔬 Research / ⚙️ Infra / 💰 Funding (auto-classified).
- **Category filter row** for one-click news triage.
- **Cross-source deduplication** prevents duplicate articles.
- **Real-time search** on titles and descriptions (280ms debounce).
- **Source filter** to narrow down by publisher.
- **Read time estimates** computed from article length.
- **Auto-refresh** every 5 minutes to keep the feed fresh.

#### Professional UI
- **Dark + Light themes** with smooth toggle (T key or button).
- **IBM Plex Mono + Syne fonts** for distinctive terminal aesthetic.
- **Noise texture overlay** for visual depth.
- **Loading skeleton cards** with shimmer animation (no blank flashes).
- **Smooth fade-in animations** with staggered delays per card.
- **Top KPI bar**: Last Sync | AI Stocks | Articles | **Top Mover** | **Next Refresh Countdown**.
- **Keyboard shortcuts**: `R` = refresh, `T` = toggle theme.
- Optimized for quick scanning of both market signals + narrative.

#### Code Architecture
- **IIFE module pattern** — all code scoped, zero globals leaked.
- **Single state object** — one source of truth for all app state.
- **Labeled sections** with clear separation:
  ```
  CONFIG → STATE → UTIL → SENTIMENT → CATEGORY → SPARKLINES → 
  STOCKS → NEWS → KPI → COUNTDOWN → THEME → EVENTS → INIT
  ```
- **CSS custom properties** for theming (easy to customize).
- **Zero build step** — open `index.html` directly in any browser.

---

## 🛠️ Tech Stack

| Frontend | Hosting | Data Sources |
|----------|---------|--------------|
| HTML, CSS, JavaScript | **Netlify** | Hacker News API |
| Vanilla JS, no framework | Global CDN | **TechCrunch AI RSS** |
| Responsive layout | Auto-deploy | **VentureBeat AI RSS** |
| IBM Plex Mono + Syne fonts | | **AI News RSS** |
| Canvas API for sparklines | | **FMP Stock API** |

---

## 📊 AI Stock Tickers Tracked

| Symbol | Company | Segment |
|--------|---------|---------|
| NVDA | NVIDIA | GPU/Infrastructure |
| AMD | AMD | GPU/CPUs |
| MSFT | Microsoft | Cloud/Copilot |
| GOOGL | Alphabet | Cloud/DeepMind |
| META | Meta | AI Infra/LLaMA |
| AVGO | Broadcom | AI Networking |
| ARM | Arm Holdings | AI Chips/IP |
| **PLTR** | **Palantir** | **Data/AI** |
| **ORCL** | **Oracle** | **Cloud** |

---

## 📰 News Sources

| Source | Type | Coverage |
|--------|------|----------|
| Hacker News | API | Top AI/agent stories, discussions |
| **TechCrunch AI** | RSS | Enterprise AI, startups, funding |
| **VentureBeat AI** | RSS | Agent frameworks, applied AI |
| **AI News** | RSS | Research, industry analysis |

---

## 🔧 Setup & Deployment

### Netlify (✅ Live)

1. **Fork or clone** this repo.
2. On Netlify, choose **"New site from Git"** and connect to this repo.
3. Use default build settings (static site, no build command needed).
4. Set environment variables (optional but recommended):

   - `FMP_API_KEY` – Your FinancialModelingPrep API key (falls back to `demo` if not set).

5. Deploy – Netlify will host it at `https://<your-site>.netlify.app`.

### Cloudflare Pages (Alternative)

```yaml
Build command: exit 0
Build output: /
Root directory: /
```

### GitHub Pages (Alternative)

```yaml
# Enable GitHub Pages in repo settings
# Point to main branch / root
# Your site will be at: https://<username>.github.io/<repo>
```

---

## 🧪 Local Development

```bash
# Clone the repository
git clone https://github.com/SamoTech/AgentScope.git
cd AgentScope

# Open the dashboard in your browser
open index.html   # macOS
# OR use Live Server extension in VS Code
# OR python3 -m http.server 8000
```

All logic runs in the browser – no backend required.

---

## 🔗 APIs Used

| API | Purpose | Free Tier |
|-----|----------|-----------|
| Hacker News | AI news discovery | Unlimited |
| RSS2JSON | RSS parsing for TechCrunch / VentureBeat / AI News | ~1,000/day (public) |
| **FMP** | **AI stock prices & % changes** | **Free developer tier (limited)** |

You can replace or extend these with your own keys or self-hosted proxies.

---

## 📈 Roadmap

### ✅ Completed (v1.0 Base)
- FMP stock data in AI Market panel.
- RSS news integration (TechCrunch AI, VentureBeat AI, AI News, HN).
- Professional dark-themed two-panel UI with KPIs.
- Segment + source filters, real-time search.
- Auto-refresh every 5 minutes.
- Netlify deploy.

### ✅ Completed (v1.1 Upgrade)
- **Sparkline charts** on stock cards (Canvas 2D).
- **Sentiment badges** on news cards (keyword-based: bullish/bearish/neutral).
- **Category tags + filter** (🤖 Agents / 🔬 Research / ⚙️ Infra / 💰 Funding).
- **Light / Dark theme toggle** with CSS custom properties.
- **Loading skeletons** with shimmer animation.
- **Top Mover KPI** + refresh countdown timer.
- **News deduplication** across sources.
- **Read time estimates** on articles.
- **Keyboard shortcuts** (R = refresh, T = theme).
- Expanded to **9 stocks** (added PLTR, ORCL).
- Modular **IIFE JS architecture** with labeled sections.
- Proper **error fallback** (mock data if FMP fails).
- **Search debounce** (280ms).

### 🔜 Short-Term (v1.2 — Next Sprint)
- [ ] **GitHub Trending AI Repos** third panel.
- [ ] **Netlify Function** as FMP API proxy (hide key from client).
- [ ] **Custom domain** (e.g., `agentscope.dev`).
- [ ] **PWA manifest + service worker** for offline support.
- [ ] **User watchlist** stored in `localStorage`.

### 📅 Medium-Term (v2.0)
- [ ] **Real sentiment via Claude API** (batch classification with confidence scores).
- [ ] **Configurable watchlist via URL hash** (e.g., `#NVDA,TSLA,PLTR`).
- [ ] **AI Fear & Greed Index** visualization (composite of market signals).
- [ ] **Simple alerting**: highlight stocks with daily change > 5%.
- [ ] **Multi-source aggregation scoring** (weight HN, TC, VB differently).

### 🧪 Experimental (v3.0+)
- [ ] **LLM-powered news cluster summarization**.
- [ ] **Multi-agent orchestration framework map** (visual graph).
- [ ] **GitHub issue integration** for event logging.
- [ ] **Real-time WebSocket price feed** (replace polling).
- [ ] **Sharable snapshot URLs** (freeze a moment in time).

---

## 🤝 Contributing

AgentScope is intentionally kept **simple and hackable**.

1. Fork the repo.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes (UI, sources, APIs).
4. Commit with a clear message:
   ```bash
   git commit -m "feat: add my feature"
   ```
5. Push and open a Pull Request:
   ```bash
   git push origin feature/your-feature
   ```

**Tip:** Open an issue first if you plan a bigger change (new APIs, major layout changes).

**Type `/sponsor` in any issue** to get sponsor links via the workflow.

---

## 💖 Sponsor

If you find AgentScope useful, consider supporting ongoing development:

- **GitHub Sponsors:** [github.com/sponsors/SamoTech](https://github.com/sponsors/SamoTech)
- **PayPal:** samo.hossam@gmail.com

---

## 📄 License

[MIT License](LICENSE) © 2026 SamoTech (Ossama Hashim)

---

## 🎓 Learn More

For a **complete analysis, refactoring plan, and AI development prompt**, see:
- [AGENTSCOPE_ANALYSIS_AND_PROMPT.md](docs/AGENTSCOPE_ANALYSIS_AND_PROMPT.md) *(coming soon)*

This document includes:
- Full assessment of v1.0 → v1.1 changes
- 14 identified issues + solutions
- 15 enhancement proposals
- Complete AI-assisted development prompt for future features
- Roadmap integration

---

**Made with ❤️ by [SamoTech](https://github.com/SamoTech)** · Cairo, Egypt · 2026