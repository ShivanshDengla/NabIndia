import React, { useEffect } from 'react';
import './Donate.css';
import SEO from '../components/SEO';

const Donate = () => {
  useEffect(() => {
    // Create and load the Danamojo script
    const script = document.createElement('script');
    script.src = 'https://danamojo.org/dm/js/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Add the timeout script for error handling
    const timeoutScript = document.createElement('script');
    timeoutScript.text = `
      setTimeout(function(){
        if(document.getElementById("ngoContentContainer").innerHTML.length < 40){
          document.getElementById("ngoContentContainer").innerHTML="<center><p class='error-message'>We apologize, but our donation system is temporarily unavailable. Please try again later.</p></center>";
        }
      }, 20000);
    `;
    document.body.appendChild(timeoutScript);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(timeoutScript);
    };
  }, []);

  return (
    <div className="donate-container">
      <SEO
        title="Donate to NAB India - Support the Visually Impaired"
        description="Your donation to the National Association for the Blind (NAB) India helps us provide vital education, rehabilitation, and employment services to visually impaired individuals across the country. Donate now and make a difference."
        keywords="Donate to NAB India, support visually impaired India, NAB India donation, charity for the blind India, 80G tax exemption donation"
      />
      <div className="donate-hero">
        <h1>Support Our Cause</h1>
        <p>Your contribution helps us empower visually impaired individuals across India</p>
      </div>

      <div className="donate-content">
        <div className="donate-info">
          <h2>Why Donate to NAB India?</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <i className="fas fa-book-reader"></i>
              <h3>Education</h3>
              <p>Support education programs for visually impaired students</p>
            </div>
            <div className="impact-item">
              <i className="fas fa-hands-helping"></i>
              <h3>Rehabilitation</h3>
              <p>Help provide rehabilitation services to those in need</p>
            </div>
            <div className="impact-item">
              <i className="fas fa-briefcase"></i>
              <h3>Employment</h3>
              <p>Enable job training and employment opportunities</p>
            </div>
            <div className="impact-item">
              <i className="fas fa-book"></i>
              <h3>Braille Press</h3>
              <p>Support the production of braille books and materials</p>
            </div>
          </div>
        </div>

        <div className="donate-widget-container">
          <div className="widget-wrapper">
            <div id="dmScriptContainer" style={{ display: 'none' }}>
              {/* Removed anchor tag as it's handled by Danamojo widget */}
            </div>
            <div 
              id="ngoContentContainer" 
              iNGOId="358" 
              oDisplay="product" 
              oDisplayTab="once,monthly" 
              oQRCode="YES"
            >
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading donation options...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="donation-benefits">
          <h2>Your Donation Makes a Difference</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <i className="fas fa-hand-holding-heart"></i>
              <h4>Transform Lives</h4>
              <p>Every donation helps us provide essential services to the visually impaired community</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-receipt"></i>
              <h4>Tax Benefits</h4>
              <p>All donations are eligible for tax exemption under Section 80G</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-shield-alt"></i>
              <h4>Secure Payment</h4>
              <p>Your transaction is processed through secure payment gateways</p>
            </div>
          </div>
        </div>

        <div className="bank-details">
          <h2>Bank Transfer Details</h2>
          <p>You can also donate directly to our bank account using the details below:</p>
          <ul>
            <li><strong>Name of the Organization:</strong> National Association for the Blind, India</li>
            <li><strong>Name of the Bank:</strong> Punjab National Bank</li>
            <li><strong>Branch:</strong> Worli Seaface Branch, Mumbai 400 030</li>
            <li><strong>Account No:</strong> 3740000100008551</li>
            <li><strong>IFSC Code:</strong> PUNB 0374000</li>
            <li><strong>MICR Code:</strong> 400024060</li>
            <li><strong>PAN No.:</strong> AAATN2303H</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Donate;
