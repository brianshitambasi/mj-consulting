import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  // Dropdown data with proper emojis
  const servicesDropdown = [
    { name: 'IT Consulting', path: '/services/it-consulting', icon: '📊' },
    { name: 'Software Engineering', path: '/services/software-engineering', icon: '💻' },
    { name: 'Application Services', path: '/services/application-services', icon: '⚙️' },
    { name: 'Managed IT Services', path: '/services/managed-it', icon: '🖥️' },
    { name: 'DevOps & Platform', path: '/services/devops', icon: '🚀' },
    { name: 'Quality Assurance', path: '/services/qa', icon: '✅' },
    { name: 'Maintenance & Support', path: '/services/maintenance', icon: '🔧' },
    { name: 'Smart Teams', path: '/services/smart-teams', icon: '👥' }
  ];

  const solutionsDropdown = [
    { name: 'CRM Solutions', path: '/solutions/crm', icon: '🤝' },
    { name: 'ERP Implementation', path: '/solutions/erp', icon: '🏭' },
    { name: 'Digital Commerce', path: '/solutions/digital-commerce', icon: '🛒' },
    { name: 'Data Analytics & BI', path: '/solutions/data-analytics', icon: '📊' },
    { name: 'AI & RPA', path: '/solutions/ai-rpa', icon: '🤖' },
    { name: 'AR/VR & IoT', path: '/solutions/ar-vr-iot', icon: '🥽' }
  ];

  const technologiesDropdown = [
    { name: 'Salesforce', path: '/technologies/salesforce', icon: '☁️' },
    { name: 'AWS', path: '/technologies/aws', icon: '☁️' },
    { name: 'Microsoft Azure', path: '/technologies/azure', icon: '💙' },
    { name: 'SAP Commerce', path: '/technologies/sap', icon: '📊' },
    { name: 'Odoo', path: '/technologies/odoo', icon: '🔧' },
    { name: 'Atlassian', path: '/technologies/atlassian', icon: '📋' },
    { name: 'Power BI', path: '/technologies/powerbi', icon: '📈' },
    { name: 'Google Cloud', path: '/technologies/google-cloud', icon: '🔵' }
  ];

  const industriesDropdown = [
    { name: 'Healthcare', path: '/industries/healthcare', icon: '🏥' },
    { name: 'Finance', path: '/industries/finance', icon: '💰' },
    { name: 'Manufacturing', path: '/industries/manufacturing', icon: '🏭' },
    { name: 'Retail', path: '/industries/retail', icon: '🛍️' },
    { name: 'Insurance', path: '/industries/insurance', icon: '🛡️' },
    { name: 'Software & Hi-Tech', path: '/industries/software', icon: '💻' },
    { name: 'Professional Services', path: '/industries/professional', icon: '👔' }
  ];

  const insightsDropdown = [
    { name: 'Artificial Intelligence', path: '/insights/ai', icon: '🤖' },
    { name: 'Cloud Computing', path: '/insights/cloud', icon: '☁️' },
    { name: 'Digital Transformation', path: '/insights/digital-transformation', icon: '🔄' },
    { name: 'Cybersecurity', path: '/insights/cybersecurity', icon: '🔒' },
    { name: 'Data Analytics', path: '/insights/data-analytics', icon: '📊' },
    { name: 'ERP', path: '/insights/erp', icon: '📈' },
    { name: 'Customer Experience', path: '/insights/cx', icon: '⭐' },
    { name: 'Industry Trends', path: '/insights/trends', icon: '📰' }
  ];

  const companyDropdown = [
    { name: 'Overview', path: '/company/overview', icon: '🏢' },
    { name: 'Our Approach', path: '/company/approach', icon: '🎯' },
    { name: 'Leadership Team', path: '/company/team', icon: '👥' },
    { name: 'Partnerships', path: '/company/partnerships', icon: '🤝' },
    { name: 'Careers', path: '/company/careers', icon: '💼' },
    { name: 'News & Press', path: '/company/news', icon: '📰' },
    { name: 'Awards', path: '/company/awards', icon: '🏆' }
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">MJ & Roberts Consulting</Link>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {/* Services Dropdown */}
            <li className="dropdown" onMouseEnter={() => handleDropdown('services')} onMouseLeave={() => handleDropdown(null)}>
              <Link to="/services" className="dropdown-trigger">Services ▼</Link>
              {openDropdown === 'services' && (
                <ul className="dropdown-menu">
                  {servicesDropdown.map(item => (
                    <li key={item.name}>
                      <Link to={item.path}>
                        <span className="dropdown-icon">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Solutions Dropdown */}
            <li className="dropdown" onMouseEnter={() => handleDropdown('solutions')} onMouseLeave={() => handleDropdown(null)}>
              <Link to="/solutions" className="dropdown-trigger">Solutions ▼</Link>
              {openDropdown === 'solutions' && (
                <ul className="dropdown-menu">
                  {solutionsDropdown.map(item => (
                    <li key={item.name}>
                      <Link to={item.path}>
                        <span className="dropdown-icon">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Technologies Dropdown */}
            <li className="dropdown" onMouseEnter={() => handleDropdown('technologies')} onMouseLeave={() => handleDropdown(null)}>
              <Link to="/technologies" className="dropdown-trigger">Technologies ▼</Link>
              {openDropdown === 'technologies' && (
                <ul className="dropdown-menu">
                  {technologiesDropdown.map(item => (
                    <li key={item.name}>
                      <Link to={item.path}>
                        <span className="dropdown-icon">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Industries Dropdown */}
            <li className="dropdown" onMouseEnter={() => handleDropdown('industries')} onMouseLeave={() => handleDropdown(null)}>
              <Link to="/industries" className="dropdown-trigger">Industries ▼</Link>
              {openDropdown === 'industries' && (
                <ul className="dropdown-menu">
                  {industriesDropdown.map(item => (
                    <li key={item.name}>
                      <Link to={item.path}>
                        <span className="dropdown-icon">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Case Studies - No dropdown */}
            <li><Link to="/casestudies">Case Studies</Link></li>

            {/* Insights Dropdown */}
            <li className="dropdown" onMouseEnter={() => handleDropdown('insights')} onMouseLeave={() => handleDropdown(null)}>
              <Link to="/insights" className="dropdown-trigger">Insights ▼</Link>
              {openDropdown === 'insights' && (
                <ul className="dropdown-menu">
                  {insightsDropdown.map(item => (
                    <li key={item.name}>
                      <Link to={item.path}>
                        <span className="dropdown-icon">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Company Dropdown */}
            <li className="dropdown" onMouseEnter={() => handleDropdown('company')} onMouseLeave={() => handleDropdown(null)}>
              <Link to="/company" className="dropdown-trigger">Company ▼</Link>
              {openDropdown === 'company' && (
                <ul className="dropdown-menu dropdown-menu-wide">
                  {companyDropdown.map(item => (
                    <li key={item.name}>
                      <Link to={item.path}>
                        <span className="dropdown-icon">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link to="/contact" className="contact-btn">Contact us</Link></li>
          </ul>
          
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;