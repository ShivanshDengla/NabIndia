import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';

const ClientService = () => {
  const history = (
    <p>Malnutrition, limited or no access to education, healthcare, sanitation etc., is highly prevalent among lower socio-economic classes. Such inferior living conditions lead to poor health, which in turn can trigger blindness. Underprivileged visually impaired (VI) persons have very little help at hand to take care of their needs. To deal with this problem, NAB (India) set up in June 1992 the Service Delivery Committee which established the Client Service Department (CSD) in 1994. Ever since, the Department has been providing direct and timely assistance and guidance to innumerable VI persons, to solve their day-to-day issues.</p>
  );

  const aimsAndObjectives = (
    <>
      <h4>Identification and Referral Service</h4>
      <p>Newly VI persons and those VI individuals who have never had exposure to welfare activities are identified and referred to appropriate Department/s of NAB (India) and other institutions. Counselling, guidance and referral service is offered to the clients for availing financial, educational, medical and other facilities offered by State/Central Government agencies and other voluntary organizations. We also help them to have their online registration to get their disability certified and getting Unique Disability Identity Card through Government of India.</p>
      <p>Our Rehabilitation officer accesses mental and cognitive capacities of the VI persons. Provide them personal and family counselling and convince them to achieve their self-sufficiency and self-dependency and help them to select proper avenues of their self-sufficiency. Whenever required we try to solve the problems faced by them in their family and society. We were accessing the at most need of the VI person and fully supported him to protect his equal opportunities, full participation & protection of rights.</p>

      <h4>Financial Assistance</h4>
      <p>The Department gives financial assistance to meet expenses on medical care, education of VI children/children of needy VI parents, starting a small business and for any other unforeseeable circumstances.</p>

      <h4>Promoting Self-Employment</h4>
      <p>CSD encourages VI persons to take up self-employment by providing them equipment like weighing scales, sewing machines, domestic grain mill etc., which they operate with family support and make a decent livelihood for themselves. These equipments are provided at cost/free of charge through donor support. Assistance in kind is also offered by providing sponsored/donated cutlery items, toys etc., which the client sells at railway stations and other places of public movement. We also access the new avenues of self-employment by which our client can achieve self-employment in his or her society.</p>

      <h4>Rehabilitation of destitute VI persons</h4>
      <p>The Department takes charge of destitute visually impaired/multi-disabled visually impaired individuals and then rehabilitates them or finds them permanent shelter, through various welfare agencies.</p>

      <h4>Aids and Equipment</h4>
      <p>Aids and appliances like white canes, Fiber canes are sold at cost to VI individuals. Also, needy VI students are provided MP3 recorders. Subject to donor support, these items are at times given gratis to deserving clients. Through service clubs, multi-handicapped VI children are offered equipment like exercise cycles, gym balls, CP (Cerebral Palsy) chairs, working tables etc.</p>

      <h4>Advocacy Initiatives</h4>
      <p>The Department has been instrumental in acquiring a variety of concessions/facilities for the VI through advocacy with concerned agencies. To mention a few – the facility of special compartment for disabled persons in Mumbai’s local railway, 50% exemption in telephone rental for VI persons in the MTNL and BSNL landline connections, concessions in the rail tariff for AC and non-AC classes etc. Besides, grievances of VI clients are taken up with appropriate authorities and resolved amicably. It is only because of the intervention of the NAB Client Service Department, the Hon’ble High Court of Mumbai reaffirmed job reservation – provided under the PwD Act 1995 – for the disabled.</p>

      <h4>Other Services</h4>
      <p>These include – Personal grooming, teaching mobility, providing training of talking software like JAWS etc.; accessing android mobile phone, encouraging VI persons to participate in sports, Musical competitions, Dance & singing competition,  elocution competitions and developing other competitive skills by participating in various events, provision of blindness certificates and other documents essential for availing travel concessions and tax exemptions; arranging camps for Low Vision (LV) Assessment and free-distribution of LV Aids, awareness-raising through media etc.</p>
      <p>From 3rd December, 2022 We are positively working on spreading of the benefits of the government, semi government, local agencies and NGO services schemes to the tribal, rural, semi urban and urban pockets in the corners of Maharashtra for which we are taking the advantage of social media by creating a whatsapp group “Gramin Andh Sashaktikaran” (which includes the elite active persons who can spread the messages for the benefit of the disabled in their areas and localities). We have also developed a video “Government Resolutions and schemes for the visually impaired persons “which advertises NAB India and Client Service Department activities along with the Central & state government resolutions through which disabled people are empowered to be active members of the society and participate in the development of our country.</p>
      <p>We have also written and recorded audios of the successful VI people who have achieved greater heights in their lives in spite of their visual impairment and they are capable of being an idol to the upcoming VI persons. The stories and articles inspire the VI persons to have awareness of their capabilities and plan their future developmental process. The most appreciable work done by our department to highlight the contribution of Mrs. Rehmat Fazalbhoy in developing services for the welfare of VI persons in our country with the banner of NAB, India and Dr. Nilkanth Rai Chhatrapati’s contribution to develop services for the welfare of the VI persons in India. The articles are in Hindi & Marathi languages which can easily be understood by the common VI persons of our country.</p>
      <p>From last 3 years total 14,080 VI beneficiaries have benefited by the service of Client Service Department.</p>
    </>
  );

  const committeeMembers = (
    <>
      <h4>NAB Service Delivery Programmes Committee</h4>
      <ul>
        <li><strong>Chairman:</strong> Shri. Anish Mehta</li>
        <li><strong>Honorary Secretary In-Charge:</strong> Shri. Hemant J. Patil</li>
        <li><strong>Members:</strong></li>
        <ul>
          <li>Shri. Vijay Kajrolkar (E.C. Member)</li>
          <li>Mrs. SudhaTumbe</li>
          <li>Ms. Radhika Ram</li>
          <li>Shri. Suhas Karnik</li>
          <li>Shri. Kutubuddin Patrawala</li>
          <li>Ms.Vaijayanti Shah</li>
        </ul>
        <li><strong>Convenor:</strong> Mrs. Bhavika Patil, Asstt. Manager</li>
      </ul>
    </>
  );

  const contactInfo = (
    <>
      <h4>What You Can Do</h4>
      <p>You can: contribute money to help us assist a VI person to become self-employed; sponsor special aids and appliances for the VI persons; volunteer to read out to and write for VI people or take them shopping; share with us your professional expertise to help us make a difference to the lives of people with sight loss.</p>
      <p><strong>Contact Person:</strong> Bhavika Patil, Asst.Manager & HOD</p>
      <p><strong>Contact No.:</strong> 9372766322</p>
      <p><strong>Email ID:</strong> clientservice@nabindia.info</p>
    </>
  );

  return (
    <ProjectPageLayout
      title="Client Service"
      imageUrl="/images/Projects/client-services.jpg"
      history={history}
      aimsAndObjectives={aimsAndObjectives}
      committeeMembers={committeeMembers}
      contactInfo={contactInfo}
    />
  );
};

export default ClientService;
