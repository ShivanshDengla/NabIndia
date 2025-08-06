import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';

const Advocacy = () => {
  const history = (
    <>
      <p>The various concessions and facilities available to the visually impaired today are a result of advocacy activities initiated by NAB (India) during the Seventy years of its existence. With passage of time, need was felt for a structured approach to manage these activities hitherto carried out in an informal manner. As a result, the NAB Department of Advocacy was established in mid-2009, with the support of Sightsavers.</p>
      <p>The Department liaises with Government agencies, Local municipal corporations and private organizations in respect of issues affecting the lives and dignity of people with visual impairment; promotes policy changes; and provides cost-free legal assistance to visually impaired individuals, through a Legal Aid Centre, to solve their personal and professional problems.</p>
    </>
  );

  const aimsAndObjectives = (
    <>
      <h4>General</h4>
      <p>Advocacy for Protection of Rights of the Visually impaired.</p>
      <h4>Specific:</h4>
      <ol>
        <li>To Educate: Government officials about the policy changes required for inclusion of the visually impaired in mainstream society; private manufacturers about the consumer rights of visually impaired consumers; and the visually impaired about their own rights.</li>
        <li>Set up legal aid cells for the blind</li>
        <li>Organize sensitization program for the stakeholders.</li>
      </ol>
    </>
  );

  const committeeMembers = (
    <>
      <h4>IST OF MEMBERS OF NAB SUB COMMITTEES 2022-2026</h4>
      <h5>NAB Advocacy Committee</h5>
      <ul>
        <li><strong>Chairman:</strong> Dr. Shishir Kumar Das</li>
        <li><strong>Honorary Secretary In-Charge:</strong> Shri Hemant J. Patil</li>
        <li><strong>Members:</strong></li>
        <ul>
          <li>Shri Ketan Kothari (E.C. Member)</li>
          <li>Shri Vijay Rathi (E.C. Member)</li>
          <li>Adv. Ashok Desai</li>
          <li>Adv. Amar Jain</li>
          <li>Adv.  Samir Sarambalkar</li>
          <li>Adv. Kanchan Pamnani</li>
          <li>Shri Harish Kotian</li>
          <li>Ms. Nidhi Goyal</li>
        </ul>
        <li><strong>Convenor:</strong> Ms. Bhavika Patil, Asstt. Manager & HOD</li>
      </ul>
    </>
  );

  const contactInfo = (
    <>
      <p><strong>Contact Person:</strong> Bhavika Patil, Asst. Manager & HOD</p>
      <p><strong>Contact No.:</strong> 9372766322</p>
      <p><strong>Email ID:</strong> advocacy@nabindia.info</p>
    </>
  );

  return (
    <ProjectPageLayout
      title="Advocacy"
      imageUrl="/images/Projects/advocacy.jpeg"
      history={history}
      aimsAndObjectives={aimsAndObjectives}
      committeeMembers={committeeMembers}
      contactInfo={contactInfo}
    />
  );
};

export default Advocacy; 