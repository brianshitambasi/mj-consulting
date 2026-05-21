import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>MJ & Roberts Consulting</h4>
            <ul>
              <li><Link to="/company">About us</Link></li>
              <li><Link to="/company">Our approach</Link></li>
              <li><Link to="/company">Partnerships</Link></li>
              <li><Link to="/company">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">IT Consulting</Link></li>
              <li><Link to="/services">Software Engineering</Link></li>
              <li><Link to="/services">Managed IT Services</Link></li>
              <li><Link to="/services">DevOps</Link></li>
              <li><Link to="/services">QA & Testing</Link></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><Link to="/solutions">CRM</Link></li>
              <li><Link to="/solutions">ERP</Link></li>
              <li><Link to="/solutions">Digital Commerce</Link></li>
              <li><Link to="/solutions">Data Analytics</Link></li>
              <li><Link to="/solutions">AI & RPA</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@mjroberts.com">info@mjroberts.com</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 MJ & Roberts Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
