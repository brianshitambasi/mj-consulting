import React, { useState } from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudiesData = [
    {
      id: 1,
      title: 'Digital Transformation for a Food Manufacturer & Distributor',
      clientName: 'FreshFoods International',
      industry: 'Manufacturing & Distribution',
      duration: '8 months',
      technologies: ['Microsoft Dynamics 365', 'Power BI', 'Azure', 'IoT Sensors'],
      challenge: 'The client was struggling with fragmented systems across their manufacturing plants and distribution centers. Manual data entry led to inventory discrepancies, production delays, and poor demand forecasting. They needed an integrated solution to streamline operations from production to delivery.',
      solution: 'We implemented Dynamics 365 Finance & Supply Chain Management (SCM) integrated with IoT sensors on production lines. The solution provides real-time inventory tracking, automated purchase orders, predictive maintenance alerts, and AI-powered demand forecasting.',
      results: [
        '40% reduction in inventory carrying costs',
        '30% improvement in order fulfillment accuracy',
        '25% decrease in production downtime',
        'Real-time visibility across 5 manufacturing facilities',
        'Automated replenishment saving 20+ hours weekly'
      ],
      testimonial: {
        quote: "The digital transformation has revolutionized our operations. We now have complete visibility from raw materials to customer delivery, and the predictive analytics have dramatically improved our forecasting.",
        author: "Sarah Johnson",
        title: "COO, FreshFoods International"
      },
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=500&fit=crop',
      icon: '🏭'
    },
    {
      id: 2,
      title: 'Custom Deployment Management Solution for Telecom Operator',
      clientName: 'TelcoConnect',
      industry: 'Telecommunications',
      duration: '6 months',
      technologies: ['Salesforce', 'AWS', 'React', 'Node.js', 'MongoDB'],
      challenge: 'The telecom operator managed thousands of network deployment projects annually using spreadsheets and email. Project tracking was inefficient, leading to delayed deployments, budget overruns, and poor resource utilization across field teams.',
      solution: 'We built a custom deployment management platform that combines workflow management with comprehensive project monitoring. The solution includes automated task assignment, real-time GPS tracking of field teams, budget tracking, and client communication portals.',
      results: [
        '50% faster project completion times',
        '35% reduction in deployment costs',
        'Real-time visibility on 500+ concurrent projects',
        '95% improvement in resource utilization',
        'Zero missed SLAs since implementation'
      ],
      testimonial: {
        quote: "This platform transformed how we manage network deployments. We've cut project timelines in half and our clients love the transparency into project progress.",
        author: "Michael Chen",
        title: "VP of Network Operations, TelcoConnect"
      },
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      icon: '📡'
    },
    {
      id: 3,
      title: 'Odoo ERP Implementation for a Global Tech Company',
      clientName: 'TechGlobal Solutions',
      industry: 'Technology & Software',
      duration: '10 months',
      technologies: ['Odoo ERP', 'Python', 'PostgreSQL', 'AWS', 'REST APIs'],
      challenge: 'TechGlobal was operating with 5 different legacy systems that didn\'t communicate with each other. Sales, inventory, accounting, and HR were all on separate platforms, causing data silos, duplicate entries, and reporting nightmares.',
      solution: 'We implemented a comprehensive Odoo ERP solution with advanced customizations including CRM, Sales, Inventory, Accounting, HR, and Project Management modules. Custom APIs were built to integrate with existing customer portals and external systems.',
      results: [
        'Single source of truth across all departments',
        '75% reduction in manual data entry',
        'Real-time financial reporting and forecasting',
        '30% faster order-to-cash cycle',
        '$2M annual operational savings'
      ],
      testimonial: {
        quote: "Moving to Odoo has been transformative. We finally have unified data across our global operations, and the reporting capabilities are game-changing for our leadership team.",
        author: "David Martinez",
        title: "CEO, TechGlobal Solutions"
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      icon: '💻'
    },
    {
      id: 4,
      title: 'Zero-Copy Data Federation for Retail Giant',
      clientName: 'MegaRetail Corp',
      industry: 'Retail & E-commerce',
      duration: '5 months',
      technologies: ['Salesforce', 'Snowflake', 'AWS', 'Apache Kafka', 'Tableau'],
      challenge: 'The retailer had customer data spread across 12 different systems including CRM, POS, e-commerce, loyalty, and marketing platforms. Data duplication and inconsistency prevented a unified customer view and personalized marketing.',
      solution: 'We implemented a zero-copy data federation architecture that connects all data sources without moving or duplicating data. A unified customer 360 view is now available in real-time for sales, marketing, and support teams.',
      results: [
        'Unified customer profiles for 10M+ customers',
        '40% increase in marketing campaign ROI',
        'Real-time personalization across all channels',
        '70% reduction in data storage costs',
        'Improved customer lifetime value by 25%'
      ],
      testimonial: {
        quote: "For the first time, we truly understand our customers. The zero-copy approach meant we could get value quickly without risky data migrations.",
        author: "Jennifer Wong",
        title: "CDO, MegaRetail Corp"
      },
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop',
      icon: '🛍️'
    },
    {
      id: 5,
      title: 'Project Titan: 2,000-Server Migration to AWS',
      clientName: 'Financial Services International',
      industry: 'Finance',
      duration: '12 months',
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'Jenkins', 'Docker'],
      challenge: 'A global financial services firm needed to migrate 2,000+ on-premise servers to AWS with zero downtime. Regulatory requirements demanded strict security controls and audit trails throughout the migration.',
      solution: 'We executed a phased migration using the AWS Migration Acceleration Program (MAP). The solution included re-platforming critical applications, implementing infrastructure as code, and establishing a multi-AZ architecture for high availability.',
      results: [
        'Zero downtime migration of 2,000+ servers',
        '40% reduction in infrastructure costs',
        '99.99% uptime achieved post-migration',
        'Automated scaling for peak trading periods',
        'Complete audit compliance for financial regulations'
      ],
      testimonial: {
        quote: "The migration was flawless. We never missed a single trading day, and our infrastructure is now more resilient and cost-effective than ever.",
        author: "Robert Taylor",
        title: "CTO, Financial Services International"
      },
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      icon: '☁️'
    },
    {
      id: 6,
      title: 'Salesforce Nonprofit Cloud Global Scaling',
      clientName: 'Global Aid Foundation',
      industry: 'Nonprofit',
      duration: '7 months',
      technologies: ['Salesforce Nonprofit Cloud', 'Marketing Cloud', 'Tableau', 'MuleSoft'],
      challenge: 'The international nonprofit needed to manage donor relationships, grant tracking, and program impact measurement across 25 countries. Existing systems couldn\'t provide global visibility or automate reporting to donors.',
      solution: 'We implemented Salesforce Nonprofit Cloud globally, including donor management, grantmaking, program management, and impact reporting. Marketing Cloud was integrated for personalized donor communications across regions.',
      results: [
        'Centralized donor database for 500,000+ supporters',
        '50% increase in donor retention rates',
        'Automated grant reporting saving 100+ hours monthly',
        'Real-time program impact dashboards for board members',
        '30% growth in annual donations'
      ],
      testimonial: {
        quote: "Salesforce has transformed how we engage with donors and measure our impact. We can now tell compelling stories with data to our supporters worldwide.",
        author: "Dr. Emily Okonkwo",
        title: "Global Director, Global Aid Foundation"
      },
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=500&fit=crop',
      icon: '🤝'
    }
  ];

  const currentCase = caseStudiesData[selectedCase];

  return (
    <div className="case-studies-page">
      <div className="container">
        <h1>Case Studies</h1>
        <p className="case-studies-subtitle">Real success stories from our clients across industries</p>
        
        {/* Case Study Navigation Tabs */}
        <div className="case-tabs">
          {caseStudiesData.map((caseStudy, index) => (
            <button
              key={caseStudy.id}
              className={`case-tab ${selectedCase === index ? 'active' : ''}`}
              onClick={() => setSelectedCase(index)}
            >
              <span className="case-tab-icon">{caseStudy.icon}</span>
              <span className="case-tab-title">{caseStudy.title.substring(0, 40)}...</span>
            </button>
          ))}
        </div>

        {/* Featured Case Study Detail */}
        <div className="featured-case">
          <div className="case-hero">
            <img src={currentCase.image} alt={currentCase.title} className="case-hero-image" />
            <div className="case-hero-overlay">
              <div className="case-badge">{currentCase.industry}</div>
              <h2>{currentCase.title}</h2>
              <div className="case-meta">
                <span>📅 Duration: {currentCase.duration}</span>
                <span>🏢 Client: {currentCase.clientName}</span>
              </div>
            </div>
          </div>

          <div className="case-content">
            <div className="case-section">
              <h3>The Challenge</h3>
              <p>{currentCase.challenge}</p>
            </div>

            <div className="case-section">
              <h3>The Solution</h3>
              <p>{currentCase.solution}</p>
            </div>

            <div className="case-section">
              <h3>Technologies Used</h3>
              <div className="tech-stack">
                {currentCase.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-stack-item">{tech}</span>
                ))}
              </div>
            </div>

            <div className="case-section">
              <h3>Key Results</h3>
              <div className="results-grid">
                {currentCase.results.map((result, idx) => (
                  <div key={idx} className="result-card">
                    <div className="result-icon">✓</div>
                    <div className="result-text">{result}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-testimonial">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{currentCase.testimonial.quote}</p>
              <div className="testimonial-author">
                <strong>{currentCase.testimonial.author}</strong>
                <span>{currentCase.testimonial.title}</span>
              </div>
            </div>

            <div className="case-actions">
              <a href="/contact" className="btn-primary">Discuss Similar Project →</a>
              <button className="btn-secondary">Download PDF Case Study</button>
            </div>
          </div>
        </div>

        {/* Other Case Studies Grid */}
        <div className="other-cases">
          <h3>More Success Stories</h3>
          <div className="case-studies-grid">
            {caseStudiesData.map((caseStudy, index) => (
              <div 
                key={caseStudy.id} 
                className={`case-card ${selectedCase === index ? 'active' : ''}`}
                onClick={() => setSelectedCase(index)}
              >
                <div className="case-card-image">
                  <img src={caseStudy.image} alt={caseStudy.title} />
                  <div className="case-card-icon">{caseStudy.icon}</div>
                </div>
                <div className="case-card-content">
                  <h4>{caseStudy.title}</h4>
                  <p className="case-industry">{caseStudy.industry}</p>
                  <p className="case-description">{caseStudy.results[0]}</p>
                  <button className="read-more-btn">Read Case Study →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;