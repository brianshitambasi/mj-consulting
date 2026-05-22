import React, { useState } from 'react';
import './Insights.css';

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const trendingTopics = [
    { name: 'Artificial Intelligence', count: 24, icon: '🤖', color: '#6366f1', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop' },
    { name: 'ERP', count: 18, icon: '📊', color: '#10b981', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
    { name: 'Customer Experience', count: 15, icon: '⭐', color: '#f59e0b', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=300&fit=crop' },
    { name: 'Cloud', count: 22, icon: '☁️', color: '#3b82f6', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop' },
    { name: 'Internet of Things', count: 12, icon: '📡', color: '#8b5cf6', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop' },
    { name: 'RPA', count: 9, icon: '⚙️', color: '#ec4899', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop' },
    { name: 'Blockchain', count: 11, icon: '🔗', color: '#14b8a6', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop' },
    { name: 'Cybersecurity', count: 16, icon: '🔒', color: '#ef4444', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop' },
    { name: 'Data Analytics', count: 20, icon: '📈', color: '#06b6d4', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
    { name: 'DevOps', count: 14, icon: '🚀', color: '#a855f7', image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop' }
  ];

  // Full articles data for each topic
  const allArticles = {
    'Artificial Intelligence': [
      {
        id: 1,
        title: 'The Future of Generative AI in Enterprise',
        author: 'Dr. Sarah Chen',
        role: 'AI Research Director',
        date: 'May 20, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
        excerpt: 'How generative AI is transforming business operations from content creation to code generation.',
        content: 'Generative AI is revolutionizing how enterprises operate. From automated report generation to AI-assisted software development, organizations are seeing unprecedented productivity gains. This article explores practical applications, implementation strategies, and ROI expectations for businesses considering generative AI adoption.',
        tags: ['AI', 'Generative AI', 'Digital Transformation']
      },
      {
        id: 2,
        title: 'Agentic AI: Beyond Simple Automation',
        author: 'John Roberts',
        role: 'CEO & Founder',
        date: 'May 15, 2026',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop',
        excerpt: 'Moving from reactive chatbots to proactive AI agents that understand context and take action.',
        content: 'Agentic AI represents a paradigm shift where AI systems can plan, execute, and adapt to achieve complex goals autonomously. Unlike traditional chatbots that respond to specific prompts, agentic AI systems understand context, make decisions, and take action across multiple systems.',
        tags: ['AI', 'Agents', 'Automation']
      },
      {
        id: 3,
        title: 'AI in Healthcare: Transforming Patient Care',
        author: 'Dr. Emily Okonkwo',
        role: 'Healthcare Technology Lead',
        date: 'May 10, 2026',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
        excerpt: 'How AI-powered diagnostics and predictive analytics are saving lives.',
        content: 'Artificial intelligence is revolutionizing healthcare by enabling early disease detection, personalized treatment plans, and more efficient hospital operations. This article examines real-world applications and outcomes from leading healthcare institutions.',
        tags: ['Healthcare', 'AI', 'Medical Technology']
      }
    ],
    'ERP': [
      {
        id: 4,
        title: 'Modern ERP: From Legacy to Cloud-Native',
        author: 'Michael Chen',
        role: 'ERP Practice Lead',
        date: 'May 18, 2026',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        excerpt: 'Why cloud-native ERP systems are outperforming legacy solutions.',
        content: 'Legacy ERP systems often hold businesses back with rigid architectures and high maintenance costs. Cloud-native ERP solutions offer scalability, real-time insights, and lower total cost of ownership. This guide helps you navigate the migration journey.',
        tags: ['ERP', 'Cloud Migration', 'Digital Transformation']
      },
      {
        id: 5,
        title: 'Odoo vs SAP: Choosing the Right ERP',
        author: 'David Martinez',
        role: 'ERP Consultant',
        date: 'May 12, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        excerpt: 'A comprehensive comparison for mid-market and enterprise organizations.',
        content: 'Choosing between Odoo and SAP depends on your organization size, industry, and specific requirements. This comparison breaks down features, pricing, implementation timelines, and total cost of ownership.',
        tags: ['ERP', 'SAP', 'Odoo']
      }
    ],
    'Customer Experience': [
      {
        id: 6,
        title: 'Omnichannel CX: The New Standard',
        author: 'Sarah Williams',
        role: 'E-commerce Director',
        date: 'May 14, 2026',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop',
        excerpt: 'Why seamless customer experiences across all channels drive loyalty and revenue.',
        content: 'Today\'s customers expect consistent experiences whether they shop online, in-store, or via mobile. This article explores strategies for implementing true omnichannel customer experiences that drive satisfaction and repeat business.',
        tags: ['CX', 'Omnichannel', 'Retail']
      }
    ],
    'Cloud': [
      {
        id: 7,
        title: 'Multi-Cloud Strategies: Best Practices',
        author: 'Mary Jane',
        role: 'Senior Cloud Architect',
        date: 'May 13, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
        excerpt: 'How to avoid vendor lock-in while maximizing cloud benefits.',
        content: 'Multi-cloud strategies offer flexibility and risk mitigation, but they also introduce complexity. This guide provides best practices for designing, implementing, and managing multi-cloud environments.',
        tags: ['Cloud', 'Multi-Cloud', 'AWS', 'Azure', 'GCP']
      }
    ],
    'Internet of Things': [
      {
        id: 8,
        title: 'IoT and Edge Computing: The Perfect Pair',
        author: 'Robert Kimathi',
        role: 'IoT Practice Lead',
        date: 'May 9, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
        excerpt: 'How edge computing enables real-time IoT analytics and reduces latency.',
        content: 'Edge computing brings data processing closer to IoT devices, enabling real-time analytics and reducing bandwidth costs. This article explores use cases and implementation strategies.',
        tags: ['IoT', 'Edge Computing', 'Industry 4.0']
      }
    ],
    'RPA': [
      {
        id: 9,
        title: 'RPA vs AI: Understanding the Difference',
        author: 'Lisa Green',
        role: 'Automation Specialist',
        date: 'May 7, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
        excerpt: 'When to use robotic process automation versus artificial intelligence.',
        content: 'While often confused, RPA and AI serve different purposes. RPA automates repetitive rules-based tasks, while AI handles complex decision-making. Learn when to apply each technology.',
        tags: ['RPA', 'AI', 'Automation']
      }
    ],
    'Blockchain': [
      {
        id: 10,
        title: 'Enterprise Blockchain: Beyond Cryptocurrency',
        author: 'James Mwangi',
        role: 'Blockchain Architect',
        date: 'May 5, 2026',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
        excerpt: 'How blockchain is transforming supply chain, finance, and healthcare.',
        content: 'Enterprise blockchain applications extend far beyond cryptocurrency. From supply chain traceability to secure medical records, blockchain is creating new possibilities for transparency and trust.',
        tags: ['Blockchain', 'Supply Chain', 'Finance']
      }
    ],
    'Cybersecurity': [
      {
        id: 11,
        title: 'Zero Trust Security: Implementing Modern Protection',
        author: 'Grace Wanjiku',
        role: 'Security Lead',
        date: 'May 3, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
        excerpt: 'Why traditional perimeter security is no longer enough.',
        content: 'Zero Trust security assumes no user or device is trustworthy by default. This article explains the principles of Zero Trust and provides a roadmap for implementation.',
        tags: ['Security', 'Zero Trust', 'Cybersecurity']
      }
    ],
    'Data Analytics': [
      {
        id: 12,
        title: 'From Dashboards to Decisions: Actionable Analytics',
        author: 'Peter Omondi',
        role: 'Data Analytics Lead',
        date: 'May 1, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        excerpt: 'How to transform data insights into business actions.',
        content: 'Beautiful dashboards are useless if they don\'t drive action. This article provides frameworks for turning analytics into tangible business outcomes and measurable ROI.',
        tags: ['Analytics', 'Data', 'Business Intelligence']
      }
    ],
    'DevOps': [
      {
        id: 13,
        title: 'CI/CD Pipeline Optimization',
        author: 'Michael Chen',
        role: 'DevOps Lead',
        date: 'April 28, 2026',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop',
        excerpt: 'Best practices for faster, more reliable software delivery.',
        content: 'Optimizing your CI/CD pipeline can dramatically reduce deployment times while improving quality. This article covers automation strategies, testing integration, and monitoring best practices.',
        tags: ['DevOps', 'CI/CD', 'Automation']
      }
    ]
  };

  const industryTopics = [
    'Healthcare', 'Retail & Ecommerce', 'Fintech', 'Insurance', 
    'Edtech', 'Manufacturing', 'Logistics', 'Real Estate'
  ];

  const experts = [
    {
      name: 'John Roberts',
      role: 'CEO & Founder',
      expertise: ['Business Strategy', 'Digital Transformation', 'Enterprise Architecture'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Mary Jane',
      role: 'Senior Consultant',
      expertise: ['Strategic Planning', 'Operations', 'Change Management'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Chen',
      role: 'ERP Practice Lead',
      expertise: ['ERP Implementation', 'Supply Chain', 'Business Process'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      expertise: ['Machine Learning', 'Computer Vision', 'NLP'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      linkedin: '#',
      twitter: '#'
    }
  ];

  // Get articles for selected category
  const getArticlesForCategory = () => {
    if (selectedCategory === 'all') {
      return Object.values(allArticles).flat();
    }
    return allArticles[selectedCategory] || [];
  };

  const articles = getArticlesForCategory();
  const featuredArticles = articles.filter(a => a.id <= 3);
  const regularArticles = articles.filter(a => a.id > 3);

  return (
    <div className="insights-page">
      <div className="container">
        <div className="insights-header">
          <h1>Insights</h1>
          <p>Expert perspectives, industry trends, and thought leadership from MJ & Roberts Consulting</p>
        </div>

        <div className="insights-layout">
          <aside className="insights-sidebar">
            <div className="trending-section">
              <h3>TRENDING TOPICS</h3>
              <div className="trending-list">
                {trendingTopics.map(topic => (
                  <button 
                    key={topic.name} 
                    className={`trending-item ${selectedCategory === topic.name ? 'active' : ''}`} 
                    onClick={() => setSelectedCategory(topic.name)}
                    style={{ borderLeftColor: topic.color }}
                  >
                    <div className="trending-icon-wrapper" style={{ backgroundColor: `${topic.color}15` }}>
                      <span className="trending-icon">{topic.icon}</span>
                    </div>
                    <div className="trending-info">
                      <span className="trending-name">{topic.name}</span>
                      <span className="trending-count">{topic.count} articles</span>
                    </div>
                  </button>
                ))}
              </div>
              <button 
                className={`trending-item view-all-btn ${selectedCategory === 'all' ? 'active' : ''}`} 
                onClick={() => setSelectedCategory('all')}
              >
                <div className="trending-icon-wrapper">
                  <span className="trending-icon">📰</span>
                </div>
                <div className="trending-info">
                  <span className="trending-name">View All</span>
                  <span className="trending-count">All articles</span>
                </div>
              </button>
            </div>

            <div className="industry-section">
              <h3>INDUSTRY-RELATED TOPICS</h3>
              <div className="industry-list">
                {industryTopics.map(topic => (
                  <button key={topic} className="industry-item" onClick={() => setSelectedCategory(topic)}>
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="experts-section">
              <h3>OUR EXPERTS</h3>
              <div className="experts-list">
                {experts.map(expert => (
                  <div key={expert.name} className="expert-card">
                    <div className="expert-avatar">
                      <img src={expert.image} alt={expert.name} />
                    </div>
                    <div className="expert-info">
                      <h4>{expert.name}</h4>
                      <p>{expert.role}</p>
                      <div className="expert-expertise">
                        {expert.expertise.slice(0, 2).map(skill => (
                          <span key={skill} className="expertise-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/company" className="view-all">Meet the team →</a>
            </div>
          </aside>

          <main className="insights-content">
            {selectedArticle ? (
              <div className="article-detail">
                <button className="back-button" onClick={() => setSelectedArticle(null)}>
                  ← Back to all insights
                </button>
                <div className="article-header">
                  <div className="article-category">{selectedArticle.category || selectedArticle.tags?.[0] || 'Insight'}</div>
                  <h1 className="article-title">{selectedArticle.title}</h1>
                  <div className="article-meta">
                    <div className="article-author-info">
                      <div className="author-avatar-small">
                        <img src={experts.find(e => e.name === selectedArticle.author)?.image || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop'} alt={selectedArticle.author} />
                      </div>
                      <div>
                        <div className="author-name">{selectedArticle.author}</div>
                        <div className="author-role">{selectedArticle.role}</div>
                      </div>
                    </div>
                    <div className="article-date">
                      <span>📅 {selectedArticle.date}</span>
                      <span>⏱️ {selectedArticle.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="article-image">
                  <img src={selectedArticle.image} alt={selectedArticle.title} />
                </div>
                <div className="article-content">
                  <p>{selectedArticle.content}</p>
                  <div className="article-tags">
                    {selectedArticle.tags.map(tag => (
                      <span key={tag} className="article-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="article-actions">
                  <a href="/contact" className="btn-primary">Contact Our Experts →</a>
                  <button className="btn-secondary">Share Article</button>
                </div>
              </div>
            ) : (
              <>
                {featuredArticles.length > 0 && (
                  <div className="featured-articles">
                    <h2>Featured Insights</h2>
                    <div className="featured-grid">
                      {featuredArticles.map(article => (
                        <div key={article.id} className="featured-card" onClick={() => setSelectedArticle(article)}>
                          <div className="featured-image">
                            <img src={article.image} alt={article.title} />
                            <div className="featured-category">{article.tags?.[0] || 'Insight'}</div>
                          </div>
                          <div className="featured-content">
                            <h3>{article.title}</h3>
                            <p>{article.excerpt}</p>
                            <div className="featured-meta">
                              <span>{article.date}</span>
                              <span>{article.readTime}</span>
                            </div>
                            <button className="read-more">Read More →</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="all-articles">
                  <h2>{selectedCategory === 'all' ? 'Latest Insights' : `${selectedCategory} Insights`}</h2>
                  <div className="articles-grid">
                    {regularArticles.map(article => (
                      <div key={article.id} className="article-card" onClick={() => setSelectedArticle(article)}>
                        <div className="article-image-small">
                          <img src={article.image} alt={article.title} />
                        </div>
                        <div className="article-content-small">
                          <div className="article-category-small">{article.tags?.[0] || 'Insight'}</div>
                          <h3>{article.title}</h3>
                          <p>{article.excerpt.substring(0, 100)}...</p>
                          <div className="article-meta-small">
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </div>
                          <button className="read-more-small">Read More →</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Insights;