import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logoImage from '../../assets/images/mj.webp';

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <img 
        src={logoImage} 
        alt="MJ & Roberts Consulting" 
        className="logo-image"
      />
    </Link>
  );
};

export default Logo;
