import React from 'react';
import './Leadership.css';

const Leadership = () => {
  return (
    <section className="leadership-section">
      <div className="content-wrapper">
        <h2>Our Leadership</h2>
        <div className="leadership-grid">
          <div className="leader-card">
            <img src="/images/hemant-takle.png" alt="Mr. Hemant Takle" className="leader-image" />
            <h4>Mr. Hemant Takle</h4>
            <p>President</p>
          </div>
          <div className="leader-card">
            <img src="/images/vimal-dengla.png" alt="Dr. Vimal Kumar Dengla" className="leader-image" />
            <h4>Dr. Vimal Kumar Dengla</h4>
            <p>Chairman Trustee</p>
          </div>
          <div className="leader-card">
            <img src="/images/harender-malik.jpg" alt="Mr. Harinder Kumar Malik" className="leader-image" />
            <h4>Mr. Harinder Kumar Malik</h4>
            <p>Hon. Secretary General</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership; 