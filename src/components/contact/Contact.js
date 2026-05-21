import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    subject: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationDetected, setApplicationDetected] = useState(false);

  // Check for pending job application on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hasApplication = urlParams.get('application') === 'pending';
    const pendingApp = localStorage.getItem('pendingApplication');
    
    if (hasApplication && pendingApp) {
      try {
        const application = JSON.parse(pendingApp);
        let applicantName = '';
        let applicantEmail = '';
        let applicantPhone = '';
        let jobTitle = '';
        
        if (application.message) {
          const nameMatch = application.message.match(/Full Name: ([^\n]+)/);
          if (nameMatch) applicantName = nameMatch[1];
          const emailMatch = application.message.match(/Email: ([^\n]+)/);
          if (emailMatch) applicantEmail = emailMatch[1];
          const phoneMatch = application.message.match(/Phone: ([^\n]+)/);
          if (phoneMatch) applicantPhone = phoneMatch[1];
          const jobMatch = application.message.match(/Position: ([^\n]+)/);
          if (jobMatch) jobTitle = jobMatch[1];
        }
        
        setFormData({
          name: applicantName || '',
          email: applicantEmail || '',
          phone: applicantPhone || '',
          subject: application.subject || `Job Application: ${jobTitle}`,
          message: application.message || ''
        });
        setApplicationDetected(true);
        localStorage.removeItem('pendingApplication');
        setTimeout(() => {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 8000);
        }, 500);
      } catch (error) {
        console.error('Error parsing application data:', error);
      }
    }
  }, []);

  // WhatsApp configuration
  const whatsappNumber = '254723156066';
  const whatsappMessage = encodeURIComponent('Hello! I would like to get more information about your services.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const whatsappCallLink = `https://wa.me/${whatsappNumber}`;

  // Real founders/owners
  const owners = [
    {
      id: 1,
      name: "Mohamed Jeylani Sayed",
      title: "Co-Founder & CEO",
      email: "mohamed@mjroberts.com",
      phone: "+254723156066",
      whatsapp: "254723156066",
      bio: "15+ years of experience in enterprise technology and digital transformation. Visionary leader driving MJ&Roberts' mission to bridge the innovation-infrastructure gap.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#" },
      expertise: ["Business Strategy", "Digital Transformation", "Enterprise Architecture", "Leadership"]
    },
    {
      id: 2,
      name: "Roberts Vildon Elisha",
      title: "Co-Founder & CTO",
      email: "roberts@mjroberts.com",
      phone: "+254723156066",
      whatsapp: "254723156066",
      bio: "Technology architect with deep expertise in cloud, AI, and resilient system design. Leads engineering teams to deliver scalable, secure solutions for global enterprises.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#" },
      expertise: ["Cloud Architecture", "AI/ML", "Resilient Systems", "DevOps"]
    }
  ];

  const services = [
    "IT Consulting & Digital Transformation",
    "Software Engineering & Application Services",
    "Managed IT Services & Support",
    "DevOps & Platform Engineering",
    "Quality Assurance & Testing",
    "Cloud Solutions & Architecture"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const recipientEmail = localStorage.getItem('applicationRecipient') || 'brianshitambasi270@gmail.com';
    const emailSubject = formData.subject;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from MJ & Roberts Consulting Contact Form
WhatsApp: +254 723 156066
    `;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      window.location.href = mailtoLink;
      setSubmitted(true);
      setApplicationDetected(false);
      localStorage.removeItem('applicationRecipient');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact MJ & Roberts Consulting</h1>
            <p>Let's work together to transform your business</p>
          </div>
        </div>
      </div>

      <div className="contact-container">
        {/* Main Contact Section */}
        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="contact-info-card">
            <h4>
              <span className="contact-icon-head">Ì≥û</span>
              Contact Information
            </h4>
            
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-icon-circle email-bg">
                  <span>Ì≥ß</span>
                </div>
                <div>
                  <small>Email Us</small>
                  <p>brianshitambasi270@gmail.com</p>
                  <small className="text-muted">For jobs: brianshitambasi270@gmail.com</small>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-icon-circle phone-bg">
                  <span>Ì≥û</span>
                </div>
                <div>
                  <small>Call Us</small>
                  <p>+254 723 156066</p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-icon-circle whatsapp-bg">
                  <span>Ì≤¨</span>
                </div>
                <div>
                  <small>WhatsApp</small>
                  <p>+254 723 156066</p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-icon-circle location-bg">
                  <span>Ì≥ç</span>
                </div>
                <div>
                  <small>Visit Us</small>
                  <p>14 Hennessy Road, Edmonton, London N9 0XQ, United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="office-hours">
              <h6>Office Hours</h6>
              <p>Ì≥Ö Mon-Fri: 9:00 AM - 6:00 PM (GMT)</p>
              <p>Ì≥Ö Saturday: 10:00 AM - 2:00 PM</p>
              <p>Ì≥Ö Sunday: Closed</p>
            </div>

            <div className="whatsapp-buttons">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-chat-btn">
                Ì≤¨ Chat on WhatsApp
              </a>
              <a href={whatsappCallLink} target="_blank" rel="noopener noreferrer" className="whatsapp-call-btn">
                Ì≥û Call via WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h3>{applicationDetected ? 'Complete Your Job Application' : 'Send us a message'}</h3>
            <p>{applicationDetected ? 'Please review your application details below and click send to submit your job application.' : 'Fill out the form below and we\'ll get back to you within 24 hours'}</p>
            
            <div className="whatsapp-alert">
              Ì≤¨ <strong>Quick Support:</strong> Chat with us on WhatsApp at <strong>+254 723 156066</strong> for immediate assistance
            </div>
            
            {submitted && (
              <div className="success-alert">
                ‚úì {applicationDetected ? 'Your job application has been sent successfully! Our HR team will review your application and contact you within 3-5 business days.' : 'Message sent successfully! Our team will contact you soon.'}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+254 723 156066" />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What is this regarding?" readOnly={applicationDetected} />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label>Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={applicationDetected ? 12 : 5} placeholder="Tell us about your project or inquiry..."></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? 'Sending...' : applicationDetected ? 'Submit Job Application' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="services-card">
            <h3>
              <span className="rocket-icon">Ì∫Ä</span>
              Our Services
            </h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <span className="check-icon">‚úì</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="team-section">
          <div className="team-header">
            <h2>
              <span className="user-icon">Ì±î</span>
              Meet Our Founders
            </h2>
            <p>The visionaries behind MJ&Roberts Consulting</p>
          </div>

          <div className="team-grid">
            {owners.map((owner) => (
              <div key={owner.id} className="team-card">
                <div className="team-card-inner">
                  <div className="team-avatar">
                    <img src={owner.avatar} alt={owner.name} />
                  </div>
                  <div className="team-info">
                    <h3>{owner.name}</h3>
                    <span className="team-badge">{owner.title}</span>
                    <p className="team-bio">{owner.bio}</p>
                    
                    <div className="team-expertise">
                      {owner.expertise.map((skill, idx) => (
                        <span key={idx} className="expertise-badge">{skill}</span>
                      ))}
                    </div>
                    
                    <div className="team-contact-info">
                      <div className="contact-row">
                        <span className="contact-icon">Ì≥ß</span>
                        <a href={`mailto:${owner.email}`}>{owner.email}</a>
                      </div>
                      <div className="contact-row">
                        <span className="contact-icon">Ì≤¨</span>
                        <a href={`https://wa.me/${owner.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp: {owner.phone}</a>
                      </div>
                    </div>

                    <div className="team-social-links">
                      <a href={owner.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">in</a>
                      <a href={owner.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link twitter">Ìµè</a>
                      <a href={`https://wa.me/${owner.whatsapp}`} target="_blank" rel="noopener noreferrer" className="social-link whatsapp">Ì≤¨</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">Ì±•</div>
              <h3>300+</h3>
              <p>Enterprise Clients</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">ÌøÜ</div>
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">Ìºç</div>
              <h3>15+</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">‚≠ê</div>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
