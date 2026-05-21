import React, { useState } from 'react';
import './Insights.css';

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const trendingTopics = [
    { name: 'Artificial Intelligence', count: 24, icon: 'Ì¥ñ' },
    { name: 'ERP', count: 18, icon: 'Ì≥ä' },
    { name: 'Customer Experience', count: 15, icon: '‚≠ê' },
    { name: 'Cloud', count: 22, icon: '‚òÅÔ∏è' },
    { name: 'Internet of Things', count: 12, icon: 'Ì≥°' },
    { name: 'RPA', count: 9, icon: '‚öôÔ∏è' },
    { name: 'Blockchain', count: 11, icon: 'Ì¥ó' },
    { name: 'Cybersecurity', count: 16, icon: 'Ì¥í' },
    { name: 'Data Analytics', count: 20, icon: 'Ì≥à' },
    { name: 'DevOps', count: 14, icon: 'Ì∫Ä' }
  ];

  const industryTopics = [
    'Healthcare', 'Retail & Ecommerce', 'Fintech', 'Insurance', 
    'Edtech', 'Manufacturing', 'Logistics', 'Real Estate'
  ];

  const articles = [
    {
      id: 1,
      title: 'Agentic AI: Why the "Chatbot" Era is Over',
      category: 'Artificial Intelligence',
      author: 'John Roberts',
      authorRole: 'CEO & Founder',
      date: 'May 15, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      excerpt: 'Moving beyond passive automation to autonomous systems that execute end-to-end business workflows. Discover how Agentic AI is transforming enterprise operations.',
      content: 'The era of simple chatbots is coming to an end. Agentic AI represents a paradigm shift where AI systems can plan, execute, and adapt to achieve complex goals autonomously. Unlike traditional chatbots that respond to specific prompts, agentic AI systems understand context, make decisions, and take action across multiple systems...',
      tags: ['AI', 'Automation', 'Future of Work'],
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Sovereignty: Maintaining Data Control in a Multi-Cloud World',
      category: 'Cloud',
      author: 'Mary Jane',
      authorRole: 'Senior Cloud Architect',
      date: 'May 10, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      excerpt: 'As organizations embrace multi-cloud strategies, maintaining data sovereignty has become a critical concern. Learn best practices for cloud data governance.',
      content: 'Data sovereignty has emerged as a top priority for global enterprises. With regulations like GDPR, CCPA, and cross-border data transfer restrictions, organizations must carefully architect their cloud deployments to ensure compliance...',
      tags: ['Cloud', 'Security', 'Compliance'],
      featured: true
    },
    {
      id: 3,
      title: 'The Rise of Headless Commerce: Flexibility Meets Performance',
      category: 'Customer Experience',
      author: 'Sarah Williams',
      authorRole: 'E-commerce Director',
      date: 'May 5, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop',
      excerpt: 'Headless architecture is revolutionizing e-commerce by decoupling frontend and backend, enabling unprecedented customization and speed.',
      content: 'Traditional e-commerce platforms are giving way to headless architectures that separate the presentation layer from the commerce engine. This decoupling allows businesses to deliver consistent experiences across any channel...',
      tags: ['E-commerce', 'Digital Transformation'],
      featured: false
    },
    {
      id: 4,
      title: 'ERP Modernization: From Legacy to Cloud-Native',
      category: 'ERP',
      author: 'Michael Chen',
      authorRole: 'ERP Practice Lead',
      date: 'April 28, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      excerpt: 'Modernizing legacy ERP systems is critical for digital transformation. Explore strategies for successful cloud migration and implementation.',
      content: 'Legacy ERP systems often hold businesses back with rigid architectures and high maintenance costs. Cloud-native ERP solutions offer scalability, real-time insights, and lower total cost of ownership...',
      tags: ['ERP', 'Cloud Migration', 'Digital Transformation'],
      featured: false
    },
    {
      id: 5,
      title: 'Predictive Analytics in Healthcare: Saving Lives with Data',
      category: 'Healthcare',
      author: 'Dr. Emily Okonkwo',
      authorRole: 'Healthcare Technology Lead',
      date: 'April 22, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      excerpt: 'How AI and machine learning are transforming patient care through early intervention and personalized treatment plans.',
      content: 'Predictive analytics is revolutionizing healthcare by identifying at-risk patients before critical events occur. Machine learning models can analyze patient data to predict readmission risks, disease progression, and treatment outcomes...',
      tags: ['Healthcare', 'AI', 'Analytics'],
      featured: false
    },
    {
      id: 6,
      title: 'Fintech Innovation: Blockchain Beyond Cryptocurrency',
      category: 'Fintech',
      author: 'David Martinez',
      authorRole: 'Financial Services Director',
      date: 'April 18, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      excerpt: 'Blockchain technology is finding powerful applications in banking, insurance, and supply chain finance beyond cryptocurrencies.',
      content: 'While cryptocurrencies grabbed headlines, enterprise blockchain is quietly transforming financial services. Smart contracts, tokenization, and distributed ledgers are streamlining processes from trade finance to claims processing...',
      tags: ['Fintech', 'Blockchain', 'Innovation'],
      featured: false
    },
    {
      id: 7,
      title: 'Sustainable IT: Reducing Carbon Footprint in the Cloud',
      category: 'Cloud',
      author: 'Lisa Green',
      authorRole: 'Sustainability Lead',
      date: 'April 12, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop',
      excerpt: 'Organizations can significantly reduce their environmental impact through green cloud computing practices and efficient architectures.',
      content: 'Sustainability is becoming a key consideration in IT strategy. By optimizing cloud resources, choosing green data centers, and implementing efficient architectures, organizations can reduce their carbon footprint while lowering costs...',
      tags: ['Sustainability', 'Cloud', 'Green IT'],
      featured: false
    },
    {
      id: 8,
      title: 'The Future of Work: Hybrid Models and Digital Collaboration',
      category: 'Customer Experience',
      author: 'John Roberts',
      authorRole: 'CEO & Founder',
      date: 'April 5, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
      excerpt: 'How technology is enabling seamless collaboration between remote and in-office teams in the hybrid work era.',
      content: 'The pandemic accelerated the shift to remote work, but the future is hybrid. Organizations need digital tools and cultural changes to support effective collaboration across distributed teams...',
      tags: ['Future of Work', 'Collaboration', 'Digital Transformation'],
      featured: false
    }
  ];

  const experts = [
    {
      name: 'John Roberts',
      role: 'CEO & Founder',
      expertise: ['Business Strategy', 'Digital Transformation', 'Enterprise Architecture'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      bio: '15+ years experience in business consulting and enterprise architecture. Leading MJ&Roberts with a vision for resilient digital ecosystems.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Mary Jane',
      role: 'Senior Consultant',
      expertise: ['Strategic Planning', 'Operations', 'Change Management'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      bio: 'Expert in strategic planning, operations, and digital transformation with a focus on measurable business outcomes.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Chen',
      role: 'ERP Practice Lead',
      expertise: ['ERP Implementation', 'Supply Chain', 'Business Process'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      bio: '15+ years implementing enterprise systems for global manufacturers and distributors.',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="insights-page">
      <div className="container">
        <div className="insights-header">
          <h1>Insights</h1>
          <p>Expert perspectives, industry trends, and thought leadership from MJ & Roberts Consulting</p>
        </div>

        <div className="insights-layout">
          {/* Sidebar */}
          <aside className="insights-sidebar">
            <div className="trending-section">
              <h3>TRENDING TOPICS</h3>
              <div className="trending-list">
                {trendingTopics.slice(0, 8).map(topic => (
                  <button key={topic.name} className="trending-item" onClick={() => setSelectedCategory(topic.name)}>
                    <span className="trending-icon">{topic.icon}</span>
                    <span className="trending-name">{topic.name}</span>
                    <span className="trending-count">{topic.count} articles</span>
                  </button>
                ))}
              </div>
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
              <a href="/company" className="view-all">Meet the team ‚Üí</a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="insights-content">
            {selectedArticle ? (
              // Single Article View
              <div className="article-detail">
                <button className="back-button" onClick={() => setSelectedArticle(null)}>
                  ‚Üê Back to all insights
                </button>
                <div className="article-header">
                  <div className="article-category">{selectedArticle.category}</div>
                  <h1 className="article-title">{selectedArticle.title}</h1>
                  <div className="article-meta">
                    <div className="article-author-info">
                      <div className="author-avatar-small"></div>
                      <div>
                        <div className="author-name">{selectedArticle.author}</div>
                        <div className="author-role">{selectedArticle.authorRole}</div>
                      </div>
                    </div>
                    <div className="article-date">
                      <span>Ì≥Ö {selectedArticle.date}</span>
                      <span>‚è±Ô∏è {selectedArticle.readTime}</span>
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
                  <a href="/contact" className="btn-primary">Contact Our Experts ‚Üí</a>
                  <button className="btn-secondary">Share Article</button>
                </div>
              </div>
            ) : (
              // Articles Grid View
              <>
                {/* Featured Articles */}
                {selectedCategory === 'all' && (
                  <div className="featured-articles">
                    <h2>Featured Insights</h2>
                    <div className="featured-grid">
                      {featuredArticles.map(article => (
                        <div key={article.id} className="featured-card" onClick={() => setSelectedArticle(article)}>
                          <div className="featured-image">
                            <img src={article.image} alt={article.title} />
                            <div className="featured-category">{article.category}</div>
                          </div>
                          <div className="featured-content">
                            <h3>{article.title}</h3>
                            <p>{article.excerpt}</p>
                            <div className="featured-meta">
                              <span>{article.date}</span>
                              <span>{article.readTime}</span>
                            </div>
                            <button className="read-more">Read More ‚Üí</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Articles */}
                <div className="all-articles">
                  <h2>{selectedCategory === 'all' ? 'Latest Insights' : `${selectedCategory} Insights`}</h2>
                  <div className="articles-grid">
                    {regularArticles.map(article => (
                      <div key={article.id} className="article-card" onClick={() => setSelectedArticle(article)}>
                        <div className="article-image-small">
                          <img src={article.image} alt={article.title} />
                        </div>
                        <div className="article-content-small">
                          <div className="article-category-small">{article.category}</div>
                          <h3>{article.title}</h3>
                          <p>{article.excerpt.substring(0, 100)}...</p>
                          <div className="article-meta-small">
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </div>
                          <button className="read-more-small">Read More ‚Üí</button>
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
