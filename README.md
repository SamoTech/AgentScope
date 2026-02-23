# 🤖 AgentScope

**AI Agents Intelligence Center** - Live dashboard tracking AI agent news, market data, and ecosystem developments.

[![Netlify Status](https://api.netlify.com/api/v1/badges/[your-site-id]/deploy-status)](https://agentscope.netlify.app)
[![GitHub](https://img.shields.io/github/license/SamoTech/AgentScope?color=%236b46c1)](LICENSE)
[![GitHub commits](https://img.shields.io/github/commits/main/SamoTech/AgentScope/main?color=%236b46c1)](https://github.com/SamoTech/AgentScope/commits/main)

## 🎯 Live Dashboard

**[https://agentscope.netlify.app](https://agentscope.netlify.app)**

## 🚀 Features

### AI Market Overview
- Real-time AI infrastructure stock prices
- % change, color-coded (green/red)
- GPU, Cloud, Agent Platform segmentation
- Segment filtering

### AI Agents News Feed
- Live news from Hacker News, TechCrunch AI, VentureBeat AI
- RSS + API aggregation
- Real-time search
- Source filtering
- Auto-refresh every 5 minutes

### Professional UI
- Dark theme, responsive design
- KPI dashboard (stocks, articles, sync time)
- LIVE status indicator
- Modern card layouts

## 🛠️ Tech Stack

| Frontend | Hosting | Data Sources |
|----------|---------|--------------|
| HTML/CSS/JS | Netlify | Hacker News API |
| Vanilla JS | Global CDN | TechCrunch AI RSS |
| Responsive | Auto-deploy | VentureBeat AI RSS |

## 📊 AI Stock Tickers Tracked

| Symbol | Company | Segment |
|--------|---------|---------|
| NVDA | NVIDIA | GPUs/Infrastructure |
| AMD | AMD | GPUs/CPUs |
| MSFT | Microsoft | Cloud/Copilot |
| GOOGL | Alphabet | Cloud/DeepMind |
| META | Meta | AI Infra/LLaMA |
| AVGO | Broadcom | AI Networking |
| ARM | Arm Holdings | AI Chips/IP |

## 📰 News Sources

| Source | Type | Coverage |
|--------|------|----------|
| Hacker News | API | Top AI stories |
| TechCrunch AI | RSS | Enterprise AI |
| VentureBeat AI | RSS | Agent frameworks |
| AI News | RSS | Research news |

## 🔧 Setup & Deployment

### Netlify (Current)
1. Connected to GitHub repo
2. Auto-deploys on push to main
3. Live: https://agentscope.netlify.app

### Cloudflare Pages (Alternative)
```yaml
Build command: exit 0
Build output: /
Root directory: /
```

## 🧪 Local Development

```bash
# Clone repo
git clone https://github.com/SamoTech/AgentScope.git
cd AgentScope

# Open index.html directly in browser
# All APIs work client-side, no server needed
open index.html
```

## 🔗 APIs Used

| API | Purpose | Free Tier |
|-----|----------|-----------|
| Hacker News | AI news discovery | Unlimited |
| RSS2JSON | RSS parsing | 1,000/day |
| FinancialModelingPrep | Stock prices | 250/day |
| NewsData.io | Premium AI news | 200/day |

## 📈 Roadmap

### Next 24h
- [ ] Wire FMP stock data
- [ ] NewsData.io integration
- [ ] Custom domain

### Next 7 days
- [ ] Sentiment analysis
- [ ] AI stock sparkline charts
- [ ] News categorization

## 🤝 Contributing

1. Fork the repo
2. Create feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -m 'feat: description'`)
4. Push (`git push origin feature/name`)
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE)

---

**Made with ❤️ by [SamoTech](https://github.com/SamoTech)** | Cairo, Egypt | 2026