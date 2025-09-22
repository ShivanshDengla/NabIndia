import React from 'react';
import './OGM.css';

const OGM = () => {
  const handleDownloadPDF = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/images/NAB India PJ OGM 27 .pdf';
    link.download = 'NAB India PJ OGM 27.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="ogm-page">
      <div className="ogm-container">
        <div className="ogm-header">
          <h1>OGM and Election 2025</h1>
          <p className="ogm-subtitle">
            National Association for the Blind (India) - Project Office General Meeting
          </p>
        </div>
        
        <div className="ogm-content">
          <div className="ogm-info">
            <h2>Annual General Meeting 2025</h2>
            <p>
              The National Association for the Blind (India) is pleased to announce the 
              Annual General Meeting and Election 2025. This important event will include 
              discussions on our ongoing projects, financial reports, and the election of 
              new office bearers.
            </p>
            
            <div className="ogm-details">
              <h3>Meeting Details</h3>
              <ul>
                <li><strong>Date:</strong> To be announced</li>
                <li><strong>Venue:</strong> NAB India Project Office</li>
                <li><strong>Agenda:</strong> Annual reports, financial statements, and elections</li>
              </ul>
            </div>
            
            <div className="download-section">
              <h3>Download Meeting Documents</h3>
              <p>
                Click the button below to download the complete OGM document containing 
                all meeting details, agenda items, and election information.
              </p>
              <button 
                className="download-button"
                onClick={handleDownloadPDF}
                aria-label="Download OGM and Election 2025 PDF document"
              >
                <span className="download-icon">📄</span>
                Download OGM Document
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OGM;
