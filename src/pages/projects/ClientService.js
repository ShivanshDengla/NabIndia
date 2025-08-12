import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const ClientService = () => {
  const history = (
    <>
      <h4>History</h4>
      <p>
        Client Service Department(CSD) was established in 1994. Ever since, the Department has been providing direct and timely assistance and guidance to innumerable VI persons, to solve their day-to-day issues.
      </p>
    </>
  );

  const services = (
    <>
      <h4>Services Provided</h4>
      <p>The department provides need-based services to visually impaired individuals, such as:</p>
      <ul>
        <li>Issuing concession certificates for rail/air travel.</li>
        <li>Providing referrals for medical aid, education, and employment.</li>
        <li>Assisting with housing and legal matters.</li>
        <li>Distributing assistive devices.</li>
      </ul>
    </>
  );

  const contactInfo = (
    <>
      <h4>Contact details:</h4>
      <p>Email: clientservice@nabindia.info</p>
      <p>Mobile: 9372766322</p>
    </>
  );

  return (
    <>
      <SEO
        title="Client Services - NAB India"
        description="The Client Service Department at NAB India provides direct assistance and guidance to visually impaired individuals, helping them with concessions, referrals, and assistive devices."
        keywords="NAB India client services, support for visually impaired, rail concessions for blind, assistive devices for visually impaired, medical aid for blind"
      />
      <ProjectPageLayout
        title="Client Service"
        imageUrl="/images/Projects/client-services.jpg"
        history={history}
        aimsAndObjectives={services}
        contactInfo={contactInfo}
      />
    </>
  );
};

export default ClientService;
