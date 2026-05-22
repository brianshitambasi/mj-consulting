import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <img 
        src="/logo192.png" 
        alt="MJ & Roberts Consulting" 
        className="logo-image"
        onError={(e) => {
          console.error('Logo failed to load');
          e.target.style.display = 'none';
        }}
      />
      <div className="logo-text">
        <span className="logo-mj">MJ</span>
        <span className="logo-symbol">&amp;</span>
        <span className="logo-roberts">Roberts</span>
        <span className="logo-consulting">Consulting</span>
      </div>
    </Link>
  );
};

export default Logo;
