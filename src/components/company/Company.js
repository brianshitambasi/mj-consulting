import React, { useState } from 'react';
import './Company.css';

const Company = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const teamMembers = [
    {
      id: 1,
      name: 'John Roberts',
      title: 'Founder & CEO',
      role: 'Chief Executive Officer',
      experience: '15+ years in business consulting and enterprise architecture',
      bio: 'John founded MJ & Roberts Consulting with a vision to help enterprises navigate the complex digital landscape. Previously, he led digital transformation initiatives at Fortune 500 companies, delivering over $500M in business value. He is a recognized thought leader in enterprise architecture and AI-driven business models.',
      expertise: ['Business Strategy', 'Digital Transformation', 'Enterprise Architecture', 'AI Strategy'],
      education: 'MBA, Stanford Graduate School of Business',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'john.roberts@mjroberts.com'
    },
    {
      id: 2,
      name: 'Mary Jane',
      title: 'Senior Consultant',
      role: 'Senior Partner & COO',
      experience: 'Expert in strategic planning, operations, and digital transformation',
      bio: 'Mary brings deep expertise in operational excellence and change management. She has led over 50 successful transformation programs across healthcare, finance, and manufacturing sectors. Her client-first approach and strategic vision have been instrumental in driving client success.',
      expertise: ['Strategic Planning', 'Operations', 'Change Management', 'Client Success'],
      education: 'MSc in Operations Research, MIT',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'mary.jane@mjroberts.com'
    },
    {
      id: 3,
      name: 'Michael Chen',
      title: 'CTO',
      role: 'Chief Technology Officer',
      experience: '20+ years in software engineering and cloud architecture',
      bio: 'Michael is a seasoned technology leader with expertise in cloud-native architectures, AI/ML implementation, and enterprise systems. He has architected solutions for global enterprises, managing infrastructure serving millions of users.',
      expertise: ['Cloud Architecture', 'AI/ML', 'DevOps', 'Enterprise Systems'],
      education: 'PhD in Computer Science, UC Berkeley',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'michael.chen@mjroberts.com'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      title: 'Head of Delivery',
      role: 'VP of Client Delivery',
      experience: '18+ years in project management and client relations',
      bio: 'Sarah ensures flawless execution of all client engagements. Her expertise in agile methodologies and cross-functional team leadership has resulted in 95% client satisfaction and 90% repeat business rate.',
      expertise: ['Agile Methodologies', 'Project Management', 'Client Relations', 'Quality Assurance'],
      education: 'PMP, Six Sigma Black Belt',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'sarah.williams@mjroberts.com'
    }
  ];

  const coreValues = [
    { title: 'Platform Neutrality', description: 'Expert Inter-Cloud Orchestration ensures your stack is dictated by business logic, not vendor lock-in.', icon: 'Ì¥ó' },
    { title: 'Agentic Pioneers', description: 'We move beyond passive automation to Agentic AI, building autonomous systems that execute end-to-end business workflows.', icon: 'Ì¥ñ' },
    { title: 'Fiscal Sovereignty', description: 'We treat cloud spend as an engineering metric, applying rigorous FinOps to ensure every cent drives measurable ROI.', icon: 'Ì≤∞' },
    { title: 'Engineering Excellence', description: 'We pride ourselves on delivering high-quality, scalable, and maintainable solutions that stand the test of time.', icon: '‚ö°' },
    { title: 'Client-Centric Approach', description: 'Your success is our success. We partner with you to achieve your business goals, not just deliver technology.', icon: 'Ì¥ù' },
    { title: 'Continuous Innovation', description: 'We constantly explore emerging technologies to bring cutting-edge solutions to our clients.', icon: 'Ì≤°' }
  ];

  const milestones = [
    { year: '1998', title: 'Company Founded', description: 'MJ & Roberts Consulting established with a vision to bridge the innovation-infrastructure gap.' },
    { year: '2005', title: 'Global Expansion', description: 'Opened offices in Europe and Asia-Pacific, serving clients across 15 countries.' },
    { year: '2012', title: 'Cloud Practice Launch', description: 'Established dedicated cloud consulting practice, becoming AWS Select Partner.' },
    { year: '2015', title: 'AI Innovation Center', description: 'Launched AI/ML practice and innovation lab for emerging technologies.' },
    { year: '2018', title: 'Salesforce Platinum Partner', description: 'Achieved highest partnership tier with Salesforce.' },
    { year: '2022', title: '1,500+ Projects Completed', description: 'Surpassed 1,500 successful client engagements worldwide.' },
    { year: '2024', title: '3,000+ Experts', description: 'Global team of 3,000+ technology professionals.' }
  ];

  const certifications = [
    { name: 'AWS Select Consulting Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png' },
    { name: 'Salesforce Platinum Partner', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Salesforce_logo.svg/200px-Salesforce_logo.svg.png' },
    { name: 'Microsoft Gold Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/200px-Microsoft_Azure.svg.png' },
    { name: 'Atlassian Gold Solution Partner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Atlassian_logo.svg/200px-Atlassian_logo.svg.png' },
    { name: 'ISO 27001 Certified', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/ISO_27001_2013_Logo.svg/200px-ISO_27001_2013_Logo.svg.png' },
    { name: 'ISO 9001 Certified', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/ISO_9001-2015_Logo.svg/200px-ISO_9001-2015_Logo.svg.png' }
  ];

  return (
    <div className="company-page">
      <div className="container">
        <h1>Company</h1>
        
        {/* Tabs Navigation */}
        <div className="company-tabs">
          <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
            Overview
          </button>
          <button className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`} onClick={() => setActiveTab('team')}>
            Leadership Team
          </button>
          <button className={`tab-btn ${activeTab === 'values' ? 'active' : ''}`} onClick={() => setActiveTab('values')}>
            Values & Culture
          </button>
          <button className={`tab-btn ${activeTab === 'milestones' ? 'active' : ''}`} onClick={() => setActiveTab('milestones')}>
            Milestones
          </button>
          <button className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`} onClick={() => setActiveTab('certifications')}>
            Certifications
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <section className="overview-section">
              <div className="overview-hero">
                <h2>Engineering Resilience into the Global Enterprise</h2>
                <p className="overview-subtitle">The Genesis of MJ&Roberts</p>
              </div>
              <div className="overview-content">
                <p>MJ&Roberts was founded to bridge the Innovation-Infrastructure Gap. As global entities rushed toward cloud and AI, they inadvertently created "Brittle Ecosystems"‚Äîfragmented data, unmanaged technical debt, and misaligned multi-cloud environments. We provide the architectural discipline required to transform these liabilities into high-velocity assets.</p>
                
                <div className="stats-showcase">
                  <div className="stat-item">
                    <div className="stat-number">25+</div>
                    <div className="stat-label">Years of Excellence</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">1,530+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">3,000+</div>
                    <div className="stat-label">Experts Worldwide</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">800+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">40+</div>
                    <div className="stat-label">Countries Served</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">99%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>

                <div className="approach-section">
                  <h3>Our Approach</h3>
                  <p>We act as the Strategic Guardrail for the autonomous era. We don't just deploy tools; we orchestrate Converged Environments. Our value lies in our ability to harmonize disparate technologies‚ÄîSalesforce, AWS, Oracle, and Google Cloud‚Äîinto a singular, elastic infrastructure. We close the gap between "Digital Transformation" (the promise) and "Operational Reality."</p>
                </div>

                <div className="differentiators">
                  <h3>What Makes Us Different</h3>
                  <div className="diff-grid">
                    <div className="diff-item">
                      <div className="diff-icon">ÌæØ</div>
                      <h4>Scale</h4>
                      <p>Multi-thousand expert pool with diverse technological and domain backgrounds, available on demand for full-cycle implementation.</p>
                    </div>
                    <div className="diff-item">
                      <div className="diff-icon">Ì≥ö</div>
                      <h4>Expertise</h4>
                      <p>25+ years of market experience with 1,530+ projects completed, gaining comprehensive technical and industry-specific knowledge.</p>
                    </div>
                    <div className="diff-item">
                      <div className="diff-icon">Ì±ÅÔ∏è</div>
                      <h4>Transparency</h4>
                      <p>Certified project managers, regular reporting, demos, and client access to test stands and project tracking tools.</p>
                    </div>
                    <div className="diff-item">
                      <div className="diff-icon">Ì¥Ñ</div>
                      <h4>Flexibility</h4>
                      <p>Adjustable engagement scenarios and partnership schemes with optimal pricing models based on your requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="tab-content">
            <section className="team-section">
              <h2>Our Leadership Team</h2>
              <p className="team-subtitle">Meet the experts driving innovation and client success</p>
              
              <div className="team-grid">
                {teamMembers.map(member => (
                  <div key={member.id} className="team-card">
                    <div className="team-image">
                      <img src={member.image} alt={member.name} />
                      <div className="team-social">
                        <a href={member.linkedin} className="social-link">in</a>
                        <a href={member.twitter} className="social-link">Ì∞¶</a>
                        <a href={`mailto:${member.email}`} className="social-link">Ì≥ß</a>
                      </div>
                    </div>
                    <div className="team-info">
                      <h3>{member.name}</h3>
                      <p className="team-role">{member.title}</p>
                      <p className="team-bio">{member.bio}</p>
                      <div className="team-expertise">
                        {member.expertise.map(skill => (
                          <span key={skill} className="expertise-tag">{skill}</span>
                        ))}
                      </div>
                      <div className="team-education">
                        <span className="education-icon">Ìæì</span>
                        <span>{member.education}</span>
                      </div>
                      <a href="/contact" className="connect-btn">Connect with {member.name.split(' ')[0]} ‚Üí</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Values Tab */}
        {activeTab === 'values' && (
          <div className="tab-content">
            <section className="values-section">
              <h2>Our Core Values</h2>
              <p className="values-subtitle">The principles that guide everything we do</p>
              
              <div className="values-grid">
                {coreValues.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>

              <div className="culture-section">
                <h3>Our Culture</h3>
                <p>We believe that people who feel connected and fulfilled deliver truly great service. Our commitment to employees results in commitment to customers. We foster an environment of continuous learning, innovation, and collaboration.</p>
                
                <div className="culture-pillars">
                  <div className="pillar">
                    <div className="pillar-icon">Ì≤™</div>
                    <h4>Commitment</h4>
                    <p>We empower and motivate our people to deliver exceptional results.</p>
                  </div>
                  <div className="pillar">
                    <div className="pillar-icon">‚≠ê</div>
                    <h4>Excellence</h4>
                    <p>We strive for the highest quality in communication, decisions, and service.</p>
                  </div>
                  <div className="pillar">
                    <div className="pillar-icon">Ì¥•</div>
                    <h4>Passion</h4>
                    <p>Passionate people drive innovation and accountability.</p>
                  </div>
                  <div className="pillar">
                    <div className="pillar-icon">Ì¥ç</div>
                    <h4>Clarity</h4>
                    <p>We ensure transparency and honesty with our clients and people.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Milestones Tab */}
        {activeTab === 'milestones' && (
          <div className="tab-content">
            <section className="milestones-section">
              <h2>Our Journey</h2>
              <p className="milestones-subtitle">25+ years of excellence and innovation</p>
              
              <div className="timeline">
                {milestones.map((milestone, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-year">{milestone.year}</div>
                    <div className="timeline-content">
                      <h4>{milestone.title}</h4>
                      <p>{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="tab-content">
            <section className="certifications-section">
              <h2>Certifications & Partnerships</h2>
              <p className="certifications-subtitle">Recognized excellence in technology delivery</p>
              
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-card">
                    <div className="cert-logo">
                      <img src={cert.logo} alt={cert.name} />
                    </div>
                    <p className="cert-name">{cert.name}</p>
                  </div>
                ))}
              </div>

              <div className="recognition-section">
                <h3>Industry Recognition</h3>
                <div className="recognition-badges">
                  <div className="recognition-badge">
                    <div className="badge-title">Gartner</div>
                    <div className="badge-desc">10 best Pure-Play Testing Service Providers</div>
                  </div>
                  <div className="recognition-badge">
                    <div className="badge-title">Everest Group</div>
                    <div className="badge-desc">From insight to action</div>
                  </div>
                  <div className="recognition-badge">
                    <div className="badge-title">Inc. 5000</div>
                    <div className="badge-desc">America's Fastest-Growing Companies</div>
                  </div>
                  <div className="recognition-badge">
                    <div className="badge-title">Software 500</div>
                    <div className="badge-desc">World's Largest Software Companies</div>
                  </div>
                  <div className="recognition-badge">
                    <div className="badge-title">Forrester</div>
                    <div className="badge-desc">Wave Leader Recognition</div>
                  </div>
                  <div className="recognition-badge">
                    <div className="badge-title">Zinnov Zones</div>
                    <div className="badge-desc">Global Service Provider</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Company;
