import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Home.css';

const Home = () => {
  const videoRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = [
    'Healthcare', 'Finance', 'Manufacturing', 'Retail',
    'Insurance', 'Software & hi-tech', 'Professional services',
    'Automotive', 'Media & entertainment', 'Logistics', 'Real estate', 'Telecom'
  ];

  const recognitions = [
    { name: 'Gartner', badge: '10 best Pure-Play Testing Service Providers' },
    { name: 'Everest Group', badge: 'From insight to action' },
    { name: 'Inc. 5000', badge: "America's Fastest-Growing Companies" },
    { name: 'Software 500', badge: "World's Largest Software Companies" },
    { name: 'Forrester', badge: 'Wave Leader Recognition' },
    { name: 'Zinnov Zones', badge: 'Global Service Provider' }
  ];

  const partners = [
    { name: 'AWS', color: '#FF9900' },
    { name: 'Microsoft', color: '#00A4EF' },
    { name: 'Salesforce', color: '#00A1E0' },
    { name: 'Atlassian', color: '#0052CC' },
    { name: 'SAP', color: '#1573E6' },
    { name: 'Odoo', color: '#714B67' },
    { name: 'Google Cloud', color: '#4285F4' },
    { name: 'Power BI', color: '#F2C811' }
  ];

  const values = [
    { title: 'Commitment', icon: '💪', desc: 'We empower and motivate our people to deliver exceptional results.' },
    { title: 'Excellence', icon: '⭐', desc: 'We strive for the highest quality in communication, decisions, and service.' },
    { title: 'Passion', icon: '🔥', desc: 'Passionate people drive innovation and accountability.' },
    { title: 'Clarity', icon: '🎯', desc: 'We ensure transparency and honesty with our clients and people.' },
    { title: 'Innovation', icon: '💡', desc: 'We constantly explore emerging technologies to bring cutting-edge solutions.' }
  ];

  const carouselSlides = [
    {
      id: 1,
      tag: 'Salesforce Services',
      title: 'Digital Transformation\nExcellence',
      subtitle: 'Helping businesses thrive in the digital era with world-class Salesforce implementations',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=900&fit=crop',
      cta: 'Explore Services',
      link: '/services'
    },
    {
      id: 2,
      tag: 'AWS Services',
      title: 'Cloud Innovation\nat Scale',
      subtitle: 'Scale your business with cutting-edge AWS cloud infrastructure and managed services',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=900&fit=crop',
      cta: 'Learn More',
      link: '/solutions'
    },
    {
      id: 3,
      tag: 'AI Services',
      title: 'AI-Powered\nFuture',
      subtitle: 'Leverage artificial intelligence and agentic workflows for competitive advantage',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=900&fit=crop',
      cta: 'Discover AI',
      link: '/technologies'
    },
    {
      id: 4,
      tag: 'Cloud Services',
      title: 'Enterprise\nSolutions',
      subtitle: 'Custom converged environments tailored to your unique business architecture',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=900&fit=crop',
      cta: 'View Case Studies',
      link: '/casestudies'
    },
    {
      id: 5,
      tag: 'Global Reach',
      title: 'Serving\n40+ Countries',
      subtitle: 'A global network of experts delivering resilient digital infrastructure worldwide',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339d76a?w=1920&h=900&fit=crop',
      cta: 'Contact Us',
      link: '/contact'
    }
  ];

  const testimonials = [
    {
      quote: "Their knowledge and expertise were a huge advantage. They took the time to truly listen to our requirements and make suggestions to ensure we were delivered a high-quality, user-friendly application.",
      author: "Joanne Jacks",
      title: "Office Manager, ECCI",
      initials: "JJ",
      color: "#0066cc"
    },
    {
      quote: "MJ & Roberts' specialists acted as highly skilled consultants, engineers, and trainers throughout all project stages. They introduced best practices and gave recommendations crucial for success.",
      author: "Michael Chen",
      title: "CTO, TechGlobal Solutions",
      initials: "MC",
      color: "#0891b2"
    },
    {
      quote: "The digital transformation has revolutionized our operations. We now have complete visibility from raw materials to customer delivery, and predictive analytics have dramatically improved our forecasting.",
      author: "Sarah Johnson",
      title: "COO, FreshFoods International",
      initials: "SJ",
      color: "#7c3aed"
    },
    {
      quote: "This platform transformed how we manage network deployments. We've cut project timelines in half and our clients love the transparency into project progress.",
      author: "David Martinez",
      title: "CEO, TechGlobal Solutions",
      initials: "DM",
      color: "#059669"
    }
  ];

  return (
    <div className="home">

      {/* ═══════════════════════════════════════════
          SECTION 1 — VIDEO HERO
      ═══════════════════════════════════════════ */}
      <section className="video-hero">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          {/* Use your uploaded video — place hero-bg.mp4 in /public */}
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="/hero-bg-2.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="video-overlay-gradient" />
        <div className="video-overlay-circuit">
          <svg className="circuit-svg" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(0,180,255,0.28)" strokeWidth="1" fill="none">
              <polyline points="0,200 80,200 120,160 200,160 240,200 340,200"/>
              <polyline points="0,320 60,320 100,280 190,280"/>
              <polyline points="0,440 50,440 90,400 170,400 210,440 310,440 350,400"/>
              <polyline points="40,200 40,320"/><polyline points="120,160 120,90 210,90"/>
              <polyline points="80,320 80,440"/><polyline points="170,280 170,400"/>
              <polyline points="1440,180 1360,180 1320,140 1240,140 1200,180 1100,180"/>
              <polyline points="1440,320 1380,320 1340,280 1250,280"/>
              <polyline points="1440,460 1400,460 1360,420 1280,420 1240,460 1150,460"/>
              <polyline points="1360,180 1360,320"/><polyline points="1320,140 1320,70 1230,70"/>
              <polyline points="1380,320 1380,420"/><polyline points="1250,280 1250,420"/>
            </g>
            <g fill="rgba(0,210,255,0.65)">
              <circle cx="80" cy="200" r="2.5"/><circle cx="120" cy="160" r="2.5"/>
              <circle cx="200" cy="160" r="2.5"/><circle cx="240" cy="200" r="2.5"/>
              <circle cx="60" cy="320" r="2.5"/><circle cx="100" cy="280" r="2.5"/>
              <circle cx="170" cy="400" r="2.5"/><circle cx="210" cy="440" r="2.5"/>
              <circle cx="1360" cy="180" r="2.5"/><circle cx="1320" cy="140" r="2.5"/>
              <circle cx="1240" cy="140" r="2.5"/><circle cx="1200" cy="180" r="2.5"/>
              <circle cx="1380" cy="320" r="2.5"/><circle cx="1340" cy="280" r="2.5"/>
              <circle cx="1250" cy="280" r="2.5"/><circle cx="1280" cy="420" r="2.5"/>
            </g>
            <g>
              <circle cx="40" cy="320" r="6" fill="none" stroke="rgba(0,200,255,0.5)" strokeWidth="1.5"/>
              <circle cx="40" cy="320" r="3" fill="rgba(0,220,255,0.9)"/>
              <circle cx="40" cy="320" r="14" fill="rgba(0,200,255,0.07)"/>
              <circle cx="1100" cy="180" r="8" fill="none" stroke="rgba(0,200,255,0.6)" strokeWidth="1.5"/>
              <circle cx="1100" cy="180" r="4" fill="rgba(100,230,255,1)"/>
              <circle cx="1100" cy="180" r="20" fill="rgba(0,200,255,0.09)"/>
              <circle cx="1100" cy="180" r="34" fill="rgba(0,200,255,0.04)"/>
              <circle cx="310" cy="440" r="6" fill="none" stroke="rgba(0,200,255,0.5)" strokeWidth="1.5"/>
              <circle cx="310" cy="440" r="3" fill="rgba(0,220,255,0.9)"/>
              <circle cx="1150" cy="460" r="6" fill="none" stroke="rgba(0,200,255,0.5)" strokeWidth="1.5"/>
              <circle cx="1150" cy="460" r="3" fill="rgba(0,220,255,0.9)"/>
            </g>
            <g fill="rgba(150,220,255,0.55)">
              <circle cx="380" cy="90" r="1.5"/><circle cx="520" cy="560" r="1.5"/>
              <circle cx="620" cy="55" r="1.5"/><circle cx="870" cy="590" r="1.5"/>
              <circle cx="1060" cy="50" r="1.5"/><circle cx="760" cy="30" r="1.5"/>
              <circle cx="680" cy="610" r="1.5"/><circle cx="440" cy="510" r="1.5"/>
              <circle cx="990" cy="520" r="1.5"/><circle cx="560" cy="130" r="1.5"/>
            </g>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="video-hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Enterprise Technology Partner
          </div>

          <h1 className="video-hero-title">
            <span className="title-mj">MJ</span><span className="title-dollar">$</span><span className="title-roberts">ROBERTS</span>
          </h1>

          <p className="video-hero-tagline">Engineering Resilience into the Global Enterprise.</p>

          <div className="hero-service-pills">
            <span className="hero-pill pill-sf">
              <svg width="14" height="14" viewBox="0 0 24 18" fill="white"><path d="M10,1C7.8,1,5.9,2.4,5.1,4.4C4.5,4,3.8,3.8,3,3.8C1.3,3.8,0,5.1,0,6.8c0,0.6,0.2,1.2,0.5,1.7C0.2,8.9,0,9.5,0,10.2c0,1.6,1.3,2.8,2.9,2.8c0.2,0,0.4,0,0.6-0.1C3.9,14.3,5.2,15.2,6.7,15.2c0.5,0,0.9-0.1,1.3-0.3c0.5,0.8,1.4,1.4,2.5,1.4c1.2,0,2.2-0.7,2.7-1.7c0.3,0.1,0.7,0.2,1.1,0.2c1.8,0,3.2-1.4,3.2-3.2c0-0.4-0.1-0.8-0.2-1.1c1.1-0.5,1.9-1.7,1.9-3c0-1.9-1.5-3.4-3.4-3.4c-0.3,0-0.5,0-0.8,0.1C14.4,2.4,12.4,1,10,1z" fill="white"/></svg>
              salesforce
            </span>
            <span className="hero-pill pill-aws">aws</span>
            <span className="hero-pill pill-cloud">☁ Cloud</span>
            <span className="hero-pill pill-ai">⬡ AI</span>
          </div>

          <p className="hero-service-bar">
            Salesforce Services &nbsp;·&nbsp; AWS Services &nbsp;·&nbsp; Cloud Services &nbsp;·&nbsp; AI Services
          </p>

          <div className="hero-cta-row">
            <a href="/contact" className="hero-cta-primary">Get Started →</a>
            <a href="/solutions" className="hero-cta-ghost">Explore Solutions</a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>scroll</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — FEATURED CAROUSEL
      ═══════════════════════════════════════════ */}
      <section className="carousel-section">
        <div className="carousel-header">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="carousel-heading">Our Core Services</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          loop={true}
          className="hero-swiper"
        >
          {carouselSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="carousel-slide"
                style={{ backgroundImage: `linear-gradient(120deg, rgba(0,7,45,0.92) 0%, rgba(4,28,90,0.80) 50%, rgba(10,40,120,0.65) 100%), url(${slide.image})` }}
              >
                <div className="carousel-inner">
                  <span className="slide-tag">{slide.tag}</span>
                  <h2 className="slide-title">{slide.title.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</h2>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                  <a href={slide.link} className="slide-cta">{slide.cta} →</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — STATS BANNER
      ═══════════════════════════════════════════ */}
      <section className="stats-banner">
        <div className="stats-inner">
          {[
            { n: '25+', label: 'Years of Experience' },
            { n: '800+', label: 'Global Clients' },
            { n: '1,530+', label: 'Projects Completed' },
            { n: '40+', label: 'Countries Served' },
            { n: '3,000+', label: 'Experts Worldwide' },
          ].map(s => (
            <div key={s.label} className="stat-pill">
              <span className="stat-n">{s.n}</span>
              <span className="stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — MISSION
      ═══════════════════════════════════════════ */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-left">
              <span className="section-eyebrow">Our Mission</span>
              <h2>We believe the<br/>future is digital.</h2>
            </div>
            <div className="mission-right">
              <p className="mission-body">We help businesses unveil and satisfy demand for digital transformation by providing engineering and consulting services that foster competitiveness and innovation.</p>
              <blockquote className="mission-quote">
                "Without embracing new technology, businesses postpone their growth."
                <cite>— John Roberts, CEO, MJ & Roberts Consulting</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — INDUSTRIES
      ═══════════════════════════════════════════ */}
      <section className="industries-section">
        <div className="container">
          <span className="section-eyebrow">Industries & Verticals</span>
          <h2>Serving Every Sector</h2>
          <p className="section-lead">Since 1998, MJ & Roberts Consulting has served over 800 clients from dozens of business verticals — SMBs, enterprises, and startups that rely on us as their trusted technology partner.</p>
          <div className="industries-grid">
            {industries.map(industry => (
              <div key={industry} className="industry-card">
                <div className="industry-dot" />
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="testimonials-section">
        <div className="container">
          <span className="section-eyebrow light">Client Voices</span>
          <h2 className="light-heading">What Our Customers Say</h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="testimonials-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-text">"{t.quote}"</p>
                  <div className="testimonial-footer">
                    <div className="testimonial-avatar" style={{ background: t.color }}>{t.initials}</div>
                    <div>
                      <p className="testimonial-author">{t.author}</p>
                      <p className="testimonial-role">{t.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — DNA
      ═══════════════════════════════════════════ */}
      <section className="dna-section">
        <div className="container">
          <span className="section-eyebrow">What Sets Us Apart</span>
          <h2>Our DNA</h2>
          <div className="dna-grid">
            {[
              { icon: '⚡', title: 'Platform Neutrality', desc: 'Expert Inter-Cloud Orchestration ensures your stack is dictated by business logic, not vendor lock-in.' },
              { icon: '🤖', title: 'Agentic Pioneers', desc: 'We move beyond passive automation to Agentic AI, building autonomous systems that execute end-to-end business workflows.' },
              { icon: '💰', title: 'Fiscal Sovereignty', desc: 'We treat cloud spend as an engineering metric, applying rigorous FinOps to ensure every cent of OpEx drives measurable ROI.' },
            ].map(d => (
              <div key={d.title} className="dna-card">
                <div className="dna-icon">{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — RECOGNITIONS
      ═══════════════════════════════════════════ */}
      <section className="recognition-section">
        <div className="container">
          <span className="section-eyebrow">Awards & Recognition</span>
          <h2>Industry Acknowledged</h2>
          <p className="section-lead">Throughout its 25+ year history, MJ & Roberts Consulting has been acknowledged for its unceasing dedication to perfecting technology delivery.</p>
          <div className="recognition-grid">
            {recognitions.map(rec => (
              <div key={rec.name} className="recognition-card">
                <div className="rec-badge">{rec.name[0]}</div>
                <h3>{rec.name}</h3>
                <p>{rec.badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9 — PARTNERS
      ═══════════════════════════════════════════ */}
      <section className="partners-section">
        <div className="container">
          <span className="section-eyebrow">Technology Partners</span>
          <h2>Powered by Leading Platforms</h2>
          <div className="partners-grid">
            {partners.map(p => (
              <div key={p.name} className="partner-card">
                <div className="partner-dot" style={{ background: p.color }} />
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10 — VALUES
      ═══════════════════════════════════════════ */}
      <section className="values-section">
        <div className="container">
          <span className="section-eyebrow">Who We Are</span>
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} className="value-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 11 — DIFFERENTIATORS
      ═══════════════════════════════════════════ */}
      <section className="diff-section">
        <div className="container">
          <span className="section-eyebrow light">Why Choose Us</span>
          <h2 className="light-heading">Our Differentiators</h2>
          <div className="diff-grid">
            {[
              { n: '01', title: 'Scale', desc: 'Multi-thousand expert pool with diverse technological and domain backgrounds, available on demand for full-cycle implementation.' },
              { n: '02', title: 'Expertise', desc: '25+ years of market experience with 1,530+ projects completed, gaining comprehensive technical and industry-specific knowledge.' },
              { n: '03', title: 'Transparency', desc: 'Certified project managers, regular reporting, demos, and client access to test stands and project tracking tools.' },
              { n: '04', title: 'Flexibility', desc: 'Adjustable engagement scenarios and partnership schemes with optimal pricing models based on your requirements.' },
            ].map(d => (
              <div key={d.title} className="diff-card">
                <span className="diff-number">{d.n}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 12 — CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="cta-banner">
        <div className="cta-bg-circuit">
          <svg viewBox="0 0 1440 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
            <g stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none">
              <polyline points="0,80 120,80 160,120 280,120"/>
              <polyline points="0,160 100,160 140,200 240,200 280,160 400,160"/>
              <polyline points="1440,100 1320,100 1280,140 1160,140"/>
              <polyline points="1440,200 1340,200 1300,160 1180,160 1140,200 1040,200"/>
            </g>
          </svg>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our solutions can help you achieve your goals.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-primary">Get in Touch →</a>
              <a href="/solutions" className="cta-ghost">Explore Solutions</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;