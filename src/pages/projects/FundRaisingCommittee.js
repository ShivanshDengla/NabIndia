import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';

const FundRaisingCommittee = () => {
  const history = (
    <>
      <p>A key issue faced by any voluntary agency is monetary resources. That it would be heavily dependent on donors to accomplish its mission was the fact NAB (India) realized right at the start, and therefore in its initial years itself set up the Finance Raising Committee (FRC) under the leadership Mrs. Queenie H. C. Captain as the Chairperson and Mrs. Shehera F. D. Nanavati as the Vice Chairperson.</p>
    </>
  );

  const aimsAndObjectives = (
    <>
      <p>The FRC team utilizes a variety of methods to generate vital resources. Major resource mobilization is carried out through Corporate Social Responsibility (CSR), schools, and high-networth individuals.  Principals and students are felicitated every year, for their efforts in raising funds for NAB (India).  FRC also organizes for school students. Visits to NAB (India) Braille Press and Talking Book Centre with a view to help them realize the importance of education for sightless children and how they can help NAB to help the visually impaired. </p>
      <p>Each year on September 14, FRC organizes the All India Flag Day for the Blind. To mark the occasion, NAB (India) delegation calls on important personalities in Mumbai – the Governor, the Mayor, the chiefs of Indian Army and Navy bases in the city, heads of public and private sector establishments etc. – to pin the Flag.  Flag Day, besides fund-raising, is observed to create awareness in the society about the abilities, potential and the needs of visually impaired persons, particularly those related to their education, rehabilitation and employment.</p>
      <p>FRC has been participating in Tata Mumbai Marathon since 2016.  TMM and their Philanthropy partner United Way Mumbai help participating NGOs like NAB to raise funds for their cause.</p>
    </>
  );

  const committeeMembers = (
    <>
      <h4>List of Committee Members:</h4>
      <ul>
        <li><strong>Chairman:</strong> Shri Hemant Takle</li>
        <li><strong>Hon. Secretary In-Charge:</strong> Shri Anil Mittal</li>
        <li><strong>Members:</strong></li>
        <ul>
          <li>Dr. Vimal Kumar Dengla</li>
          <li>Shri Ramakant Satam</li>
          <li>Shri Kaushal Mishra</li>
        </ul>
        <li><strong>Convenor:</strong> Shri Arvind V. Narvekar</li>
      </ul>
    </>
  );

  const contactInfo = (
    <>
      <p><strong>Contact Person:</strong> Mr. Arvind Narvekar, Deputy Director & HOD</p>
      <p><strong>Mobile Nos.:</strong> 9372766321/9969147065</p>
      <p><strong>Landline Nos.:</strong> 022-22045482</p>
      <p><strong>Email ID:</strong> frc@nabindia.info</p>
    </>
  );

  return (
    <ProjectPageLayout
      title="Fund Raising Committee"
      imageUrl="/images/Projects/fundraising-committee.jpeg"
      history={history}
      aimsAndObjectives={aimsAndObjectives}
      committeeMembers={committeeMembers}
      contactInfo={contactInfo}
    />
  );
};

export default FundRaisingCommittee;
