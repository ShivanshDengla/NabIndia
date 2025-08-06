import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>NAB India</h3>
          <p>11-12 Khan Abdul Gaffar Khan Road, Worli Sea Face, Mumbai - 400030</p>
        </div>
        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p>
            <a href="mailto:hsg@nabindia.info">hsg@nabindia.info</a>
            <br />
            <a href="mailto:administration@nabindia.info">administration@nabindia.info</a>
          </p>
          <h3>Contact Developer</h3>
          <p><a href="mailto:shivanshdengla@gmail.com">shivanshdengla@gmail.com</a></p>
        </div>
        <div className="footer-donate">
          <Link to="/donate" className="donate-button-footer">Donate Now</Link>
          <img src="/images/donate.png" alt="Donate to NAB India" className="donate-image" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
