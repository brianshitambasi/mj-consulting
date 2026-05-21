import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SolutionDetail.css';

const SolutionDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const solutionsData = {
    'crm': {
      title: 'CRM Solutions',
      subtitle: 'Salesforce & Dynamics 365 Experts',
      rating: 4.9,
      reviews: 156,
      description: 'Transform your customer relationships with our comprehensive CRM implementation and optimization services.',
      fullDescription: `Customer Relationship Management (CRM) is the backbone of modern sales and marketing operations. Our CRM practice specializes in Salesforce and Microsoft Dynamics 365, helping organizations of all sizes maximize their CRM investment.

We provide end-to-end CRM services including strategy, implementation, customization, integration, and ongoing support. Our zero-copy integration approach ensures your CRM connects seamlessly with data lakes and other enterprise systems.

Whether you're implementing CRM for the first time or optimizing an existing deployment, our certified consultants bring deep expertise in Sales Cloud, Service Cloud, Marketing Cloud, and Nonprofit Cloud.`,
      benefits: [
        '40% increase in sales productivity',
        '35% improvement in customer satisfaction',
        '60% reduction in data management costs',
        'Real-time visibility into sales pipeline'
      ],
      features: [
        'Full-cycle implementation from planning to launch',
        'Zero-copy integration with data lakes',
        'Custom workflow automation',
        'Advanced analytics and AI-powered insights'
      ],
      technologies: ['Salesforce', 'Microsoft Dynamics 365', 'HubSpot', 'Zoho'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      icon: 'Ì¥ù'
    },
    'erp': {
      title: 'ERP Solutions',
      subtitle: 'SAP & Odoo Specialists',
      rating: 4.8,
      reviews: 128,
      description: 'Unify your business operations with comprehensive ERP systems.',
      fullDescription: `Enterprise Resource Planning (ERP) systems integrate all aspects of your business into a single, unified platform. Our ERP practice specializes in SAP and Odoo, helping organizations achieve operational excellence through better data visibility and process automation.

We guide you through the entire ERP journey‚Äîfrom initial consultation and vendor selection to implementation, data migration, user training, and ongoing support.`,
      benefits: ['50% reduction in manual data entry', '45% faster financial close', '60% improvement in inventory accuracy'],
      features: ['Strategic consultation', 'Legacy-to-cloud migration', 'Custom module development'],
      technologies: ['SAP S/4HANA', 'Odoo', 'Oracle NetSuite'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      icon: 'Ìø≠'
    },
    'digital-commerce': {
      title: 'Digital Commerce',
      subtitle: 'Headless Commerce & Payment Integration',
      rating: 4.9,
      reviews: 98,
      description: 'Create exceptional shopping experiences with headless commerce solutions.',
      fullDescription: `Digital commerce has evolved beyond simple online stores. Today's customers expect seamless, personalized experiences across every channel. Our digital commerce practice builds headless commerce solutions that decouple the frontend experience from backend commerce functionality.`,
      benefits: ['60% faster page loads', '45% higher conversion rates', '50% reduction in cart abandonment'],
      features: ['Headless commerce architecture', 'Global payment gateway integration', 'Multi-channel selling'],
      technologies: ['Shopify Plus', 'Magento', 'BigCommerce', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      icon: 'Ìªí'
    },
    'data-analytics': {
      title: 'Data Analytics & BI',
      subtitle: 'Power BI & Predictive Modeling',
      rating: 4.8,
      reviews: 112,
      description: 'Turn your data into actionable insights with BI solutions.',
      fullDescription: `Data is your most valuable asset‚Äîbut only if you can extract meaningful insights. Our data analytics practice helps organizations harness the power of their data through modern BI tools and advanced analytics techniques.`,
      benefits: ['70% faster decision-making', '55% improvement in forecast accuracy', 'Real-time business visibility'],
      features: ['Power BI dashboard development', 'Predictive analytics', 'Data warehousing'],
      technologies: ['Power BI', 'Tableau', 'Snowflake', 'BigQuery'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      icon: 'Ì≥ä'
    },
    'ai-rpa': {
      title: 'AI & RPA',
      subtitle: 'Autonomous Agentic AI',
      rating: 4.9,
      reviews: 87,
      description: 'Leverage cutting-edge AI and robotic process automation.',
      fullDescription: `Artificial Intelligence and Robotic Process Automation (RPA) are revolutionizing how businesses operate. Our AI practice builds autonomous agentic systems that can reason, plan, and execute complex tasks with minimal human intervention.`,
      benefits: ['80% reduction in manual processing', '90% error reduction', '24/7 operational capability'],
      features: ['Custom AI model development', 'RPA bot implementation', 'Natural language processing'],
      technologies: ['TensorFlow', 'PyTorch', 'UiPath', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      icon: 'Ì¥ñ'
    },
    'ar-vr-iot': {
      title: 'AR/VR & IoT',
      subtitle: 'Immersive Digital Twin Development',
      rating: 4.7,
      reviews: 65,
      description: 'Create immersive experiences with AR/VR and IoT solutions.',
      fullDescription: `Augmented Reality (AR), Virtual Reality (VR), and the Internet of Things (IoT) are reshaping how businesses interact with the physical world. Our practice builds "Digital Twins"‚Äîvirtual replicas of physical assets‚Äîthat enable real-time monitoring and simulation.`,
      benefits: ['50% faster employee training', '40% reduction in maintenance costs', 'Real-time asset monitoring'],
      features: ['Digital twin development', 'AR/VR application development', 'IoT sensor integration'],
      technologies: ['Unity', 'Unreal Engine', 'AWS IoT', 'Azure IoT'],
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop',
      icon: 'ÌµΩ'
    }
  };

  const solution = solutionsData[id];

  if (!solution) {
    return (
      <div className="detail-not-found">
        <div className="container">
          <h2>Solution not found</h2>
          <Link to="/solutions" className="btn-primary">Back to Solutions</Link>
        </div>
      </div>
    );
  }

  const tabs = ['overview', 'benefits', 'features', 'technologies'];

  return (
    <div className="solution-detail-wrapper">
      {/* Hero Section */}
      <section className="detail-hero">
        <div className="container">
          <Link to="/solutions" className="back-link">‚Üê Back to Solutions</Link>
          <div className="detail-hero-content">
            <span className="detail-badge">{solution.rating} ‚òÖ ({solution.reviews} reviews)</span>
            <h1>{solution.title}</h1>
            <p>{solution.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container detail-container">
        <div className="detail-layout">
          <div className="detail-main">
            {/* Tab Navigation */}
            <div className="detail-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="tab-content">
                <h3>Overview</h3>
                <p className="overview-text">{solution.description}</p>
                <p className="full-description">{solution.fullDescription}</p>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="tab-content">
                <h3>Key Benefits</h3>
                <div className="benefits-list">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="benefit-card">
                      <span className="benefit-check">‚úì</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="tab-content">
                <h3>Key Features</h3>
                <div className="features-list">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="feature-card">
                      <span className="feature-check">‚úì</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'technologies' && (
              <div className="tab-content">
                <h3>Technologies We Use</h3>
                <div className="tech-tags">
                  {solution.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="detail-sidebar">
            <img src={solution.image} alt={solution.title} className="detail-image" />
            
            <div className="stats-card">
              <h4>Quick Stats</h4>
              <div className="stat-row">
                <span>ÌøÜ Success Rate</span>
                <span>98%</span>
              </div>
              <div className="stat-row">
                <span>‚è±Ô∏è Avg Timeline</span>
                <span>3-6 mo</span>
              </div>
              <div className="stat-row">
                <span>Ì±• Happy Clients</span>
                <span>{solution.reviews}+</span>
              </div>
            </div>

            <div className="cta-card">
              <h4>Ready to get started?</h4>
              <p>Contact our experts to discuss your needs.</p>
              <Link to="/contact" className="cta-btn">Schedule Consultation ‚Üí</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
