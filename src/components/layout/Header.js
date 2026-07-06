import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'Industries', to: '/industries' },
  { label: 'Case Studies', to: '/casestudies' },
  { label: 'Insights', to: '/insights' },
  { label: 'Company', to: '/company' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Logo />

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={location.pathname.startsWith(item.to) ? 'is-active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-cta-item">
              <Link to="/contact" className="contact-btn">
                Contact Us
              </Link>
            </li>
          </ul>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;