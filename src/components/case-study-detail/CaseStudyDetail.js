import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();

  const caseStudiesData = {
    'zero-copy': {
      title: 'Zero-Copy Revolution',
      subtitle: 'Retail Data Federation',
      category: 'Retail & E-commerce',
      industry: 'Retail',
      date: 'January 2024',
      client: 'Global Retail Corp',
      location: 'United States',
      challenge: 'A major international retailer with over 500 stores across 3 continents struggled with severe data fragmentation.',
      solution: 'We implemented a zero-copy data integration architecture using Apache Iceberg and AWS Lake Formation.',
      results: ['95% reduction in data duplication', '10x faster analytics queries', '$2M annual savings'],
      technologies: ['Apache Iceberg', 'AWS Lake Formation', 'Python', 'Apache Spark'],
      testimonial: { quote: "The zero-copy architecture has completely transformed how we handle data.", author: "Sarah Johnson", title: "CIO" }
    },
    'project-titan': {
      title: 'Project Titan',
      subtitle: '2,000-Server Migration',
      category: 'Cloud Migration',
      industry: 'Financial Services',
      date: 'March 2024',
      client: 'First Financial Bank',
      location: 'United Kingdom',
      challenge: 'A leading financial institution faced critical challenges with their on-premise infrastructure.',
      solution: 'We executed a phased, zero-downtime migration to AWS using infrastructure-as-code.',
      results: ['Zero downtime throughout migration', '40% cost reduction', '99.99% availability'],
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'Jenkins'],
      testimonial: { quote: "Project Titan exceeded all our expectations.", author: "Michael Chen", title: "CTO" }
    },
    'mission-impact': {
      title: 'Mission Impact',
      subtitle: 'Salesforce Nonprofit Cloud',
      category: 'Nonprofit Technology',
      industry: 'Nonprofit',
      date: 'October 2023',
      client: 'Global Health Initiative',
      location: '50+ Countries',
      challenge: 'A global health nonprofit had fragmented donor management systems.',
      solution: 'We deployed Salesforce Nonprofit Cloud with Einstein AI analytics across all 50 countries.',
      results: ['300% increase in donor engagement', 'Unified platform across 50 countries', '45% admin reduction'],
      technologies: ['Salesforce', 'Einstein AI', 'Tableau', 'MuleSoft'],
      testimonial: { quote: "This implementation has revolutionized how we manage donor relationships.", author: "Dr. Emily Watson", title: "Executive Director" }
    }
  };

  const study = caseStudiesData[id];

  if (!study) {
    return (
      <div className="detail-not-found">
        <div className="container">
          <h1>Case Study Not Found</h1>
          <Link to="/casestudies" className="btn-primary">Back to Case Studies</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="case-study-detail-wrapper">
      <div className="detail-hero">
        <div className="container">
          <Link to="/casestudies" className="back-link">‚Üê Back to Case Studies</Link>
          <div className="detail-hero-content">
            <span className="detail-category">{study.category}</span>
            <h1>{study.title}</h1>
            <p>{study.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container detail-container">
        <div className="detail-stats-grid">
          <div className="stat-card"><span className="stat-icon">Ì≥Ö</span><div><small>Project Date</small><strong>{study.date}</strong></div></div>
          <div className="stat-card"><span className="stat-icon">Ìø≠</span><div><small>Industry</small><strong>{study.industry}</strong></div></div>
          <div className="stat-card"><span className="stat-icon">Ì±•</span><div><small>Client</small><strong>{study.client}</strong></div></div>
          <div className="stat-card"><span className="stat-icon">Ìºç</span><div><small>Location</small><strong>{study.location}</strong></div></div>
        </div>

        <div className="detail-layout">
          <div className="detail-main">
            <div className="detail-section"><h3>The Challenge</h3><p>{study.challenge}</p></div>
            <div className="detail-section"><h3>Our Solution</h3><p>{study.solution}</p></div>
            <div className="detail-section"><h3>Technologies Used</h3><div className="tech-tags">{study.technologies.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}</div></div>
            <div className="detail-section"><h3>Key Results</h3><div className="results-list">{study.results.map((result, i) => <div key={i} className="result-item"><span className="check">‚úì</span> {result}</div>)}</div></div>
          </div>
          <div className="detail-sidebar">
            {study.testimonial && (<div className="testimonial-card"><p className="quote">"{study.testimonial.quote}"</p><strong>{study.testimonial.author}</strong><p className="title">{study.testimonial.title}</p></div>)}
            <div className="cta-card"><h4>Ready to achieve similar results?</h4><Link to="/contact" className="cta-btn">Contact Our Team ‚Üí</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
