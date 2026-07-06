import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About us', to: '/company' },
      { label: 'Our approach', to: '/company' },
      { label: 'Partnerships', to: '/company' },
      { label: 'Careers', to: '/company' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'IT Consulting', to: '/services' },
      { label: 'Software Engineering', to: '/services' },
      { label: 'Managed IT Services', to: '/services' },
      { label: 'DevOps', to: '/services' },
      { label: 'QA & Testing', to: '/services' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'CRM', to: '/solutions' },
      { label: 'ERP', to: '/solutions' },
      { label: 'Digital Commerce', to: '/solutions' },
      { label: 'Data Analytics', to: '/solutions' },
      { label: 'AI & RPA', to: '/solutions' },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Hook up to your actual subscribe endpoint here
    setSubmitted(true);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h4 className="footer-logo">MJ &amp; Roberts Consulting</h4>
            <p className="footer-tagline">
              IT consulting and software engineering for teams that build serious things.
            </p>

            <form className="footer-subscribe" onSubmit={handleSubmit}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                {submitted ? 'Subscribed' : 'Subscribe'}
              </button>
            </form>
          </div>

          <div className="footer-grid">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="footer-col">
                <h5>{col.title}</h5>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li>
                  <a href="mailto:info@mjroberts.com">info@mjroberts.com</a>
                </li>
                <li>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </li>
              </ul>
              <div className="footer-social">
                <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.25h4V23h-4V8.25zM8.5 8.25h3.83v2.01h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.68c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V23h-4V8.25z"/>
                  </svg>
                </a>
                <a href="https://x.com" aria-label="X (Twitter)" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8.1-9.3L1 2h7l4.9 6.1L18.9 2zm-1.2 18.1h1.9L7.4 4H5.3l12.4 16.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MJ &amp; Roberts Consulting. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;