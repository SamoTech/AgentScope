// Configuration
const CONFIG = {
    refreshInterval: 300000, // 5 minutes
};

let allArticles = [];
let autoRefreshTimer = null;

async function init() {
    await fetchAllNews();
    setupEventListeners();
    startAutoRefresh();
}

async function fetchAllNews() {
    showLoading(true);
    hideError();

    const articles = [];

    await fetchFromHackerNews(articles);
    await fetchFromRSS(articles);

    if (articles.length === 0) {
        showError('No articles found. Showing demo data.');
        displayDemoArticles();
    } else {
        allArticles = removeDuplicates(articles).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        updateUI();
    }

    showLoading(false);
}

async function fetchFromHackerNews(articles) {
    try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const storyIds = await response.json();

        const stories = await Promise.all(
            storyIds.slice(0, 50).map(id =>
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json())
            )
        );

        stories.forEach(story => {
            if (story && story.title && isAIAgentRelated(story.title)) {
                articles.push({
                    title: story.title,
                    description: story.text ? cleanHTML(story.text) : 'Discussion on Hacker News',
                    url: story.url || `https://news.ycombinator.com/item?id=${story.id}`,
                    source: 'Hacker News',
                    publishedAt: new Date(story.time * 1000).toISOString(),
                    imageUrl: null
                });
            }
        });
    } catch (error) {
        console.error('Error fetching from Hacker News:', error);
    }
}

async function fetchFromRSS(articles) {
    const rssSources = [
        {
            name: 'TechCrunch AI',
            url: 'https://techcrunch.com/category/artificial-intelligence/feed/'
        },
        {
            name: 'VentureBeat AI',
            url: 'https://venturebeat.com/category/ai/feed/'
        },
        {
            name: 'AI News',
            url: 'https://artificialintelligence-news.com/feed/'
        }
    ];

    for (const source of rssSources) {
        try {
            const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.url)}`;
            const response = await fetch(rss2jsonUrl);
            const data = await response.json();

            if (data.status === 'ok' && data.items) {
                data.items.forEach(item => {
                    const content = `${item.title} ${item.description || ''}`;
                    if (isAIAgentRelated(content)) {
                        articles.push({
                            title: item.title,
                            description: cleanHTML(item.description),
                            url: item.link,
                            source: source.name,
                            publishedAt: item.pubDate,
                            imageUrl: item.thumbnail || null
                        });
                    }
                });
            }
        } catch (error) {
            console.error(`Error fetching from ${source.name}:`, error);
        }
    }
}

function isAIAgentRelated(text) {
    const keywords = [
        'ai agent', 'ai agents', 'autonomous agent', 'llm agent', 'ai automation',
        'agentic', 'multi-agent', 'multi agent', 'agent framework', 'agents framework',
        'workflow automation', 'autonomous ai', 'tool-using agents', 'crew.ai',
        'crewai', 'autogen', 'auto-gen', 'agent system', 'intelligent agent'
    ];
    const lowerText = text.toLowerCase();
    return keywords.some(keyword => lowerText.includes(keyword));
}

function cleanHTML(html) {
    if (!html) return '';
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent.slice(0, 220) + (temp.textContent.length > 220 ? '...' : '');
}

function removeDuplicates(articles) {
    const seen = new Set();
    return articles.filter(article => {
        const key = article.url || article.title;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

function updateUI() {
    displayArticles(allArticles);
    updateStatus();
    populateSourceFilter();
}

function displayArticles(articles) {
    const container = document.getElementById('newsContainer');

    if (articles.length === 0) {
        container.innerHTML = '<div class="no-results"><p>No articles found.</p></div>';
        return;
    }

    container.innerHTML = articles.map(article => `
        <article class="news-card">
            ${article.imageUrl ? `
                <div class="news-image">
                    <img src="${article.imageUrl}" alt="${escapeHtml(article.title)}" loading="lazy" onerror="this.parentElement.style.display='none'">
                </div>
            ` : ''}
            <div class="news-content">
                <h2><a href="${article.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(article.title)}</a></h2>
                ${article.description ? `<p class="description">${escapeHtml(article.description)}</p>` : ''}
                <div class="news-meta">
                    <span class="source">📰 ${escapeHtml(article.source)}</span>
                    <span class="date">🕒 ${formatDate(article.publishedAt)}</span>
                </div>
            </div>
        </article>
    `).join('');
}

function updateStatus() {
    document.getElementById('lastUpdate').textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
    document.getElementById('articleCount').textContent = `${allArticles.length} articles`;
}

function populateSourceFilter() {
    const sources = [...new Set(allArticles.map(a => a.source))].sort();
    const select = document.getElementById('sourceFilter');
    select.innerHTML = '<option value="all">All Sources</option>' +
        sources.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showLoading(show) {
    const container = document.getElementById('newsContainer');
    if (show && container.querySelector('.loading') === null) {
        container.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Fetching latest AI agent news...</p>
            </div>
        `;
    }
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

function hideError() {
    document.getElementById('errorMessage').style.display = 'none';
}

function displayDemoArticles() {
    allArticles = [
        {
            title: 'The Rise of Autonomous AI Agents in 2026',
            description: 'Exploring how AI agents are transforming business automation and productivity.',
            url: '#',
            source: 'Demo Article',
            publishedAt: new Date().toISOString(),
            imageUrl: null
        },
        {
            title: 'Building Multi-Agent Systems: A Complete Guide',
            description: 'Learn how to build and deploy multi-agent AI systems for complex workflows.',
            url: '#',
            source: 'Demo Article',
            publishedAt: new Date(Date.now() - 3600000).toISOString(),
            imageUrl: null
        }
    ];
    updateUI();
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = allArticles.filter(a =>
            a.title.toLowerCase().includes(query) ||
            (a.description && a.description.toLowerCase().includes(query))
        );
        displayArticles(filtered);
    });

    document.getElementById('sourceFilter').addEventListener('change', (e) => {
        const source = e.target.value;
        const filtered = source === 'all'
            ? allArticles
            : allArticles.filter(a => a.source === source);
        displayArticles(filtered);
    });

    document.getElementById('refreshBtn').addEventListener('click', () => {
        fetchAllNews();
    });
}

function startAutoRefresh() {
    if (autoRefreshTimer) clearInterval(autoRefreshTimer);
    autoRefreshTimer = setInterval(fetchAllNews, CONFIG.refreshInterval);
}

document.addEventListener('DOMContentLoaded', init);
