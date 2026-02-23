# 🤖 AgentScope

**AI Agents Intelligence Center** - Live dashboard tracking AI agent news, market data, and ecosystem developments.

[![Netlify Status](https://api.netlify.com/api/v1/badges/[your-site-id]/deploy-status)](https://agentscope.netlify.app)
[![GitHub license](https://img.shields.io/github/license/SamoTech/AgentScope?color=%236b46c1)](LICENSE)
[![GitHub commits](https://img.shields.io/github/commits/main/SamoTech/AgentScope/main?color=%236b46c1)](https://github.com/SamoTech/AgentScope/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/SamoTech/AgentScope?color=%23ff6b6b)](https://github.com/SamoTech/AgentScope/issues)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=💖&color=%23ff69b4)](https://github.com/sponsors/SamoTech)

## 🎯 Live Dashboard

**[https://agentscope.netlify.app](https://agentscope.netlify.app)**

## 🚀 Features

### AI Market Overview ✓
- **Live AI infrastructure stock prices** (NVDA, AMD, MSFT, GOOGL, META, AVGO, ARM)
- **Real-time % change** (color-coded green/red)
- **GPU, Cloud, Agent Platform segmentation**
- **Segment filtering**

### AI Agents News Feed ✓
- **Live news** from Hacker News + TechCrunch AI + VentureBeat AI + AI News
- **RSS + API aggregation**
- **Real-time search**
- **Source filtering**
- **Auto-refresh every 5 minutes**

### Professional UI ✓
- **Dark theme, responsive design**
- **KPI dashboard** (stocks, articles, sync time)
- **LIVE status indicator**
- **Modern card layouts**

## 🛠️ Tech Stack

| Frontend | Hosting | Data Sources |
|----------|---------|--------------|
| HTML/CSS/JS | **Netlify** | Hacker News API |
| Vanilla JS | Global CDN | **TechCrunch AI RSS** |
| Responsive | Auto-deploy | **VentureBeat AI RSS** |
| | | **FMP Stock API** |

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

## 📰 News Sources

| Source | Type | Coverage |
|--------|------|----------|
| Hacker News | API | Top AI stories |
| **TechCrunch AI** | RSS | Enterprise AI |
| **VentureBeat AI** | RSS | Agent frameworks |
| **AI News** | RSS | Research news |

## 🔧 Setup & Deployment

### Netlify (✅ Live)
1. Connected to GitHub repo
2. Auto-deploys on push to main
3. Live: https://agentscope.netlify.app
4. Env vars: `FMP_API_KEY` (demo mode works)

### Cloudflare Pages (Alternative)
```yaml
Build command: exit 0
Build output: /
Root directory: /
```

## 🧪 Local Development

```bash
git clone https://github.com/SamoTech/AgentScope.git
cd AgentScope
open index.html  # All APIs work client-side
```

## 🔗 APIs Used

| API | Purpose | Free Tier |
|-----|----------|-----------|
| Hacker News | AI news discovery | Unlimited |
| RSS2JSON | RSS parsing | 1,000/day |
| **FMP** | **AI stock prices** | **250/day** |

## 📈 Roadmap

✅ **Wire FMP stock data**
✅ **RSS news integration**
✅ **Professional UI**
✅ **Sponsor workflow**

⏳ **Next:**
- NewsData.io (premium AI news)
- Custom domain
- Sentiment analysis
- Stock sparklines

## 🤝 Contributing

1. Fork → `git checkout -b feature/name`
2. Commit → `git commit -m 'feat: description'`
3. Push → `git push origin feature/name`
4. **Open PR** → Auto‑reviewed

**Type `/sponsor` for donation links.**

## 💖 Sponsor

[Sponsor on GitHub](https://github.com/sponsors/SamoTech) | PayPal: samo.hossam@gmail.com

## 📄 License

[MIT License](LICENSE) © 2026 SamoTech (Ossama Hashim)

---

**Made with ❤️ by [SamoTech](https://github.com/SamoTech)** | Cairo, Egypt | 2026