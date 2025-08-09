import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const Recreation = () => {
  const content = (
    <>
      <p>At NAB India, we believe that recreation is essential for a well-rounded and fulfilling life. Our recreation programs provide visually impaired individuals with opportunities to engage in sports, arts, and cultural activities, fostering social connections and personal growth.</p>
      <h4>Our Recreational Activities</h4>
      <p>We offer a variety of activities tailored to the interests and abilities of our community, including:</p>
      <ul>
        <li>Adapted sports like cricket, chess, and athletics.</li>
        <li>Music, dance, and drama workshops.</li>
        <li>Picnics, excursions, and cultural outings.</li>
        <li>Hobby classes for arts and crafts.</li>
      </ul>
      <p>These activities not only provide enjoyment but also help build confidence, teamwork, and a sense of community.</p>
    </>
  );

  return (
    <>
      <SEO
        title="Recreation for the Visually Impaired - NAB India"
        description="Discover NAB India's recreation programs, offering visually impaired individuals opportunities to participate in sports, arts, and cultural activities to foster personal growth and community."
        keywords="Recreation for blind, adapted sports India, arts for visually impaired, cultural activities for disabled, NAB India recreation"
      />
      <ProjectPageLayout
        title="Recreation"
        imageUrl="/images/Projects/recreation.jpg"
        aimsAndObjectives={content}
      />
    </>
  );
};

export default Recreation;
