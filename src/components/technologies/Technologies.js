import React, { useState } from 'react';
import './Technologies.css';

const Technologies = () => {
  const [selectedTech, setSelectedTech] = useState('Salesforce');

  const technologiesData = {
    'Salesforce': {
      name: 'Salesforce',
      fullName: 'Salesforce CRM Platform',
      description: 'Salesforce is the world\'s #1 CRM platform that empowers businesses to connect with customers in a whole new way.',
      longDescription: 'We specialize in Salesforce implementation, customization, and integration services. Our certified Salesforce experts help businesses leverage the full power of Sales Cloud, Service Cloud, Marketing Cloud, and Nonprofit Cloud to drive growth and improve customer relationships.',
      features: [
        'Sales Cloud Implementation',
        'Service Cloud Setup',
        'Marketing Cloud Integration',
        'Nonprofit Cloud Solutions',
        'Custom App Development on Salesforce',
        'Salesforce Lightning Migration',
        'Third-party Integrations',
        'Salesforce Training & Support'
      ],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Salesforce_logo.svg/1200px-Salesforce_logo.svg.png',
      color: '#00A1E0',
      certifications: ['Salesforce Certified Administrator', 'Salesforce Certified Developer', 'Salesforce Certified Architect']
    },
    'AWS': {
      name: 'AWS',
      fullName: 'Amazon Web Services',
      description: 'AWS is the world\'s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services.',
      longDescription: 'As an AWS Select Consulting Partner, we help businesses migrate, modernize, and optimize their cloud infrastructure. Our AWS experts design and implement scalable, secure, and cost-effective cloud solutions.',
      features: [
        'Cloud Migration (MAP Program)',
        'AWS Architecture Design',
        'Serverless Applications',
        'DevOps on AWS',
        'SageMaker AI/ML Solutions',
        'AWS Security & Compliance',
        'Cost Optimization (FinOps)',
        '24/7 Cloud Management'
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
      color: '#FF9900',
      certifications: ['AWS Certified Solutions Architect', 'AWS Certified Developer', 'AWS Certified DevOps Engineer']
    },
    'Microsoft Azure': {
      name: 'Microsoft Azure',
      fullName: 'Microsoft Azure Cloud',
      description: 'Azure is a cloud computing platform providing IaaS, PaaS, and SaaS solutions for building, deploying, and managing applications.',
      longDescription: 'Our Microsoft Azure experts deliver comprehensive cloud solutions including hybrid cloud implementations, Azure OpenAI integration, and enterprise application modernization.',
      features: [
        'Azure Infrastructure Setup',
        'Hybrid Cloud Solutions',
        'Azure OpenAI Integration',
        'Azure DevOps Services',
        'Application Modernization',
        'Data Analytics on Azure',
        'Azure Security & Identity',
        'Disaster Recovery'
      ],
      image: 'https://images.unsplash.com/photo-1622014100232-84fa90d13f7f?w=600&h=400&fit=crop',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png',
      color: '#0078D4',
      certifications: ['Azure Solutions Architect', 'Azure Developer Associate', 'Azure DevOps Engineer']
    },
    'SAP Commerce': {
      name: 'SAP Commerce',
      fullName: 'SAP Commerce Cloud',
      description: 'SAP Commerce Cloud is a leading e-commerce platform for B2B and B2C digital commerce experiences.',
      longDescription: 'We help businesses implement and optimize SAP Commerce Cloud solutions for seamless omnichannel experiences, improved conversion rates, and scalable e-commerce operations.',
      features: [
        'SAP Commerce Implementation',
        'E-commerce Strategy',
        'Omnichannel Integration',
        'Payment Gateway Integration',
        'ERP Integration',
        'Performance Optimization',
        'SAP Commerce Customization',
        'Migration to SAP Commerce Cloud'
      ],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png',
      color: '#0FAAFF',
      certifications: ['SAP Certified Associate', 'SAP Commerce Cloud Consultant']
    },
    'Odoo': {
      name: 'Odoo',
      fullName: 'Odoo ERP Suite',
      description: 'Odoo is a comprehensive suite of business applications including CRM, e-commerce, accounting, inventory, and project management.',
      longDescription: 'We provide end-to-end Odoo implementation services including customization, integration, and support. Our Odoo experts help businesses streamline operations with this all-in-one business management software.',
      features: [
        'Odoo Implementation',
        'Custom Module Development',
        'ERP Migration',
        'Integration with Third-party Apps',
        'Odoo Training',
        'Ongoing Support & Maintenance',
        'Business Process Automation',
        'Inventory & Accounting Setup'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Odoo_logo.svg/1200px-Odoo_logo.svg.png',
      color: '#714B67',
      certifications: ['Odoo Certified Partner', 'Odoo Functional Consultant']
    },
    'Atlassian': {
      name: 'Atlassian',
      fullName: 'Atlassian Suite',
      description: 'Atlassian provides tools for software development, project management, and team collaboration including Jira, Confluence, and Bitbucket.',
      longDescription: 'As a Gold Solution Partner, we optimize your SDLC through Jira and Confluence automation, custom workflows, and seamless integrations with your development pipeline.',
      features: [
        'Jira Implementation',
        'Confluence Setup',
        'Custom Workflow Automation',
        'Bitbucket Integration',
        'DevOps Pipeline Integration',
        'Atlassian Marketplace Apps',
        'Migration to Cloud',
        'Team Training & Support'
      ],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Atlassian_logo.svg/1200px-Atlassian_logo.svg.png',
      color: '#0052CC',
      certifications: ['Atlassian Gold Partner', 'Jira Administrator', 'Confluence Specialist']
    },
    'Power BI': {
      name: 'Power BI',
      fullName: 'Microsoft Power BI',
      description: 'Power BI is a business analytics service that provides interactive visualizations and business intelligence capabilities.',
      longDescription: 'Our Power BI experts help organizations transform raw data into actionable insights through interactive dashboards, data modeling, and real-time reporting solutions.',
      features: [
        'Power BI Dashboard Development',
        'Data Visualization',
        'ETL & Data Integration',
        'DAX Calculations',
        'Power BI Embedded',
        'Row-level Security',
        'Scheduled Data Refresh',
        'Power BI Training'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png',
      color: '#F2C811',
      certifications: ['Power BI Data Analyst', 'Power BI Developer']
    },
    'Google Cloud': {
      name: 'Google Cloud',
      fullName: 'Google Cloud Platform',
      description: 'Google Cloud provides infrastructure, platform, and AI/ML services for building and deploying applications at scale.',
      longDescription: 'We leverage Google Cloud\'s cutting-edge technologies including BigQuery, AI Platform, and Kubernetes to help businesses innovate faster and scale efficiently.',
      features: [
        'GCP Infrastructure Setup',
        'BigQuery Analytics',
        'Kubernetes on GCP',
        'AI/ML Implementation',
        'Cloud Migration',
        'Data Engineering',
        'Cloud Security',
        'Cost Management'
      ],
      image: 'https://images.unsplash.com/photo-1573804633927-b8b3b21ab6e8?w=600&h=400&fit=crop',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png',
      color: '#4285F4',
      certifications: ['Google Cloud Architect', 'Google Data Engineer', 'Cloud Developer']
    }
  };

  const currentTech = technologiesData[selectedTech];

  return (
    <div className="technologies-page">
      <div className="container">
        <h1>Technologies & Platforms</h1>
        <p className="technologies-subtitle">We provide Consultation, Implementation, Integration, and Support for these platforms</p>
        
        <div className="technologies-layout">
          {/* Tech Navigation */}
          <aside className="tech-sidebar">
            <div className="tech-nav">
              {Object.keys(technologiesData).map(tech => (
                <button
                  key={tech}
                  className={`tech-nav-btn ${selectedTech === tech ? 'active' : ''}`}
                  onClick={() => setSelectedTech(tech)}
                >
                  <img src={technologiesData[tech].logo} alt={tech} className="tech-nav-logo" />
                  <span>{tech}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Tech Detail */}
          <main className="tech-detail">
            <div className="tech-header">
              <div className="tech-header-info">
                <h2>{currentTech.fullName}</h2>
                <p className="tech-description">{currentTech.description}</p>
              </div>
              <div className="tech-logo-large">
                <img src={currentTech.logo} alt={currentTech.name} />
              </div>
            </div>

            <div className="tech-image-container">
              <img src={currentTech.image} alt={currentTech.name} className="tech-image" />
              <div className="tech-color-bar" style={{ backgroundColor: currentTech.color }}></div>
            </div>

            <div className="tech-long-description">
              <p>{currentTech.longDescription}</p>
            </div>

            <div className="tech-features">
              <h3>Key Services & Capabilities</h3>
              <div className="features-grid">
                {currentTech.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-certifications">
              <h3>Certifications & Partnerships</h3>
              <div className="cert-badges">
                {currentTech.certifications.map((cert, index) => (
                  <span key={index} className="cert-badge">{cert}</span>
                ))}
              </div>
            </div>

            <div className="tech-actions">
              <a href="/contact" className="btn-primary">Get Expert Consultation →</a>
              <a href="/casestudies" className="btn-secondary">View Case Studies</a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
