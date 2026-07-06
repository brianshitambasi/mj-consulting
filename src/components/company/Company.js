import React, { useState } from 'react';
import './Company.css';

// Import founder images from assets
import founder1Image from '../../assets/images/h25.jpeg';
import founder2Image from '../../assets/images/h26.jpeg';

const Company = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Only two founders - using images from Contact page
  const teamMembers = [
    {
      id: 1,
      name: 'Mohamed Jeylani Sayed',
      title: 'Co-Founder & CEO',
      role: 'Chief Executive Officer',
      experience: '15+ years in enterprise technology and digital transformation',
      bio: 'Visionary leader driving MJ&Roberts\' mission to bridge the innovation-infrastructure gap. With deep expertise in enterprise technology and digital transformation, Mohamed leads the company\'s strategic direction and client partnerships. He has successfully delivered over $500M in business value across Fortune 500 companies and emerging enterprises.',
      expertise: ['Business Strategy', 'Digital Transformation', 'Enterprise Architecture', 'Leadership'],
      education: 'MBA, Stanford Graduate School of Business',
      image: founder1Image,
      linkedin: '#',
      twitter: '#',
      email: 'info@mjroberts.com'
    },
    {
      id: 2,
      name: 'Roberts Vildon Elisha',
      title: 'Co-Founder & CTO',
      role: 'Chief Technology Officer',
      experience: 'Expert in cloud architecture, AI systems, and scalable infrastructure',
      bio: 'Technology architect with deep expertise in cloud, AI, and resilient system design. Leads engineering teams to deliver scalable, secure solutions for global enterprises. Roberts has architected solutions serving millions of users across 40+ countries.',
      expertise: ['Cloud Architecture', 'AI/ML', 'Resilient Systems', 'DevOps'],
      education: 'PhD in Computer Science, UC Berkeley',
      image: founder2Image,
      linkedin: '#',
      twitter: '#',
      email: 'info@mjroberts.com'
    }
  ];

  const coreValues = [
    { title: 'Platform Neutrality', description: 'Expert Inter-Cloud Orchestration ensures your stack is dictated by business logic, not vendor lock-in. We help you avoid vendor lock-in while maximizing the benefits of each cloud provider.', icon: '🔗' },
    { title: 'Agentic Pioneers', description: 'We move beyond passive automation to Agentic AI, building autonomous systems that execute end-to-end business workflows. Our AI solutions are designed to learn, adapt, and improve over time.', icon: '🤖' },
    { title: 'Fiscal Sovereignty', description: 'We treat cloud spend as an engineering metric, applying rigorous FinOps to ensure every cent drives measurable ROI. Our financial governance framework ensures cost optimization without compromising performance.', icon: '💰' },
    { title: 'Engineering Excellence', description: 'We pride ourselves on delivering high-quality, scalable, and maintainable solutions that stand the test of time. Our engineering practices follow industry best standards.', icon: '⚡' },
    { title: 'Client-Centric Approach', description: 'Your success is our success. We partner with you to achieve your business goals, not just deliver technology. We measure our success by your outcomes.', icon: '🤝' },
    { title: 'Continuous Innovation', description: 'We constantly explore emerging technologies to bring cutting-edge solutions to our clients. Our innovation lab explores AI, blockchain, IoT, and other emerging technologies.', icon: '💡' }
  ];

  const milestones = [
    { year: '1998', title: 'Company Founded', description: 'MJ & Roberts Consulting established with a vision to bridge the innovation-infrastructure gap. Founded by industry veterans with a mission to transform enterprise technology.' },
    { year: '2000', title: 'First Major Client', description: 'Secured first Fortune 500 client, establishing credibility in the enterprise consulting space.' },
    { year: '2005', title: 'Global Expansion', description: 'Opened offices in Europe and Asia-Pacific, serving clients across 15 countries.' },
    { year: '2008', title: 'Cloud Practice Launch', description: 'Recognized the potential of cloud computing early and established dedicated practice.' },
    { year: '2010', title: 'AWS Partnership', description: 'Became an AWS Select Consulting Partner, offering world-class cloud solutions.' },
    { year: '2012', title: 'AI Innovation Center', description: 'Launched AI/ML practice and innovation lab for emerging technologies.' },
    { year: '2015', title: 'Salesforce Platinum Partner', description: 'Achieved highest partnership tier with Salesforce, delivering comprehensive CRM solutions.' },
    { year: '2018', title: '1,500+ Projects Completed', description: 'Surpassed 1,500 successful client engagements worldwide.' },
    { year: '2020', title: 'Digital Transformation Leader', description: 'Recognized as a leader in digital transformation services by industry analysts.' },
    { year: '2022', title: 'Global Team Expansion', description: 'Grew to 3,000+ technology professionals across 40+ countries.' },
    { year: '2024', title: 'Enterprise Excellence', description: 'Celebrated 25+ years of excellence in enterprise technology consulting.' }
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
                <p>MJ&Roberts was founded to bridge the Innovation-Infrastructure Gap. As global entities rushed toward cloud and AI, they inadvertently created "Brittle Ecosystems"—fragmented data, unmanaged technical debt, and misaligned multi-cloud environments. We provide the architectural discipline required to transform these liabilities into high-velocity assets.</p>
                
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
                  <p>We act as the Strategic Guardrail for the autonomous era. We don't just deploy tools; we orchestrate Converged Environments. Our value lies in our ability to harmonize disparate technologies—Salesforce, AWS, Oracle, and Google Cloud—into a singular, elastic infrastructure. We close the gap between "Digital Transformation" (the promise) and "Operational Reality."</p>
                </div>

                <div className="differentiators">
                  <h3>What Makes Us Different</h3>
                  <div className="diff-grid">
                    <div className="diff-item">
                      <div className="diff-icon">📊</div>
                      <h4>Scale</h4>
                      <p>Multi-thousand expert pool with diverse technological and domain backgrounds, available on demand for full-cycle implementation.</p>
                    </div>
                    <div className="diff-item">
                      <div className="diff-icon">📚</div>
                      <h4>Expertise</h4>
                      <p>25+ years of market experience with 1,530+ projects completed, gaining comprehensive technical and industry-specific knowledge.</p>
                    </div>
                    <div className="diff-item">
                      <div className="diff-icon">👁️</div>
                      <h4>Transparency</h4>
                      <p>Certified project managers, regular reporting, demos, and client access to test stands and project tracking tools.</p>
                    </div>
                    <div className="diff-item">
                      <div className="diff-icon">🔄</div>
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
              <p className="team-subtitle">Meet the founders driving innovation and client success</p>
              
              <div className="team-grid">
                {teamMembers.map(member => (
                  <div key={member.id} className="team-card">
                    <div className="team-image">
                      <img src={member.image} alt={member.name} />
                      <div className="team-social">
                        <a href={member.linkedin} className="social-link">in</a>
                        <a href={member.twitter} className="social-link">𝕏</a>
                        <a href={`mailto:${member.email}`} className="social-link">📧</a>
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
                        <span className="education-icon">🎓</span>
                        <span>{member.education}</span>
                      </div>
                      <a href="/contact" className="connect-btn">Connect with {member.name.split(' ')[0]} →</a>
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
                    <div className="pillar-icon">💪</div>
                    <h4>Commitment</h4>
                    <p>We empower and motivate our people to deliver exceptional results.</p>
                  </div>
                  <div className="pillar">
                    <div className="pillar-icon">⭐</div>
                    <h4>Excellence</h4>
                    <p>We strive for the highest quality in communication, decisions, and service.</p>
                  </div>
                  <div className="pillar">
                    <div className="pillar-icon">🔥</div>
                    <h4>Passion</h4>
                    <p>Passionate people drive innovation and accountability.</p>
                  </div>
                  <div className="pillar">
                    <div className="pillar-icon">🔍</div>
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