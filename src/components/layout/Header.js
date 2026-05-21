import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">MJ & Roberts Consulting</Link>
          <ul className="nav-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/technologies">Technologies</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/casestudies">Case studies</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/contact" className="contact-btn">Contact us</Link></li>
          </ul>
          <button className="mobile-menu-btn">☰</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
