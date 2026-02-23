<div align="center">
  <h1>🤖 AgentScope Pro</h1>
  <p><strong>The Zero-Build AI Intelligence Terminal</strong></p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Netlify Status](https://api.netlify.com/api/v1/badges/id/deploy-status)](https://app.netlify.com/sites/agentscope)
  [![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen.svg)]()
</div>

> **Tired of 500MB `node_modules` just to render a dashboard?** 
> AgentScope Pro is a real-time AI ecosystem tracker built with pure HTML/JS, backed by a single Edge Function. Zero build steps, zero databases, 100% hackable.

---

## ⚡ The Architecture

AgentScope utilizes an **Edge-Cached Proxy**. Instead of a complex database architecture, a single Netlify Function fetches external data (stocks, news) and caches it at the CDN edge for 15 minutes. 
- **Cost:** $0/month (easily handles 500+ daily visitors without hitting API rate limits)
- **Databases:** None required
- **Build Time:** 0 seconds

## 🛠 How to Hack It (60-Second Onboarding)

Because there is no Webpack, Vite, or React, you can modify this dashboard instantly.
1. Clone the repo.
2. Open `index.html` in your browser.
3. You're developing.

The single point of truth for configurations (Ticker Symbols and RSS Feeds) remains securely inside the `index.html` file, sending dynamic proxy requests without exposing your API keys.

## 📦 Features

- **Real-Time AI Market Data:** 30 categorized AI equities (Compute, Agents, Data, Robotics).
- **Hacker News & RSS Ingestion:** Parallel streaming of 13 developer-focused news sources.
- **Client-Side Compute:** Sentiment analysis and trending topic extraction happen in the browser to save server compute.
- **Zero-Dependency Proxy:** Solves CORS and API key exposure with a 50-line `proxy.js` edge function.

## 🚀 Quick Start (Deployment)

1. Fork this repo.
2. Connect to Netlify: **"New site from Git"**
3. Build command: **Leave empty** (We are zero-build!)
4. Environment Variables: Add `FMP_API_KEY` (FinancialModelingPrep API Key)
5. Deploy.

## 🤝 Contributing

We tag simple fixes as `good first issue`. Want to add an RSS feed or stock ticker? 
1. Open `index.html`
2. Add your source to the `CFG.STOCKS` or `CFG.NEWS_SOURCES` object.
3. Submit a PR. It takes 60 seconds.

## ⭐ Support the Project

If this repository helped you understand edge caching proxying, vanilla JS architecture, or if you just love tracking AI, **please leave a star!** It helps us attract more contributors.
