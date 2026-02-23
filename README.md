# 🤖 AgentScope

**AI Agents Intelligence Center**

AgentScope is a lightweight, production-ready **AI intelligence dashboard** that brings together:
- Live **AI agents news** from multiple sources.
- Live **AI market data** for the main infrastructure and agent-related stocks.
- A clean, responsive **single-page UI** that can be hosted anywhere (Netlify, Cloudflare Pages, GitHub Pages).

It is designed as a **reference implementation** for dashboards that monitor agentic AI ecosystems (frameworks, infra, products) without any backend services.

[![Netlify Status](https://api.netlify.com/api/v1/badges/[your-site-id]/deploy-status)](https://agentscope.netlify.app)
[![GitHub license](https://img.shields.io/github/license/SamoTech/AgentScope?color=%236b46c1)](LICENSE)
[![GitHub commits](https://img.shields.io/github/commits/main/SamoTech/AgentScope/main?color=%236b46c1)](https://github.com/SamoTech/AgentScope/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/SamoTech/AgentScope?color=%23ff6b6b)](https://github.com/SamoTech/AgentScope/issues)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=💖&color=%23ff69b4)](https://github.com/sponsors/SamoTech)

## 🎯 Live Dashboard

**https://agentscope.netlify.app**

- Best viewed on desktop, fully responsive on mobile.
- Auto-refreshes every 5 minutes for both market and news data.

---

## 📦 Project structure

```text
AgentScope/
├─ index.html          # Main single-page dashboard (AI Market + News panels)
├─ README.md           # Project documentation (you are here)
├─ LICENSE             # MIT license
├─ FUNDING.yml         # GitHub Sponsors / PayPal info
├─ css/
│  └─ style.css        # Dark theme, layout, responsive styles
├─ js/
│  └─ app.js           # All client-side logic (stocks, news, filters, auto-refresh)
└─ .github/
   └─ workflows/
      ├─ sponsor.yml   # /sponsor workflow and sponsor automation
      └─ deploy-pages.yml (optional) # GitHub Pages workflow (not required on Netlify)
```

---

## 🚀 Features

### AI Market Overview ✓
- **Live AI infrastructure stock prices** (NVDA, AMD, MSFT, GOOGL, META, AVGO, ARM).
- **Real-time % change** with green/red coloring for quick sentiment.
- **Segment tags** (GPU, Cloud, Agent Platform, Networking, Chips/IP).
- **Segment filtering** to focus on a specific part of the AI stack.

### AI Agents News Feed ✓
- **Live news** from:
  - Hacker News
  - TechCrunch AI
  - VentureBeat AI
  - AI News
- **RSS + API aggregation** using rss2json + HN JSON API.
- **Real-time search** on titles and descriptions.
- **Source filter** to narrow down by publisher.
- **Auto-refresh** every 5 minutes to keep the feed fresh.

### Professional UI ✓
- **Dark themed**, responsive layout (desktop + mobile).
- **Top KPI bar**: last sync time, AI stocks count, articles count, LIVE indicator.
- **Two main panels**:
  - AI Market Overview (top)
  - AI Agents News Feed (bottom)
- Optimized for quick scanning of both market + narrative.

---

## 🛠️ Tech Stack

| Frontend | Hosting | Data Sources |
|----------|---------|--------------|
| HTML, CSS, JavaScript | **Netlify** | Hacker News API |
| Vanilla JS, no framework | Global CDN | **TechCrunch AI RSS** |
| Responsive layout | Auto-deploy | **VentureBeat AI RSS** |
| | | **AI News RSS** |
| | | **FMP Stock API** |

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

---

## 🧪 Local Development

```bash
# Clone the repository
git clone https://github.com/SamoTech/AgentScope.git
cd AgentScope

# Open the dashboard in your browser
open index.html   # or use Live Server in VS Code
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

### ✅ Completed
- Wire **FMP stock data** into AI Market panel.
- RSS news integration for **TechCrunch AI**, **VentureBeat AI**, **AI News**.
- Professional, responsive **two-panel UI** with KPIs.
- Sponsor workflow + FUNDING configuration.

### 🔜 Short-term
- Integrate **NewsData.io** or similar for richer AI/agent news.
- Add **custom domain** (for example, `agentscope.dev`).
- Basic **sentiment badges** on news cards (bullish / bearish / neutral).
- **Stock sparklines** for top 3 tickers (NVDA, AMD, MSFT).

### 📅 Medium-term
- Tagging of articles into **Agents / Infra / Apps / Research**.
- Configurable **watchlist** for custom AI tickers.
- Simple **alerting** (e.g., highlight when daily change > X%).
- Toggle between **light / dark themes**.

### 🧪 Experimental ideas
- Local or remote **LLM summarization** of news clusters.
- **Multi-agent orchestration** view (map frameworks, tools, LLMs).
- Integration with **GitHub issues** to log interesting events.

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

- **GitHub Sponsors:** https://github.com/sponsors/SamoTech
- **PayPal:** samo.hossam@gmail.com

---

## 📄 License

[MIT License](LICENSE) © 2026 SamoTech (Ossama Hashim)

---

**Made with ❤️ by [SamoTech](https://github.com/SamoTech)** · Cairo, Egypt · 2026
