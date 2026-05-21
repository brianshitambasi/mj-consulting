import React from 'react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: 'CRM Solutions (Salesforce, Dynamics 365)',
      description: 'Full-cycle implementation and Zero-Copy Integration with data lakes.',
      features: ['Salesforce Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Custom CRM Development'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop',
      icon: 'í´'
    },
    {
      title: 'ERP Implementation (SAP, Odoo)',
      description: 'Strategic consultation and legacy-to-cloud migration.',
      features: ['SAP S/4HANA', 'Odoo Customization', 'ERP Integration', 'Legacy Migration'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      icon: 'í¿­'
    },
    {
      title: 'Digital Commerce',
      description: 'Headless commerce development and global payment gateway integration.',
      features: ['Headless Commerce', 'Payment Gateway Integration', 'Marketplace Solutions', 'B2B/B2C Commerce'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=250&fit=crop',
      icon: 'í»’'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Implementation of Power BI dashboards and predictive data modeling.',
      features: ['Power BI Dashboards', 'Data Warehousing', 'Predictive Analytics', 'ETL Integration'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      icon: 'í³Š'
    },
    {
      title: 'Artificial Intelligence & RPA',
      description: 'Developing autonomous Agentic AI and robotic process automation.',
      features: ['Machine Learning Models', 'Robotic Process Automation', 'AI Chatbots', 'Computer Vision'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      icon: 'í´–'
    },
    {
      title: 'AR/VR & IoT',
      description: 'Immersive "Digital Twin" development and edge-device integration.',
      features: ['Digital Twin', 'AR/VR Applications', 'IoT Sensor Integration', 'Edge Computing'],
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=250&fit=crop',
      icon: 'íµ½'
    }
  ];

  const handleLearnMore = (solutionTitle) => {
    console.log(`Learn more about: ${solutionTitle}`);
    // You can add navigation or modal logic here
  };

  return (
    <div className="solutions-page">
      <div className="container">
        <h1>Solutions</h1>
        <p className="solutions-subtitle">Vertical solutions powered by MJ & Roberts Consulting's 360-degree service model</p>
        
        <div className="solutions-grid">
          {solutions.map(solution => (
            <div key={solution.title} className="solution-card">
              <div className="solution-image-container">
                <img src={solution.image} alt={solution.title} className="solution-image" />
                <div className="solution-icon">{solution.icon}</div>
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="solution-features">
                {solution.features.slice(0, 3).map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
              <button className="solution-link" onClick={() => handleLearnMore(solution.title)}>
                Learn more â†’
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
