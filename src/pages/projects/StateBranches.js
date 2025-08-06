import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';

const StateBranches = () => {
  const history = (
    <p>National Association for the Blind, India is one of the largest voluntary organizations in the disability sector, engaged in work for the blind for almost seven decades.  It has pioneered of a wide range of services, activities and programmes aimed at prevention and cure of Blindness, Education, Training, Employment and Rehabilitation of the Blind,  Production of the Braille and Audio literature, Empowerment of blind women, Care of the Aging blind, Promotion of access technology and so on. </p>
  );

  const aimsAndObjectives = (
    <p>To take this work throughout the country the importance of establishing a nationwide network of services for the visually challenged was soon felt. This led to the establishment of the first Branch of NAB (India) now known as NAB Tamil Nadu State Branch on January 28, 1960. This was followed by opening of Branches in Kerala, Gujarat, Maharashtra and so on. The National Association for the Blind, India now has 22 State and 65 District Branches working for the welfare of Blind community across the country.</p>
  );

  const committeeMembers = (
    <>
      <h4>NAB State Branches Committee</h4>
      <ul>
        <li><strong>Chairman:</strong> Dr. Shishir Kumar Das</li>
        <li><strong>Honorary Secretary In-Charge:</strong> Dr. Vimal Kumar Dengla</li>
        <li><strong>Members:</strong></li>
        <ul>
          <li>Shri Gopal Krishna Agarwal</li>
          <li>Shri Rananjay Singh</li>
          <li>Shri Atul Sahay</li>
          <li>Shri Deepak Kumar Raval</li>
          <li>Ms. Deepti Bhatia</li>
        </ul>
        <li><strong>Convenor:</strong> Shri N. Robinson, Dy. Director</li>
      </ul>
    </>
  );

  return (
    <ProjectPageLayout
      title="State Branches"
      imageUrl="/images/Projects/state-branches.jpg"
      history={history}
      aimsAndObjectives={aimsAndObjectives}
      committeeMembers={committeeMembers}
    />
  );
};

export default StateBranches;
