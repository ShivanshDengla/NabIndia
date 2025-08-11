import React from 'react';
import SEO from '../components/SEO';

const News = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f2f5',
    minHeight: 'calc(100vh - 160px)',
  };

  const iframeContainerStyle = {
    width: '100%',
    maxWidth: '500px', // Set to Facebook's max embed width
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <SEO
        title="News & Updates - NAB India"
        description="Stay up-to-date with the latest news, events, and announcements from the National Association for the Blind (NAB) India. Find out what's happening in our community and how we're making an impact."
        keywords="NAB India news, NAB India updates, events, announcements, visually impaired community news"
      />
      <h1>News and Updates</h1>
      <div style={iframeContainerStyle}>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNabIndia1234&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          style={{ border: 'none', width: '500px', height: '800px' }}
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="NAB India Facebook Feed"
        ></iframe>
      </div>
    </div>
  );
};

export default News;
