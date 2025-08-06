import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(/images/Award_accept.jpeg)` }} 
      aria-labelledby="hero-heading"
    >
      <div className="hero-content">
        <h1 id="hero-heading">Help us to help them to help themselves</h1>
        <div className="hero-buttons">
          <a href="/donate" className="hero-button donate">Donate</a>
          <a href="/about" className="hero-button about-us">About Us</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
