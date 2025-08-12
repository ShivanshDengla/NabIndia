import React from 'react';
import './About.css';
import OfficeBearers from '../components/OfficeBearers';
import Leadership from '../components/Leadership';
import SEO from '../components/SEO';

const About = () => {
  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/Projects/center-of-blind.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="about-container">
      <SEO
        title="About NAB India - Our Mission, Vision, and Leadership"
        description="Learn about the National Association for the Blind (NAB) India, our mission to empower the visually impaired, our vision for an inclusive future, and the dedicated team leading our efforts."
        keywords="About NAB India, NAB India mission, NAB India vision, NAB India leadership, National Association for the Blind history"
      />
      <div className="about-hero" style={heroStyle}>
        <h1>About NAB India</h1>
        <p>Get in touch with us for any inquiries or support</p>
      </div>

      <section className="about-section">
        <div className="content-wrapper">
          <h2>Empowering Lives Through Vision</h2>
          <p>The National Association for the Blind (NAB) is dedicated to improving the lives of
individuals who are visually impaired throughout the country. We work tirelessly to provide
education and rehabilitation services that empower these individuals and help them achieve
their full potential. Our programs are designed to address the unique needs and challenges
faced by those who are blind, and we strive to create a supportive and inclusive
environment where they can learn, grow, and thrive. Whether through our educational
initiatives, employment training programs, or other supportive services, NAB is committed to
making a difference in the lives of visually impaired individuals nationwide.</p>
        </div>
      </section>

      <section className="about-section mission-vision">
        <div className="content-wrapper two-columns">
          <div className="column">
            <img src="/images/Projects/education.jpg" alt="Education Programs" className="section-image" />
            <h3>Our Mission</h3>
            <p>To empower visually impaired individuals through education, rehabilitation, and advocacy, enabling them to lead independent and dignified lives as integral members of society.</p>
          </div>
          <div className="column">
            <img src="/images/Projects/vocational-training.jpeg" alt="Vocational Training" className="section-image" />
            <h3>Our Vision</h3>
            <p>To create an inclusive world where visual impairment is not a barrier to achieving one's full potential, and where every blind person has equal opportunities for education, employment, and social integration.</p>
          </div>
        </div>
      </section>

      {/* <section className="about-section impact">
        <div className="content-wrapper">
          <h2>Our Impact</h2>
          <div className="stats-container">
            <div className="stat-box">
              <h3>50+</h3>
              <p>Years of Service</p>
            </div>
            <div className="stat-box">
              <h3>20+</h3>
              <p>State Branches</p>
            </div>
            <div className="stat-box">
              <h3>10,000+</h3>
              <p>Lives Impacted Annually</p>
            </div>
            <div className="stat-box">
              <h3>100+</h3>
              <p>Active Programs</p>
            </div>
          </div>
        </div>
      </section> */}
      <Leadership />

      <OfficeBearers />

      <section className="about-section programs">
        <div className="content-wrapper">
          <h2>Our Key Initiatives</h2>
          <div className="programs-grid">
            <div className="program-card">
              <img src="/images/Projects/braille-press.png" alt="Braille Press" />
              <h4>Braille Press</h4>
              <p>Publishing accessible literature for the visually impaired community.</p>
            </div>
            <div className="program-card">
              <img src="/images/Projects/employement.jpg" alt="Employment Programs" />
              <h4>Employment</h4>
              <p>Creating job opportunities and workplace inclusion.</p>
            </div>
            <div className="program-card">
              <img src="/images/Projects/rehabilitation.jpg" alt="Rehabilitation Services" />
              <h4>Rehabilitation</h4>
              <p>Comprehensive rehabilitation services for all age groups.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
