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

  // Dropdown data
  const servicesDropdown = [
    { name: 'IT Consulting', path: '/services/it-consulting', icon: 'Ì≥ä' },
    { name: 'Software Engineering', path: '/services/software-engineering', icon: 'Ì≤ª' },
    { name: 'Application Services', path: '/services/application-services', icon: '‚öôÔ∏è' },
    { name: 'Managed IT Services', path: '/services/managed-it', icon: 'Ì∂•Ô∏è' },
    { name: 'DevOps & Platform', path: '/services/devops', icon: 'Ì∫Ä' },
    { name: 'Quality Assurance', path: '/services/qa', icon: '‚úÖ' },
    { name: 'Maintenance & Support', path: '/services/maintenance', icon: 'Ì¥ß' },
    { name: 'Smart Teams', path: '/services/smart-teams', icon: 'Ì±•' }
  ];

  const solutionsDropdown = [
    { name: 'CRM Solutions', path: '/solutions/crm', icon: 'Ì¥ù' },
    { name: 'ERP Implementation', path: '/solutions/erp', icon: 'Ìø≠' },
    { name: 'Digital Commerce', path: '/solutions/digital-commerce', icon: 'Ìªí' },
    { name: 'Data Analytics & BI', path: '/solutions/data-analytics', icon: 'Ì≥ä' },
    { name: 'AI & RPA', path: '/solutions/ai-rpa', icon: 'Ì¥ñ' },
    { name: 'AR/VR & IoT', path: '/solutions/ar-vr-iot', icon: 'ÌµΩ' }
  ];

  const technologiesDropdown = [
    { name: 'Salesforce', path: '/technologies/salesforce', icon: '‚òÅÔ∏è' },
    { name: 'AWS', path: '/technologies/aws', icon: '‚òÅÔ∏è' },
    { name: 'Microsoft Azure', path: '/technologies/azure', icon: 'Ì≤ô' },
    { name: 'SAP Commerce', path: '/technologies/sap', icon: 'Ì≥ä' },
    { name: 'Odoo', path: '/technologies/odoo', icon: 'Ì¥ß' },
    { name: 'Atlassian', path: '/technologies/atlassian', icon: 'Ì≥ã' },
    { name: 'Power BI', path: '/technologies/powerbi', icon: 'Ì≥à' },
    { name: 'Google Cloud', path: '/technologies/google-cloud', icon: 'Ì¥µ' }
  ];

  const industriesDropdown = [
    { name: 'Healthcare', path: '/industries/healthcare', icon: 'Ìø•' },
    { name: 'Finance', path: '/industries/finance', icon: 'Ì≤∞' },
    { name: 'Manufacturing', path: '/industries/manufacturing', icon: 'Ìø≠' },
    { name: 'Retail', path: '/industries/retail', icon: 'ÌªçÔ∏è' },
    { name: 'Insurance', path: '/industries/insurance', icon: 'Ìª°Ô∏è' },
    { name: 'Software & Hi-Tech', path: '/industries/software', icon: 'Ì≤ª' },
    { name: 'Professional Services', path: '/industries/professional', icon: 'Ì±î' }
  ];

  const insightsDropdown = [
    { name: 'Artificial Intelligence', path: '/insights/ai', icon: 'Ì¥ñ' },
    { name: 'Cloud Computing', path: '/insights/cloud', icon: '‚òÅÔ∏è' },
    { name: 'Digital Transformation', path: '/insights/digital-transformation', icon: 'Ì¥Ñ' },
    { name: 'Cybersecurity', path: '/insights/cybersecurity', icon: 'Ì¥í' },
    { name: 'Data Analytics', path: '/insights/data-analytics', icon: 'Ì≥ä' },
    { name: 'ERP', path: '/insights/erp', icon: 'Ì≥à' },
    { name: 'Customer Experience', path: '/insights/cx', icon: '‚≠ê' },
    { name: 'Industry Trends', path: '/insights/trends', icon: 'Ì≥∞' }
  ];

  const companyDropdown = [
    { name: 'Overview', path: '/company/overview', icon: 'ÔøΩÔøΩ' },
    { name: 'Our Approach', path: '/company/approach', icon: 'ÌæØ' },
    { name: 'Leadership Team', path: '/company/team', icon: 'Ì±•' },
    { name: 'Partnerships', path: '/company/partnerships', icon: 'Ì¥ù' },
    { name: 'Careers', path: '/company/careers', icon: 'Ì≤º' },
    { name: 'News & Press', path: '/company/news', icon: 'Ì≥∞' },
    { name: 'Awards', path: '/company/awards', icon: 'ÌøÜ' }
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">MJ & Roberts Consulting</Link>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {/* Services Dropdown */}
            <li className="dropdown" onMouseEnter={() => handleDropdown('services')} onMouseLeave={() => handleDropdown(null)}>
              <Link to="/services" className="dropdown-trigger">Services ‚ñº</Link>
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
              <Link to="/solutions" className="dropdown-trigger">Solutions ‚ñº</Link>
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
              <Link to="/technologies" className="dropdown-trigger">Technologies ‚ñº</Link>
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
              <Link to="/industries" className="dropdown-trigger">Industries ‚ñº</Link>
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
              <Link to="/insights" className="dropdown-trigger">Insights ‚ñº</Link>
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
              <Link to="/company" className="dropdown-trigger">Company ‚ñº</Link>
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
            ‚ò∞
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
