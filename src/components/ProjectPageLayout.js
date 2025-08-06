import React from 'react';
import './ProjectPageLayout.css';

const ProjectPageLayout = ({
  title,
  imageUrl,
  history,
  aimsAndObjectives,
  committeeMembers,
  contactInfo,
  donateLink = "/donate"
}) => {
  return (
    <div className="project-page-layout">
      <header className="project-header">
        <h1>{title}</h1>
        <a href={donateLink} className="donate-button-project">Donate</a>
      </header>

      <div className="project-content">
        <div className="project-main-content">
          {history && (
            <div className="project-section">
              <h2>History</h2>
              {typeof history === 'string' ? <p>{history}</p> : history}
            </div>
          )}

          {aimsAndObjectives && (
            <div className="project-section">
              <h2>Aim and Objectives</h2>
              {aimsAndObjectives}
            </div>
          )}
        </div>
        
        {imageUrl && (
          <div className="project-sidebar">
            <img src={imageUrl} alt={title} className="project-image" />
          </div>
        )}
      </div>

      {committeeMembers && (
        <div className="project-section committee-section">
          <h2>Committee Members</h2>
          {committeeMembers}
        </div>
      )}

      {contactInfo && (
        <div className="project-section contact-section">
          <h2>Contact Information</h2>
          {contactInfo}
        </div>
      )}
    </div>
  );
};

export default ProjectPageLayout; 