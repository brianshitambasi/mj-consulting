import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Circuit board SVG overlay */}
        <div className="circuit-overlay">
          <svg className="circuit-svg" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            {/* Left circuit lines */}
            <g stroke="rgba(0,180,255,0.35)" strokeWidth="1" fill="none">
              <polyline points="0,180 80,180 120,140 200,140 240,180 320,180"/>
              <polyline points="0,280 60,280 100,240 180,240"/>
              <polyline points="0,380 40,380 80,340 160,340 200,380 280,380 320,340"/>
              <polyline points="0,460 100,460 140,420 220,420"/>
              <polyline points="40,180 40,280"/>
              <polyline points="120,140 120,80 200,80"/>
              <polyline points="200,140 200,80"/>
              <polyline points="80,280 80,380"/>
              <polyline points="160,240 160,340"/>
              <polyline points="100,460 100,380"/>
              <polyline points="220,420 220,340"/>
            </g>
            {/* Left circuit dots */}
            <g fill="rgba(0,200,255,0.7)">
              <circle cx="80" cy="180" r="3"/>
              <circle cx="120" cy="140" r="3"/>
              <circle cx="200" cy="140" r="3"/>
              <circle cx="240" cy="180" r="3"/>
              <circle cx="60" cy="280" r="3"/>
              <circle cx="100" cy="240" r="3"/>
              <circle cx="160" cy="340" r="3"/>
              <circle cx="200" cy="380" r="3"/>
              <circle cx="100" cy="460" r="3"/>
              <circle cx="140" cy="420" r="3"/>
              <circle cx="120" cy="80" r="3"/>
            </g>
            {/* Left glow nodes */}
            <g>
              <circle cx="40" cy="280" r="6" fill="none" stroke="rgba(0,200,255,0.5)" strokeWidth="1.5"/>
              <circle cx="40" cy="280" r="3" fill="rgba(0,220,255,0.9)"/>
              <circle cx="40" cy="280" r="10" fill="rgba(0,200,255,0.08)"/>

              <circle cx="280" cy="380" r="6" fill="none" stroke="rgba(0,200,255,0.5)" strokeWidth="1.5"/>
              <circle cx="280" cy="380" r="3" fill="rgba(0,220,255,0.9)"/>
              <circle cx="280" cy="380" r="10" fill="rgba(0,200,255,0.08)"/>
            </g>

            {/* Right circuit lines */}
            <g stroke="rgba(0,180,255,0.35)" strokeWidth="1" fill="none">
              <polyline points="1440,160 1360,160 1320,120 1240,120 1200,160 1120,160"/>
              <polyline points="1440,300 1380,300 1340,260 1260,260"/>
              <polyline points="1440,420 1400,420 1360,380 1280,380 1240,420 1160,420"/>
              <polyline points="1360,160 1360,300"/>
              <polyline points="1320,120 1320,60 1240,60"/>
              <polyline points="1240,120 1240,60"/>
              <polyline points="1380,300 1380,380"/>
              <polyline points="1260,260 1260,380"/>
              <polyline points="1400,420 1400,480 1320,480"/>
            </g>
            {/* Right circuit dots */}
            <g fill="rgba(0,200,255,0.7)">
              <circle cx="1360" cy="160" r="3"/>
              <circle cx="1320" cy="120" r="3"/>
              <circle cx="1240" cy="120" r="3"/>
              <circle cx="1200" cy="160" r="3"/>
              <circle cx="1380" cy="300" r="3"/>
              <circle cx="1340" cy="260" r="3"/>
              <circle cx="1260" cy="260" r="3"/>
              <circle cx="1280" cy="380" r="3"/>
              <circle cx="1240" cy="420" r="3"/>
              <circle cx="1320" cy="60" r="3"/>
              <circle cx="1320" cy="480" r="3"/>
            </g>
            {/* Right glow nodes */}
            <g>
              <circle cx="1400" cy="420" r="6" fill="none" stroke="rgba(0,200,255,0.5)" strokeWidth="1.5"/>
              <circle cx="1400" cy="420" r="3" fill="rgba(0,220,255,0.9)"/>
              <circle cx="1400" cy="420" r="10" fill="rgba(0,200,255,0.08)"/>

              <circle cx="1160" cy="420" r="6" fill="none" stroke="rgba(0,200,255,0.5)" strokeWidth="1.5"/>
              <circle cx="1160" cy="420" r="3" fill="rgba(0,220,255,0.9)"/>
              <circle cx="1160" cy="420" r="10" fill="rgba(0,200,255,0.08)"/>

              <circle cx="1120" cy="160" r="8" fill="none" stroke="rgba(0,200,255,0.6)" strokeWidth="1.5"/>
              <circle cx="1120" cy="160" r="4" fill="rgba(100,220,255,1)"/>
              <circle cx="1120" cy="160" r="16" fill="rgba(0,200,255,0.1)"/>
              <circle cx="1120" cy="160" r="28" fill="rgba(0,200,255,0.04)"/>
            </g>

            {/* Scattered particles */}
            <g fill="rgba(150,230,255,0.7)">
              <circle cx="350" cy="80" r="2"/>
              <circle cx="480" cy="520" r="2"/>
              <circle cx="600" cy="50" r="1.5"/>
              <circle cx="900" cy="560" r="2"/>
              <circle cx="1050" cy="40" r="1.5"/>
              <circle cx="800" cy="30" r="2"/>
              <circle cx="700" cy="570" r="1.5"/>
              <circle cx="400" cy="490" r="2"/>
              <circle cx="1100" cy="520" r="2"/>
              <circle cx="550" cy="120" r="1.5"/>
              <circle cx="1000" cy="480" r="2"/>
              <circle cx="200" cy="520" r="1.5"/>
              <circle cx="1250" cy="540" r="2"/>
            </g>
          </svg>
        </div>

        {/* Radial glows */}
        <div className="glow-left"></div>
        <div className="glow-right"></div>
        <div className="glow-center"></div>

        <div className="container">
          <div className="hero-content">
            <h1 className="main-headline">
              <span className="headline-mj">MJ</span>
              <span className="headline-dollar">$</span>
              <span className="headline-roberts">ROBERTS</span>
            </h1>
            <p className="hero-subtitle">Engineering Resilience into the Global Enterprise.</p>

            <div className="service-icons-row">
              <div className="service-icon-item">
                <div className="svc-badge salesforce-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 2C8.6 2 7 3.3 6.5 5.1C5.9 4.7 5.2 4.5 4.5 4.5C2.6 4.5 1 6.1 1 8C1 8.8 1.3 9.6 1.8 10.2C1.3 10.7 1 11.4 1 12.2C1 13.9 2.4 15.2 4 15.2C4.2 15.2 4.4 15.2 4.6 15.1C5 16.6 6.4 17.7 8 17.7C8.5 17.7 8.9 17.6 9.3 17.4C9.8 18.4 10.9 19 12.1 19C13.4 19 14.5 18.3 15 17.2C15.4 17.4 15.9 17.5 16.4 17.5C18.4 17.5 20 15.9 20 13.9C20 13.5 19.9 13.1 19.8 12.8C21.1 12.2 22 10.9 22 9.4C22 7.2 20.2 5.5 18 5.5C17.7 5.5 17.4 5.5 17.1 5.6C16.5 3.6 14.7 2.2 12.5 2.2C11.8 2 11.1 2 10.5 2Z"/>
                  </svg>
                  salesforce
                </div>
              </div>
              <div className="service-icon-item">
                <div className="svc-badge aws-badge">
                  <svg width="20" height="12" viewBox="0 0 50 30" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="22" fontSize="22" fontWeight="bold" fill="white">aws</text>
                    <path d="M8,26 Q25,34 42,26" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    <polygon points="40,23 44,26 40,29" fill="#FF9900"/>
                  </svg>
                </div>
              </div>
              <div className="service-icon-item">
                <div className="svc-badge cloud-badge">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 7.5C19.5 7.5 19.2 7.5 19 7.5C18.8 5.1 16.7 3.2 14.2 3.2C12.5 3.2 11 4.1 10.1 5.4C9.6 5.1 9 5 8.4 5C6.5 5 5 6.5 5 8.4C5 8.5 5 8.7 5 8.8C3.8 9.3 3 10.5 3 11.9C3 13.8 4.6 15.3 6.5 15.3H19.5C21.4 15.3 23 13.7 23 11.8C23 9.9 21.4 7.5 19.5 7.5Z" fill="white" opacity="0.9"/>
                  </svg>
                </div>
              </div>
              <div className="service-icon-item">
                <div className="svc-badge ai-badge">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="16" height="16" rx="3" stroke="white" strokeWidth="1.5"/>
                    <text x="5" y="14" fontSize="9" fontWeight="bold" fill="white">AI</text>
                    <line x1="0" y1="7" x2="2" y2="7" stroke="white" strokeWidth="1.5"/>
                    <line x1="18" y1="7" x2="20" y2="7" stroke="white" strokeWidth="1.5"/>
                    <line x1="0" y1="13" x2="2" y2="13" stroke="white" strokeWidth="1.5"/>
                    <line x1="18" y1="13" x2="20" y2="13" stroke="white" strokeWidth="1.5"/>
                    <line x1="7" y1="0" x2="7" y2="2" stroke="white" strokeWidth="1.5"/>
                    <line x1="13" y1="0" x2="13" y2="2" stroke="white" strokeWidth="1.5"/>
                    <line x1="7" y1="18" x2="7" y2="20" stroke="white" strokeWidth="1.5"/>
                    <line x1="13" y1="18" x2="13" y2="20" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>

            <p className="service-labels">
              Salesforce Services &nbsp;|&nbsp; AWS Services &nbsp;|&nbsp; Cloud Services &nbsp;|&nbsp; AI Services
            </p>
          </div>
        </div>
      </section>

      {/* Genesis Section */}
      <section className="genesis-section">
        <div className="container">
          <h2>The Genesis of MJ&Roberts</h2>
          <p>MJ&Roberts was founded to bridge the Innovation-Infrastructure Gap. As global entities rushed toward cloud and AI, they inadvertently created "Brittle Ecosystems"—fragmented data, unmanaged technical debt, and misaligned multi-cloud environments. We provide the architectural discipline required to transform these liabilities into high-velocity assets.</p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section">
        <div className="container">
          <h2>The Value We Provide</h2>
          <p>We act as the Strategic Guardrail for the autonomous era. We don't just deploy tools; we orchestrate Converged Environments. Our value lies in our ability to harmonize disparate technologies—Salesforce, AWS, Oracle, and Google Cloud—into a singular, elastic infrastructure. We close the gap between "Digital Transformation" (the promise) and "Operational Reality."</p>
        </div>
      </section>

      {/* Our DNA Section */}
      <section className="dna-section">
        <div className="container">
          <h2>Our DNA</h2>
          <div className="dna-grid">
            <div className="dna-card">
              <h3>Platform Neutrality</h3>
              <p>Expert Inter-Cloud Orchestration ensures your stack is dictated by business logic, not vendor lock-in.</p>
            </div>
            <div className="dna-card">
              <h3>Agentic Pioneers</h3>
              <p>We move beyond passive automation to Agentic AI, building autonomous systems that execute end-to-end business workflows.</p>
            </div>
            <div className="dna-card">
              <h3>Fiscal Sovereignty</h3>
              <p>We treat cloud spend as an engineering metric, applying rigorous FinOps to ensure every cent of OpEx drives measurable ROI.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;