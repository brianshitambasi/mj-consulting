import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

const Solutions = () => {
  const [stats, setStats] = useState({ solutions: 0, clients: 0, success: 0 });

  const solutions = [
    {
      id: 'crm',
      title: 'CRM Solutions',
      icon: '🤝',
      platform: 'Salesforce & Dynamics 365',
      description: 'Full-cycle implementation and Zero-Copy Integration with data lakes',
      benefits: ['40% sales boost', '35% CSAT increase', '60% data cost reduction'],
      color: '#0a2472',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=350&fit=crop',
      longDescription: 'Transform your customer relationships with our comprehensive CRM implementation and optimization services.'
    },
    {
      id: 'erp',
      title: 'ERP Solutions',
      icon: '🏭',
      platform: 'SAP & Odoo',
      description: 'Strategic consultation and legacy-to-cloud migration',
      benefits: ['50% less manual work', '45% faster close', '60% inventory accuracy'],
      color: '#123499',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop',
      longDescription: 'Unify your business operations with comprehensive ERP systems that streamline workflows.'
    },
    {
      id: 'digital-commerce',
      title: 'Digital Commerce',
      icon: '🛒',
      platform: 'Headless & Payment Integration',
      description: 'Headless commerce development and global payment gateway integration',
      benefits: ['60% faster loads', '45% higher conversions', '50% less abandonment'],
      color: '#051650',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=350&fit=crop',
      longDescription: 'Create exceptional shopping experiences with headless commerce solutions.'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      icon: '📊',
      platform: 'Power BI & Predictive Modeling',
      description: 'Power BI dashboards and predictive data modeling',
      benefits: ['70% faster decisions', '55% better forecasts', 'Real-time visibility'],
      color: '#00072d',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=350&fit=crop',
      longDescription: 'Turn your data into actionable insights with our BI solutions.'
    },
    {
      id: 'ai-rpa',
      title: 'AI & RPA',
      icon: '🤖',
      platform: 'Autonomous Agentic AI',
      description: 'Autonomous Agentic AI and robotic process automation',
      benefits: ['80% automation', '90% error reduction', '24/7 operations'],
      color: '#5ea173',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=350&fit=crop',
      longDescription: 'Leverage cutting-edge AI and robotic process automation.'
    },
    {
      id: 'ar-vr-iot',
      title: 'AR/VR & IoT',
      icon: '🥽',
      platform: 'Digital Twin Development',
      description: 'Immersive "Digital Twin" development and edge-device integration',
      benefits: ['50% faster training', '40% maintenance reduction', 'Real-time monitoring'],
      color: '#0a2472',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=350&fit=crop',
      longDescription: 'Create immersive experiences with AR/VR and IoT solutions.'
    }
  ];

  const features = [
    { icon: '🚀', title: 'Fast Implementation', description: 'Average 3-month deployment' },
    { icon: '🔒', title: 'Enterprise Security', description: 'ISO 27001 certified' },
    { icon: '🏆', title: 'Award-Winning', description: 'Industry recognition' },
    { icon: '👥', title: '24/7 Support', description: 'Global support team' },
    { icon: '💰', title: 'Cost Effective', description: '30-50% cost reduction' },
    { icon: '🌍', title: 'Global Reach', description: '40+ countries served' },
    { icon: '⚡', title: 'High Performance', description: '99.99% uptime' },
    { icon: '🎯', title: 'Tailored Solutions', description: 'Custom to your needs' }
  ];

  useEffect(() => {
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);

      setStats({
        solutions: Math.floor(easeOutQuad * 6),
        clients: Math.floor(easeOutQuad * 200),
        success: Math.floor(easeOutQuad * 98)
      });

      if (frame === totalFrames) {
        setStats({ solutions: 6, clients: 200, success: 98 });
        clearInterval(timer);
      }
    }, frameDuration);
  }, []);

  return (
    <div className="solutions-page-wrapper">
      <section className="solutions-hero">
        <div className="container">
          <div className="solutions-hero-content">
            <span className="solutions-badge">⭐ Enterprise-Grade Solutions</span>
            <h1>360-Degree Solutions</h1>
            <p>Comprehensive solution portfolio powered by MJ&Roberts' engineering excellence</p>
          </div>
        </div>
      </section>

      <section className="solutions-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{stats.solutions}+</div>
              <div className="stat-label">Core Solutions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.clients}+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.success}%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container solutions-container">
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card" style={{ borderTopColor: solution.color }}>
              <div className="solution-image-container">
                <img src={solution.image} alt={solution.title} className="solution-card-image" />
                <div className="solution-icon-overlay" style={{ backgroundColor: solution.color }}>
                  <span className="solution-icon">{solution.icon}</span>
                </div>
              </div>
              <div className="solution-card-content">
                <h3>{solution.title}</h3>
                <p className="solution-platform" style={{ color: solution.color }}>{solution.platform}</p>
                <p className="solution-desc">{solution.description}</p>
                <div className="solution-benefits">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="benefit-item">
                      <span className="check-mark">✓</span> {benefit}
                    </div>
                  ))}
                </div>
                <Link to={`/solutions/${solution.id}`} className="solution-link-btn">
                  Explore Solution →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="why-choose-us">
          <h2>Why Choose Our Solutions?</h2>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="solutions-cta">
          <h3>Ready to Transform Your Business?</h3>
          <p>Let's discuss which solution fits your business needs best.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Schedule Free Consultation</Link>
            <Link to="/casestudies" className="btn-secondary">View Success Stories</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;