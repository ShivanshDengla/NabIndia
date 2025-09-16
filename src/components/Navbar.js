import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);


  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/images/nab-logo.jpg" alt="NAB India Logo" />
        </Link>
      </div>
      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-controls="navbar-links"
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <div className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={`navbar-links-container ${isMobileMenuOpen ? 'open' : ''}`} id="navbar-links">
        <ul className="navbar-links">
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
          <li><Link to="/projects" onClick={closeMobileMenu}>Projects and Activities</Link></li>
          <li><Link to="/news" onClick={closeMobileMenu}>News and Updates</Link></li>
          {/* <li><Link to="/membership" onClick={closeMobileMenu}>Membership</Link></li> */}
          <li className="mobile-donate-link">
            <Link to="/donate" className="donate-button" onClick={closeMobileMenu}>DONATE</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-donate">
        <Link to="/donate" className="donate-button">DONATE</Link>
      </div>
    </nav>
  );
}

export default Navbar;
