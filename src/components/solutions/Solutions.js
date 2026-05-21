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
      color: '#0a2472'
    },
    {
      id: 'erp',
      title: 'ERP Solutions',
      icon: '🏭',
      platform: 'SAP & Odoo',
      description: 'Strategic consultation and legacy-to-cloud migration',
      benefits: ['50% less manual work', '45% faster close', '60% inventory accuracy'],
      color: '#123499'
    },
    {
      id: 'digital-commerce',
      title: 'Digital Commerce',
      icon: '🛒',
      platform: 'Headless & Payment Integration',
      description: 'Headless commerce development and global payment gateway integration',
      benefits: ['60% faster loads', '45% higher conversions', '50% less abandonment'],
      color: '#051650'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      icon: '📊',
      platform: 'Power BI & Predictive Modeling',
      description: 'Power BI dashboards and predictive data modeling',
      benefits: ['70% faster decisions', '55% better forecasts', 'Real-time visibility'],
      color: '#00072d'
    },
    {
      id: 'ai-rpa',
      title: 'AI & RPA',
      icon: '🤖',
      platform: 'Autonomous Agentic AI',
      description: 'Autonomous Agentic AI and robotic process automation',
      benefits: ['80% automation', '90% error reduction', '24/7 operations'],
      color: '#5ea173'
    },
    {
      id: 'ar-vr-iot',
      title: 'AR/VR & IoT',
      icon: '🥽',
      platform: 'Digital Twin Development',
      description: 'Immersive "Digital Twin" development and edge-device integration',
      benefits: ['50% faster training', '40% maintenance reduction', 'Real-time monitoring'],
      color: '#0a2472'
    }
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
              <div className="solution-icon" style={{ color: solution.color, backgroundColor: `${solution.color}15` }}>
                {solution.icon}
              </div>
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
          ))}
        </div>

        <div className="why-choose-us">
          <h2>Why Choose Our Solutions?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <h4>Fast Implementation</h4>
              <p>Average 3-month deployment</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h4>Enterprise Security</h4>
              <p>ISO 27001 certified</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <h4>Award-Winning</h4>
              <p>Industry recognition</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <h4>24/7 Support</h4>
              <p>Global support team</p>
            </div>
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