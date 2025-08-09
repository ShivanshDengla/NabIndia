import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';

const Advocacy = () => {
  const history = (
    <>
      <h4>History</h4>
      <p>
        The various concessions and facilities available to the visually impaired today are a result of advocacy activities initiated by NAB (India) during the seventy years of its existence. With the passage of time, the need was felt for a structured approach to manage these activities hitherto carried out in an informal manner. As a result, the NAB Department of Advocacy was established in mid-2009, with the support of Sightsavers.
      </p>
      <p>
        The Department liaises with Government agencies, local municipal corporations, and private organizations in respect of issues affecting the lives and dignity of people with visual impairment; promotes policy changes; and provides cost-free legal assistance to visually impaired individuals, through a Legal Aid Centre, to solve their personal and professional problems.
      </p>
      <p>
        <strong>Visit to Metro railway to observe accessibility</strong>
      </p>
      <p>
        Visit to Metro railway: A visually impaired person is checking the accessibility.
      </p>
    </>
  );

  const aimsAndObjectives = (
    <>
      <h4>Aim and Objectives</h4>
      <h5>General</h5>
      <p>Advocacy for Protection of Rights of the Visually Impaired.</p>
      <h5>Specific:</h5>
      <ol>
        <li>To Educate: Government officials about the policy changes required for inclusion of the visually impaired in mainstream society; private manufacturers about the consumer rights of visually impaired consumers; and the visually impaired about their own rights.</li>
        <li>Set up legal aid cells for the blind.</li>
        <li>Organize sensitization programs for the stakeholders.</li>
      </ol>
    </>
  );

  const contactInfo = (
    <>
      <p><strong>Contact details:</strong></p>
      <p>Email: advocacy@nabindia.info</p>
      <p>Phone: 9372766313/322</p>
    </>
  );

  return (
    <ProjectPageLayout
      title="Advocacy"
      imageUrl="/images/Projects/advocacy.jpeg"
      history={history}
      aimsAndObjectives={aimsAndObjectives}
      contactInfo={contactInfo}
    />
  );
};

export default Advocacy; 