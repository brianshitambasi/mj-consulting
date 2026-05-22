import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();

  const caseStudiesData = {
    'zero-copy': {
      title: 'Zero-Copy Revolution',
      industry: 'Retail',
      challenge: 'Major retailer struggled with severe data fragmentation across 500+ stores.',
      solution: 'Implemented zero-copy data integration using Apache Iceberg and AWS Lake Formation.',
      results: ['95% reduction in data duplication', '10x faster analytics queries', '$2M annual savings']
    },
    'project-titan': {
      title: 'Project Titan',
      industry: 'Financial Services',
      challenge: 'Financial institution faced critical challenges with 2,000+ legacy servers.',
      solution: 'Executed zero-downtime migration to AWS using infrastructure-as-code.',
      results: ['Zero downtime', '40% cost reduction', '99.99% availability']
    },
    'mission-impact': {
      title: 'Mission Impact',
      industry: 'Nonprofit',
      challenge: 'Global health nonprofit had fragmented donor management across 50 countries.',
      solution: 'Deployed Salesforce Nonprofit Cloud with Einstein AI analytics.',
      results: ['300% increase in donor engagement', '45% admin reduction', '$5M new funding']
    }
  };

  const study = caseStudiesData[id];

  if (!study) {
    return (
      <div style={{ paddingTop: '100px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
        <div className="container">
          <h1>Case Study not found</h1>
          <Link to="/casestudies" style={{ background: '#667eea', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none' }}>Back to Case Studies</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <div style={{ padding: '60px 0', background: 'linear-gradient(135deg, #00072d 0%, #0a2472 100%)' }}>
        <div className="container">
          <Link to="/casestudies" style={{ color: 'white', textDecoration: 'none', marginBottom: '30px', display: 'inline-block' }}>← Back to Case Studies</Link>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{study.title}</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>{study.industry}</p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
          <h3 style={{ color: '#667eea', marginBottom: '20px' }}>The Challenge</h3>
          <p style={{ lineHeight: '1.8', color: '#ccc' }}>{study.challenge}</p>
        </div>

        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
          <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Our Solution</h3>
          <p style={{ lineHeight: '1.8', color: '#ccc' }}>{study.solution}</p>
        </div>

        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '15px' }}>
          <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Key Results</h3>
          {study.results.map((result, i) => (
            <div key={i} style={{ padding: '10px 0', color: '#ccc', borderBottom: '1px solid #333' }}>✓ {result}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
