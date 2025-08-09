import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const VocationalTraining = () => {
  const history = (
    <>
      <h4>INTRODUCTION</h4>
      <p>
        The National Association for the Blind (NAB) is a voluntary organization working for the welfare of the visually impaired since 1952. In 1985, with the financial assistance from the Industrial Development Bank of India (IDBI), the NAB has established a Polytechnic for the Visually Impaired at Ambarnath. This Polytechnic was inaugurated by the then Prime Minister of India, Late Shri Rajiv Gandhi. The Polytechnic with a capacity of 100 trainees aims to train the visually impaired youths on sophisticated machinery based on specially drafted technical trades. So far, it has trained a sizeable number of candidates from all over India. Some of them have been successfully employed in factories and workshops.
      </p>
    </>
  );

  const aimsAndObjectives = (
    <>
      <h4>Purpose</h4>
      <p>
        A person who loses the most precious gift of God (sight) tends to become frustrated. He needs proper counseling, guidance, and training to boost up his confidence. Keeping this view in mind, the NAB has taken up this challenging training programme through which it would be possible to rehabilitate this unprivileged section of society socio-economically.
      </p>
      <h4>Objective</h4>
      <p>
        The Centre proposes to provide one year apprenticeship to the visually impaired trainees who pass out from the Polytechnic on completion of a one-year course as "Workshop Machine Operator." This will train them to become skilled workers and to be adapted to a regular workshop environment. Visually impaired persons are also trained to operate plastic molding machines, assemble various types of mechanical and electrical equipment, and make office files.
      </p>
      <p>
        The Centre also provides vocational training for developing 20 visually impaired persons per year in the Entrepreneurship Development Programme. It also collects bulk orders for training purposes from leading industries. The Centre provides work experience to the visually impaired under factory conditions. This prepares the visually impaired for independent self-employment or to start their own business or co-operative enterprises.
      </p>
      <h4>Benefits</h4>
      <p>
        The project benefits approximately 50 visually impaired annually. The trained entrepreneurs will be able to run a concern efficiently on commercial and business lines with modern management techniques, even if they do not succeed in getting appropriate jobs. The two-year training which the NAB-IDBI Polytechnic imparts is more or less on the line of Government ITIs. But the trained students are not absorbed by big industrial works as apprentices like their sighted counterparts. The Centre will thus meet this pressing need.
      </p>
    </>
  );

  const contactInfo = (
    <>
      <h4>Where do you come into picture?</h4>
      <p>
        The total recurring expenditure to run the project is worked out to Rs. 90 lakhs a year. As against this, the income from work orders is estimated at approximately Rs. 15 lakhs per year. The project is likely to be financially self-supporting once it gathers momentum. Meanwhile, the Project needs help from philanthropists like you.
      </p>
      <h4>WHAT A TRAINED VISUALLY IMPAIRED CAN DO FOR YOU</h4>
      <ol>
        <li>Assembly work of different electrical/mechanical equipment.</li>
        <li>Sorting/Inspection work (by snap gauge, go-no gauges, etc).</li>
        <li>Can work as an operator on Workshop Machines such as Lathe, Shaping, Milling, Drilling, Power & Hand presses, Plastic Molding, suitable for carrying out repeated operations (mass production work) once the machine is set by Supervisor.</li>
      </ol>
      <h4>You Can Help Us By</h4>
      <ol>
        <li>You may donate in cash or kind.</li>
        <li>You may absorb the trained youth in your organization.</li>
        <li>You may provide us your work orders.</li>
        <li>You may donate one day's meal on the day of your choice: Upahaar Yojana.</li>
        <li>You may donate Student uniforms, welcome kit, or sponsor sports, tours, etc.</li>
        <li>You may purchase the products manufactured by our Visually Impaired trainees i.e. Office Files, White Cane, etc.</li>
      </ol>
      <h4>Appeal</h4>
      <p>
        We seek your help in reducing the burden of NAB by way of sponsoring a day's meals "Upahaar Yojana" which costs just Rs. 7000/-. As you are aware NAB is already under pressure on account of its countrywide activities. 30% of annual expenditure is met by reimbursement from the state government and the balance comes through donations and internal accruals by way of job orders procured by the centre.
      </p>
      <p>
        Your sponsorship for a Day's Meal will not only give you an opportunity to help the less privileged but also to do a worthy deed for a noble cause. Your sponsorship is exempted from Income Tax under relevant provisions.
      </p>
      <p>
        Donations paid are exempted from Income Tax as per the prescribed rules of Income Tax (under 80-G) Act.
      </p>
      <h4>Contact us today</h4>
      <p>NAB-IDBI POLYTECHNIC</p>
      <p>An activity of The National Association for the Blind (I)</p>
      <p>Plot No. A-52/53, Addl. Ambarnath, MIDC, Anandnagar, Ambarnath (E) Pin – 421 506.</p>
      <p>Phone: 7823085847</p>
      <p>E-mail: idbipolytechnic@nabindia.info</p>
      <h4>Bank Details:</h4>
      <p>NAME: NATIONAL ASSOCIATION FOR THE BLIND, (I)</p>
      <p>BANK: BANK OF INDIA</p>
      <p>A/C NO.: 007210100012776</p>
      <p>IFS CODE: BKID0000072</p>
    </>
  );

  return (
    <>
      <SEO
        title="NAB-IDBI Polytechnic - Vocational Training for the Visually Impaired"
        description="Discover the NAB-IDBI Polytechnic in Ambarnath, offering vocational training for visually impaired youth in technical trades, machine operation, and entrepreneurship to foster socio-economic rehabilitation."
        keywords="Vocational training for blind, NAB-IDBI Polytechnic, technical training for visually impaired, machine operator course for blind, entrepreneurship development for disabled"
      />
      <ProjectPageLayout
        title="Vocational Training"
        imageUrl="/images/Projects/vocational-training.jpeg"
        history={history}
        aimsAndObjectives={aimsAndObjectives}
        contactInfo={contactInfo}
      />
    </>
  );
};

export default VocationalTraining;
