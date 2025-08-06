import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/images/nab-logo.jpg" alt="NAB India Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/projects">Projects and Activities</Link></li>
        <li><Link to="/news">News and Updates</Link></li>
      </ul>
      <div className="navbar-donate">
        <Link to="/donate" className="donate-button">DONATE</Link>
      </div>
    </nav>
  );
}

export default Navbar;
