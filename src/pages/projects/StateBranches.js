import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';

const StateBranches = () => {
  const history = (
    <p>
      National Association for the Blind, India is one of the largest voluntary organizations in the disability sector, engaged in work for the blind for almost seven decades. It has pioneered a wide range of services, activities and programmes aimed at prevention and cure of Blindness, Education, Training, Employment and Rehabilitation of the Blind, Production of the Braille and Audio literature, Empowerment of blind women, Care of the Aging blind, Promotion of access technology and so on.
    </p>
  );

  const aimsAndObjectives = (
    <p>
      To take this work throughout the country the importance of establishing a nationwide network of services for the visually challenged was soon felt. This led to the establishment of the first Branch of NAB (India) now known as NAB Tamil Nadu State Branch on January 28, 1960. This was followed by opening of Branches in Kerala, Gujarat, Maharashtra and so on. The National Association for the Blind, India now has 22 State and 65 District Branches working for the welfare of Blind community across the country.
    </p>
  );

  const contactInfo = (
    <p>
      <strong>Contact:</strong><br />
      Email: sbd@nabindia.info<br />
      Phone: 9372766313
    </p>
  );

  return (
    <ProjectPageLayout
      title="State Branches"
      imageUrl="/images/Projects/state-branches.jpg"
      history={history}
      aimsAndObjectives={aimsAndObjectives}
      contactInfo={contactInfo}
    />
  );
};

export default StateBranches;
