import React from 'react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: 'CRM Solutions',
      icon: '🤝',
      description: 'Full-cycle implementation and Zero-Copy Integration with data lakes for Salesforce and Dynamics 365.',
      link: '#'
    },
    {
      title: 'ERP Implementation',
      icon: '🏭',
      description: 'Strategic consultation and legacy-to-cloud migration for SAP and Odoo enterprise systems.',
      link: '#'
    },
    {
      title: 'Digital Commerce',
      icon: '🛒',
      description: 'Headless commerce development and global payment gateway integration.',
      link: '#'
    },
    {
      title: 'Data Analytics & BI',
      icon: '📊',
      description: 'Implementation of Power BI dashboards and predictive data modeling.',
      link: '#'
    },
    {
      title: 'Artificial Intelligence & RPA',
      icon: '🤖',
      description: 'Developing autonomous Agentic AI and robotic process automation solutions.',
      link: '#'
    },
    {
      title: 'AR/VR & IoT',
      icon: '🥽',
      description: 'Immersive "Digital Twin" development and edge-device integration.',
      link: '#'
    }
  ];

  return (
    <div className="solutions-page">
      <div className="container">
        <h1>Solutions</h1>
        <p className="solutions-subtitle">Vertical solutions powered by MJ & Roberts Consulting's 360-degree service model</p>
        
        <div className="solutions-grid">
          {solutions.map(solution => (
            <div key={solution.title} className="solution-card">
              <div className="solution-icon">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <a href={solution.link} className="solution-link">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;