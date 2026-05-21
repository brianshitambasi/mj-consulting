import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState('IT consulting');

  const servicesData = {
    'IT consulting': {
      title: 'IT Consulting & Digital Transformation Advisory',
      description: 'We help businesses navigate complex technology landscapes and drive digital transformation initiatives that deliver measurable results.',
      longDescription: 'Our IT consulting services provide strategic guidance to help you leverage technology for business growth. We assess your current infrastructure, identify opportunities for improvement, and create roadmaps for digital transformation.',
      features: [
        'Technology assessment and audit',
        'Digital transformation strategy',
        'IT infrastructure planning',
        'Cloud migration advisory',
        'Technology stack optimization',
        'ROI analysis and planning'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      icon: 'Ì≥ä',
      link: '/services/it-consulting'
    },
    'Software engineering': {
      title: 'Software Engineering & Application Services',
      description: 'Custom software development tailored to your business needs using modern technologies and best practices.',
      longDescription: 'We build robust, scalable, and secure software solutions that solve real business problems. From web applications to mobile apps and enterprise systems, our engineering team delivers high-quality code.',
      features: [
        'Custom web application development',
        'Mobile app development (iOS/Android)',
        'Enterprise software solutions',
        'API development and integration',
        'Legacy system modernization',
        'Cloud-native application development'
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      icon: 'Ì≤ª',
      link: '/services/software-engineering'
    },
    'Application services': {
      title: 'Application Services & Management',
      description: 'End-to-end application lifecycle services from development to maintenance and support.',
      longDescription: 'We provide comprehensive application services including development, deployment, maintenance, and continuous improvement of your business applications.',
      features: [
        'Application development and deployment',
        'Application modernization',
        'Performance optimization',
        'Security auditing and hardening',
        '24/7 application monitoring',
        'Regular updates and patches'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      icon: '‚öôÔ∏è',
      link: '/services/application-services'
    },
    'Managed IT services': {
      title: 'Managed IT Services & Support',
      description: 'Proactive IT management and support to keep your business running smoothly 24/7.',
      longDescription: 'Our managed IT services provide comprehensive support for your entire IT infrastructure, ensuring maximum uptime, security, and performance.',
      features: [
        '24/7 IT infrastructure monitoring',
        'Help desk and technical support',
        'Network management',
        'Server and cloud management',
        'Backup and disaster recovery',
        'IT security management'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      icon: 'Ì∂•Ô∏è',
      link: '/services/managed-it'
    },
    'DevOps': {
      title: 'DevOps & Platform Engineering',
      description: 'Streamline your development and operations with modern DevOps practices and tools.',
      longDescription: 'We implement DevOps practices that accelerate software delivery, improve quality, and reduce time-to-market. Our platform engineering services build self-service infrastructure for developers.',
      features: [
        'CI/CD pipeline implementation',
        'Infrastructure as Code (IaC)',
        'Container orchestration (Kubernetes)',
        'Cloud platform engineering',
        'Automated testing integration',
        'Monitoring and observability'
      ],
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
      icon: 'Ì∫Ä',
      link: '/services/devops'
    },
    'Quality assurance & testing': {
      title: 'Quality Assurance & Testing Services',
      description: 'Comprehensive testing solutions to ensure your software meets the highest quality standards.',
      longDescription: 'Our QA and testing services identify issues early, reduce risks, and ensure your software delivers exceptional user experiences. We use automated and manual testing methodologies.',
      features: [
        'Automated testing frameworks',
        'Manual and exploratory testing',
        'Performance and load testing',
        'Security testing (SAST/DAST)',
        'Mobile and cross-browser testing',
        'Test automation strategy'
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      icon: '‚úÖ',
      link: '/services/qa-testing'
    },
    'Maintenance & Support': {
      title: 'Maintenance & Technical Support',
      description: 'Ongoing maintenance and support services to keep your systems running optimally.',
      longDescription: 'We provide continuous maintenance and support services including bug fixes, performance optimization, security updates, and technical assistance.',
      features: [
        'Bug fixes and patches',
        'Performance optimization',
        'Security updates',
        'Technical support hotline',
        'System health monitoring',
        'Regular maintenance reports'
      ],
      image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&h=400&fit=crop',
      icon: 'Ì¥ß',
      link: '/services/maintenance'
    },
    'Smart teams': {
      title: 'Smart Teams - Staff Augmentation',
      description: 'Access top-tier technical talent on-demand to scale your development capabilities.',
      longDescription: 'Our Smart Teams service provides you with hand-picked, pre-vetted developers, engineers, and IT professionals who integrate seamlessly with your existing teams.',
      features: [
        'Pre-vetted developers and engineers',
        'Flexible engagement models',
        'Remote and on-site options',
        'Team scaling on demand',
        'Dedicated project managers',
        'Knowledge transfer and documentation'
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      icon: 'Ì±•',
      link: '/services/smart-teams'
    }
  };

  const currentService = servicesData[selectedService];

  return (
    <div className="services-page">
      <div className="container">
        <div className="services-layout">
          {/* Sidebar with service links */}
          <aside className="services-sidebar">
            <h3>SERVICES</h3>
            <ul className="services-list">
              {Object.keys(servicesData).map(service => (
                <li key={service}>
                  <button 
                    className={`service-link ${selectedService === service ? 'active' : ''}`}
                    onClick={() => setSelectedService(service)}
                  >
                    <span className="service-icon">{servicesData[service].icon}</span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main content area with service details */}
          <main className="services-content">
            <div className="service-detail">
              <div className="service-header">
                <h1>{currentService.title}</h1>
                <div className="service-image-container">
                  <img 
                    src={currentService.image} 
                    alt={currentService.title}
                    className="service-image"
                  />
                </div>
              </div>
              
              <div className="service-description">
                <p>{currentService.longDescription}</p>
              </div>

              <div className="service-features">
                <h3>Key Features & Benefits:</h3>
                <ul>
                  {currentService.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="service-actions">
                <a href={currentService.link} className="btn-primary">Learn More ‚Üí</a>
                <a href="/contact" className="btn-secondary">Contact Us</a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Services;
