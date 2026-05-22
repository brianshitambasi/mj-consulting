import React, { useState } from 'react';
import './Industries.css';

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('Healthcare');

  const industriesData = {
    'Healthcare': {
      name: 'Healthcare',
      fullName: 'Healthcare & Life Sciences',
      description: 'Transform patient care and operational efficiency with modern healthcare technology solutions.',
      longDescription: 'We help healthcare providers, payers, and life sciences organizations leverage technology to improve patient outcomes, ensure regulatory compliance, and optimize operations. Our solutions are HIPAA-compliant and designed for the unique challenges of the healthcare industry.',
      challenges: [
        'Data interoperability between systems',
        'Patient data security and privacy',
        'Regulatory compliance (HIPAA, GDPR)',
        'Legacy system modernization',
        'Telehealth implementation'
      ],
      solutions: [
        'Electronic Health Records (EHR) Systems',
        'Telemedicine Platforms',
        'Healthcare Analytics & BI',
        'Patient Portals & Engagement',
        'Compliance & Security Solutions',
        'Medical Billing Systems'
      ],
      technologies: ['Salesforce Health Cloud', 'AWS Healthcare', 'Microsoft Azure for Health', 'Epic Integration', 'Cerner Integration'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      icon: '🏥',
      stats: '50+ Healthcare Clients',
      successStories: 'Helped a major hospital reduce patient wait times by 40% through digital transformation'
    },
    'Finance': {
      name: 'Finance',
      fullName: 'Banking & Financial Services',
      description: 'Secure, compliant, and innovative fintech solutions for modern financial institutions.',
      longDescription: 'We provide cutting-edge technology solutions for banks, credit unions, investment firms, and fintech companies. Our expertise includes secure payment processing, fraud detection, regulatory compliance, and customer engagement platforms.',
      challenges: [
        'Security and fraud prevention',
        'Regulatory compliance (PCI DSS, SOX)',
        'Legacy system modernization',
        'Real-time transaction processing',
        'Customer experience improvement'
      ],
      solutions: [
        'Digital Banking Platforms',
        'Payment Gateway Integration',
        'Fraud Detection Systems',
        'Robo-advisory Platforms',
        'Compliance Management',
        'Customer Analytics'
      ],
      technologies: ['Salesforce Financial Cloud', 'AWS Banking', 'Microsoft Azure', 'Blockchain', 'AI Fraud Detection'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      icon: '💰',
      stats: '100+ Financial Clients',
      successStories: 'Increased transaction processing speed by 60% for a major investment bank'
    },
    'Manufacturing': {
      name: 'Manufacturing',
      fullName: 'Manufacturing & Industrial',
      description: 'Industry 4.0 solutions for smart manufacturing and supply chain optimization.',
      longDescription: 'We help manufacturers embrace Industry 4.0 with IoT integration, predictive maintenance, supply chain automation, and real-time production monitoring. Our solutions increase efficiency, reduce downtime, and improve quality control.',
      challenges: [
        'Supply chain visibility',
        'Equipment downtime and maintenance',
        'Quality control management',
        'Inventory optimization',
        'Production scheduling'
      ],
      solutions: [
        'IoT Sensor Integration',
        'Predictive Maintenance Systems',
        'Supply Chain Management',
        'Quality Management Systems',
        'MES Integration',
        'Inventory Optimization'
      ],
      technologies: ['AWS IoT', 'Microsoft Azure IoT', 'SAP Manufacturing', 'Odoo Manufacturing', 'Predictive Analytics'],
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
      icon: '🏭',
      stats: '75+ Manufacturing Clients',
      successStories: 'Reduced equipment downtime by 35% through predictive maintenance implementation'
    },
    'Retail': {
      name: 'Retail',
      fullName: 'Retail & E-commerce',
      description: 'Omnichannel retail solutions that drive sales and enhance customer experience.',
      longDescription: 'We deliver comprehensive retail technology solutions including e-commerce platforms, POS systems, inventory management, and customer analytics. Our omnichannel solutions help retailers provide seamless shopping experiences across all touchpoints.',
      challenges: [
        'Omnichannel integration',
        'Inventory management',
        'Personalized customer experience',
        'Payment processing',
        'Supply chain optimization'
      ],
      solutions: [
        'E-commerce Platforms',
        'POS Systems',
        'Inventory Management',
        'Customer Analytics',
        'Loyalty Programs',
        'Marketplace Integration'
      ],
      technologies: ['Salesforce Commerce Cloud', 'Shopify', 'Magento', 'Odoo Retail', 'Power BI Analytics'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop',
      icon: '🛍️',
      stats: '120+ Retail Clients',
      successStories: 'Increased online sales by 85% after e-commerce platform migration'
    },
    'Insurance': {
      name: 'Insurance',
      fullName: 'Insurance & Insurtech',
      description: 'Digital transformation solutions for modern insurance carriers and agencies.',
      longDescription: 'We help insurance companies modernize their operations with policy administration systems, claims management, underwriting automation, and customer portals. Our solutions improve efficiency, reduce costs, and enhance policyholder experience.',
      challenges: [
        'Policy administration complexity',
        'Claims processing efficiency',
        'Underwriting automation',
        'Regulatory compliance',
        'Customer engagement'
      ],
      solutions: [
        'Policy Administration Systems',
        'Claims Management',
        'Underwriting Automation',
        'Agent Portals',
        'Claims Analytics',
        'Fraud Detection'
      ],
      technologies: ['Salesforce Financial Cloud', 'Guidewire Integration', 'Duck Creek', 'AWS Insurance', 'AI Underwriting'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
      icon: '🛡️',
      stats: '60+ Insurance Clients',
      successStories: 'Reduced claims processing time by 50% with automated workflow system'
    },
    'Software & hi-tech': {
      name: 'Software & hi-tech',
      fullName: 'Software & High Technology',
      description: 'Accelerate innovation with cutting-edge technology solutions for software companies.',
      longDescription: 'We partner with software and technology companies to build scalable products, optimize development processes, and accelerate time-to-market. Our expertise includes SaaS platforms, DevOps, cloud-native development, and AI integration.',
      challenges: [
        'Rapid scaling requirements',
        'Development velocity',
        'Technical debt management',
        'Cloud optimization',
        'Product-market fit'
      ],
      solutions: [
        'SaaS Platform Development',
        'DevOps Implementation',
        'Cloud Architecture',
        'AI/ML Integration',
        'API Development',
        'Product Modernization'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Microservices', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      icon: '💻',
      stats: '200+ Tech Clients',
      successStories: 'Helped a SaaS startup scale from 0 to 1 million users in 6 months'
    },
    'Professional services': {
      name: 'Professional services',
      fullName: 'Professional & Business Services',
      description: 'Technology solutions that transform professional service delivery and operations.',
      longDescription: 'We help professional services firms including consulting, legal, accounting, and marketing agencies optimize their operations with CRM, project management, time tracking, and client collaboration platforms.',
      challenges: [
        'Client relationship management',
        'Project profitability tracking',
        'Resource allocation',
        'Time and expense management',
        'Client collaboration'
      ],
      solutions: [
        'Professional Services Automation',
        'CRM Implementation',
        'Project Management Systems',
        'Time & Expense Tracking',
        'Client Portals',
        'Resource Management'
      ],
      technologies: ['Salesforce Sales Cloud', 'Microsoft Dynamics 365', 'Atlassian Jira', 'Odoo CRM', 'Power BI'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      icon: '👔',
      stats: '90+ Professional Services Clients',
      successStories: 'Increased billable utilization by 25% with PSA implementation'
    }
  };

  const currentIndustry = industriesData[selectedIndustry];

  return (
    <div className="industries-page">
      <div className="container">
        <div className="industries-layout">
          {/* Sidebar Navigation */}
          <aside className="industries-sidebar">
            <h3>INDUSTRIES</h3>
            <ul className="industries-list">
              {Object.keys(industriesData).map(industry => (
                <li key={industry}>
                  <button 
                    className={`industry-nav-btn ${selectedIndustry === industry ? 'active' : ''}`}
                    onClick={() => setSelectedIndustry(industry)}
                  >
                    <span className="industry-nav-icon">{industriesData[industry].icon}</span>
                    <span>{industry}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="industries-content">
            <div className="industry-detail">
              <div className="industry-header">
                <div className="industry-header-info">
                  <div className="industry-icon-large">{currentIndustry.icon}</div>
                  <h1>{currentIndustry.fullName}</h1>
                  <p className="industry-description">{currentIndustry.description}</p>
                </div>
              </div>

              <div className="industry-image-container">
                <img src={currentIndustry.image} alt={currentIndustry.name} className="industry-image" />
                <div className="industry-stats-badge">
                  <span className="stats-number">{currentIndustry.stats}</span>
                </div>
              </div>

              <div className="industry-long-description">
                <p>{currentIndustry.longDescription}</p>
              </div>

              <div className="industry-grid">
                <div className="industry-challenges">
                  <h3>Key Challenges We Solve</h3>
                  <ul className="challenges-list">
                    {currentIndustry.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div className="industry-solutions">
                  <h3>Our Solutions</h3>
                  <ul className="solutions-list">
                    {currentIndustry.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="industry-technologies">
                <h3>Technologies We Use</h3>
                <div className="tech-tags">
                  {currentIndustry.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="industry-success-story">
                <h3>Success Story</h3>
                <div className="success-card">
                  <p>✨ {currentIndustry.successStories}</p>
                </div>
              </div>

              <div className="industry-actions">
                <a href="/contact" className="btn-primary">Discuss Your Industry →</a>
                <a href="/casestudies" className="btn-secondary">View Case Studies</a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Industries;