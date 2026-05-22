import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SolutionDetail.css';

const SolutionDetail = () => {
  const { id } = useParams();

  const solutionsData = {
    'crm': {
      title: 'CRM Solutions',
      description: 'Transform your customer relationships with our comprehensive CRM implementation and optimization services.',
      fullDescription: 'Our CRM practice specializes in Salesforce and Microsoft Dynamics 365, helping organizations maximize their CRM investment. We provide end-to-end CRM services including strategy, implementation, customization, integration, and ongoing support.',
      benefits: ['40% increase in sales productivity', '35% improvement in customer satisfaction', '60% reduction in data management costs', 'Real-time customer insights', 'Automated marketing campaigns', 'Better sales forecasting'],
      technologies: ['Salesforce', 'Microsoft Dynamics 365', 'HubSpot', 'Zoho CRM', 'Pipedrive'],
      images: [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
      ],
      caseStudy: 'A global retail client increased sales by 45% within 6 months of implementing our CRM solution.',
      icon: '🤝',
      color: '#0a2472'
    },
    'erp': {
      title: 'ERP Solutions',
      description: 'Unify your business operations with comprehensive ERP systems.',
      fullDescription: 'We specialize in SAP and Odoo, helping organizations achieve operational excellence through better data visibility and process automation. Our ERP solutions integrate all aspects of your business into a single, unified platform.',
      benefits: ['50% reduction in manual data entry', '45% faster financial close', '60% improvement in inventory accuracy', 'Real-time business visibility', 'Better compliance and audit trails', 'Reduced operational costs'],
      technologies: ['SAP S/4HANA', 'Odoo', 'Oracle NetSuite', 'Microsoft Dynamics 365 Business Central'],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop'
      ],
      caseStudy: 'A manufacturing client reduced inventory costs by 35% and improved order accuracy by 50% after ERP implementation.',
      icon: '🏭',
      color: '#123499'
    },
    'digital-commerce': {
      title: 'Digital Commerce',
      description: 'Create exceptional shopping experiences with headless commerce solutions.',
      fullDescription: 'We build headless commerce solutions that decouple the frontend from backend functionality, giving you unprecedented flexibility to deliver unique shopping experiences across any channel or device.',
      benefits: ['60% faster page loads', '45% higher conversion rates', '50% reduction in cart abandonment', 'Faster time-to-market for new channels', 'Better SEO and mobile performance', 'Personalized customer experiences'],
      technologies: ['Shopify Plus', 'Magento', 'BigCommerce', 'Commercetools', 'Stripe', 'PayPal'],
      images: [
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop'
      ],
      caseStudy: 'An e-commerce client saw 120% increase in mobile conversions after migrating to headless architecture.',
      icon: '🛒',
      color: '#051650'
    },
    'data-analytics': {
      title: 'Data Analytics & BI',
      description: 'Turn your data into actionable insights with our BI solutions.',
      fullDescription: 'We implement end-to-end analytics solutions including Power BI dashboards, data warehousing, and predictive modeling. Our experts help you transform raw data into actionable business intelligence.',
      benefits: ['70% faster decision-making', '55% improvement in forecast accuracy', 'Real-time business visibility', 'Data-driven culture transformation', 'Reduced data preparation time', 'Better customer insights'],
      technologies: ['Power BI', 'Tableau', 'Looker', 'Snowflake', 'BigQuery', 'dbt'],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop'
      ],
      caseStudy: 'A financial services client reduced reporting time from weeks to hours with our BI dashboard solution.',
      icon: '📊',
      color: '#00072d'
    },
    'ai-rpa': {
      title: 'AI & RPA',
      description: 'Leverage cutting-edge AI and robotic process automation.',
      fullDescription: 'We build autonomous agentic systems that can reason, plan, and execute complex tasks. Our AI solutions include computer vision, natural language processing, predictive analytics, and intelligent document processing.',
      benefits: ['80% reduction in manual processing', '90% error reduction', '24/7 operational capability', 'Faster decision-making', 'Scalable intelligence', 'Improved customer experience'],
      technologies: ['TensorFlow', 'PyTorch', 'UiPath', 'Automation Anywhere', 'OpenAI', 'AWS SageMaker'],
      images: [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop'
      ],
      caseStudy: 'A logistics company automated 75% of their document processing, saving 10,000+ employee hours annually.',
      icon: '🤖',
      color: '#5ea173'
    },
    'ar-vr-iot': {
      title: 'AR/VR & IoT',
      description: 'Create immersive experiences with AR/VR and IoT solutions.',
      fullDescription: 'We build "Digital Twins" that enable real-time monitoring and simulation. Our AR/VR applications transform training, visualization, and remote assistance while IoT solutions connect sensors and devices to the cloud.',
      benefits: ['50% faster employee training', '40% reduction in maintenance costs', 'Real-time asset monitoring', 'Improved safety and compliance', 'Better decision-making through simulation', 'Predictive maintenance'],
      technologies: ['Unity', 'Unreal Engine', 'AWS IoT', 'Azure IoT', 'ThingWorx', 'Vuforia'],
      images: [
        'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop'
      ],
      caseStudy: 'A manufacturing client reduced equipment downtime by 45% using our predictive maintenance IoT solution.',
      icon: '🥽',
      color: '#0a2472'
    }
  };

  const solution = solutionsData[id];

  if (!solution) {
    return (
      <div style={{ paddingTop: '100px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#ffffff', color: '#00072d' }}>
        <div className="container">
          <h1>Solution not found</h1>
          <Link to="/solutions" style={{ background: '#0a2472', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>Back to Solutions</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ padding: '60px 0', background: 'linear-gradient(135deg, #00072d 0%, #0a2472 100%)' }}>
        <div className="container">
          <Link to="/solutions" style={{ color: 'white', textDecoration: 'none', marginBottom: '30px', display: 'inline-block', opacity: 0.9 }}>← Back to Solutions</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <span style={{ fontSize: '3rem' }}>{solution.icon}</span>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 0, color: 'white' }}>{solution.title}</h1>
          </div>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, color: 'rgba(255,255,255,0.9)', maxWidth: '800px' }}>{solution.description}</p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {/* Image Gallery */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ color: '#00072d', marginBottom: '20px', fontSize: '1.5rem' }}>Gallery</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {solution.images.map((img, idx) => (
              <img key={idx} src={img} alt={`${solution.title} ${idx + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
            ))}
          </div>
        </div>

        {/* Overview Section */}
        <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
          <h3 style={{ color: '#00072d', marginBottom: '20px', fontSize: '1.5rem' }}>Overview</h3>
          <p style={{ lineHeight: '1.8', color: '#5a6e8a' }}>{solution.fullDescription}</p>
        </div>

        {/* Key Benefits Section */}
        <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
          <h3 style={{ color: '#00072d', marginBottom: '20px', fontSize: '1.5rem' }}>Key Benefits</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '10px' }}>
            {solution.benefits.map((benefit, i) => (
              <div key={i} style={{ padding: '12px', color: '#1a1a2e', borderBottom: '1px solid #eef2f6', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#5ea173', marginRight: '12px', fontSize: '1.2rem' }}>✓</span> {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
          <h3 style={{ color: '#00072d', marginBottom: '20px', fontSize: '1.5rem' }}>Technologies We Use</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {solution.technologies.map((tech, i) => (
              <span key={i} style={{ background: '#eef2f6', padding: '8px 16px', borderRadius: '25px', color: '#0a2472', fontSize: '0.9rem' }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        <div style={{ background: 'linear-gradient(135deg, rgba(0,7,45,0.05) 0%, rgba(10,36,114,0.05) 100%)', padding: '30px', borderRadius: '15px', marginBottom: '30px', borderLeft: `4px solid ${solution.color}` }}>
          <h3 style={{ color: '#00072d', marginBottom: '15px', fontSize: '1.3rem' }}>Success Story</h3>
          <p style={{ lineHeight: '1.8', color: '#5a6e8a', fontSize: '1.1rem', fontStyle: 'italic' }}>"{solution.caseStudy}"</p>
        </div>

        {/* Stats Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
          <div style={{ textAlign: 'center', padding: '20px', background: '#f8fafc', borderRadius: '10px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0a2472' }}>98%</div>
            <div style={{ color: '#5a6e8a' }}>Client Satisfaction</div>
          </div>
          <div style={{ textAlign: 'center', padding: '20px', background: '#f8fafc', borderRadius: '10px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0a2472' }}>150+</div>
            <div style={{ color: '#5a6e8a' }}>Projects Delivered</div>
          </div>
          <div style={{ textAlign: 'center', padding: '20px', background: '#f8fafc', borderRadius: '10px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0a2472' }}>24/7</div>
            <div style={{ color: '#5a6e8a' }}>Support Available</div>
          </div>
          <div style={{ textAlign: 'center', padding: '20px', background: '#f8fafc', borderRadius: '10px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0a2472' }}>50+</div>
            <div style={{ color: '#5a6e8a' }}>Expert Engineers</div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: 'center', marginTop: '20px', padding: '50px', background: 'linear-gradient(135deg, #00072d 0%, #0a2472 100%)', borderRadius: '15px' }}>
          <h3 style={{ color: 'white', marginBottom: '15px' }}>Ready to transform your business?</h3>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '25px' }}>Let's discuss how our {solution.title} can help you achieve your goals.</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#5ea173', color: 'white', padding: '12px 30px', borderRadius: '50px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s' }}>Contact Our Experts →</Link>
            <Link to="/casestudies" style={{ background: 'transparent', border: '2px solid white', color: 'white', padding: '12px 30px', borderRadius: '50px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s' }}>View Case Studies →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;