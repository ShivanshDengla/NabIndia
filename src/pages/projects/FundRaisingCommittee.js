import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const FundRaisingCommittee = () => {
  const history = (
    <>
      <h4>History</h4>
      <p>A key issue faced by any voluntary agency is monetary resources. That it would be heavily dependent on donors to accomplish its mission was the fact NAB (India) realized right at the start, and therefore in its initial years itself set up the Finance Raising Committee (FRC) under the leadership Mrs. Queenie H. C. Captain as the Chairperson and Mrs. Shehera F. D. Nanavati as the Vice Chairperson.</p>
    </>
  );

  const activities = (
    <>
      <h4>Activities</h4>
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
      <h4>Contact details:</h4>
      <p><strong>Contact Person:</strong> Mr. Arvind Narvekar, Deputy Director & HOD</p>
      <p><strong>Mobile Nos.:</strong> 9372766321/9969147065</p>
      <p><strong>Landline Nos.:</strong> 022-22045482</p>
      <p><strong>Email ID:</strong> frc@nabindia.info</p>
    </>
  );

  return (
    <>
      <SEO
        title="Fund Raising Committee - NAB India"
        description="Learn about the NAB India Fund Raising Committee (FRC) and our efforts to generate vital resources through CSR, donations, and events like the All India Flag Day for the Blind."
        keywords="NAB India fundraising, Fund Raising Committee, donate to NAB India, CSR for blind, All India Flag Day for the Blind"
      />
      <ProjectPageLayout
        title="Fund Raising Committee"
        imageUrl="/images/Projects/fundraising-committee.jpeg"
        history={history}
        aimsAndObjectives={activities}
        additionalContent={committeeMembers}
        contactInfo={contactInfo}
      />
    </>
  );
};

export default FundRaisingCommittee;
