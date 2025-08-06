import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';

const PreventionOfBlindness = () => {
  const history = (
    <>
      <p>“Prevention of Preventable and Cure of Curable Blindness” being one of its mission statements, NAB (India) set up the National Society for the Prevention of Blindness (NSPB) in 1959. Through the support of the Government and international funding agencies, NSPB made significant contribution to ophthalmic research and community eye health at the national level, and was eventually conferred autonomous status.</p>
      <p>The Prevention of Blindness Committee constituted by NAB (India) during 1976-77, collaborated with several international agencies to initiate sight restoration and prevention of malnutrition blindness programs, primarily in rural India and slums of Mumbai.</p>
      <p>In 1996, NAB (India) established its Department of Prevention of Blindness which in the course of time was named NAB Kaikhushroo J. Chinoy Centre for Prevention of Blindness & Low Vision.</p>
    </>
  );

  const aimsAndObjectives = (
    <>
      <p>Considering the fact that eye diseases are more prevalent among economically underprivileged and impoverished communities in India, the Department initiated in Mumbai, projects to detect and treat glaucoma, cataract and conjunctivitis and provide medication and spectacles to the needy.  An Optometrists conducts eye examination of the target groups with state-of-the-art ophthalmic equipment. Complex cases are referred to ophthalmic specialists for appropriate treatment – including surgery. This service is cost-free and happens in alliance with a vast network of ophthalmologists, hospitals and the Mumbai Municipal Corporation.</p>
      <h4>National-level Sight Restoration Programs</h4>
      <p>To save eyesight – of people who cannot afford eye-care – through best available eye treatment, the Department initiated: Project “Drishti” in December 2004, in collaboration with Reliance Foundation. The cornea transplant surgeries carried out under this project, have been successful in restoring sight of innumerable visually impaired individuals. Project “Seeing is Believing” for reversing cataract blindness, supported earlier by Standard Chartered, and later by ABN AMRO Bank; Mr. ManeckDavar of Spenta Multimedia; HE Mr. C. H. Kapadia, the Consul General of Madagascar; and late Parviz&Khorshed K. Mazgaonwalla has helped arrange 17,904 cataract operations.</p>
      <h4>Services to People with Low Vision</h4>
      <p>The Centre for Services to People with Low Vision (LV) set up by NAB (India) in the mid-nineties was merged with this Centre, which continues to provide special quality spectacles and low vision kits containing various optical and non-optical LV aids to people diagnosed with low vision.</p>
    </>
  );

  const committeeMembers = (
    <>
      <h5>NAB Prevention and Cure of Blindness &amp; Low Vision Services Committee</h5>
      <ul>
        <li><strong>Chairman:</strong> Dr. Tatyasaheb P. Lahane (lahanetp@gmail.com)</li>
        <li><strong>Honorary Secretary In-Charge:</strong> Smt. Prempooja Oberoi (prempooja@nabindia.info)</li>
        <li><strong>Members:</strong></li>
        <ul>
            <li>Shri Vijay Rathi (E.C. Member) (drvijayrathi@gmail.com)</li>
            <li>Dr. Asit M. Gore (drasitgore@hotmail.com)</li>
            <li>Dr. G. Chandrasekhar (kbhb@rediffmail.com)</li>
            <li>Dr. Radhika Krishnan (drradhika.giffle@gmail.com)</li>
            <li>Dr. Himika Gupta (himika.gupta@gmail.com)</li>
            <li>Dr. Prema K. Chande (prema@lcoo.edu.in)</li>
            <li>Shri Jayram Mendon (jaymendon@yahoo.com)</li>
        </ul>
        <li><strong>Convenor:</strong> Shri Arvind Narvekar, Dy. Director</li>
      </ul>
    </>
  );

  const contactInfo = (
    <>
      <h4>What can you do?</h4>
      <p>Sponsor for Cataract/Squint Surgeries, Spectacles (Distant Vision/Bio-focal/Hi-Index), special Aids for the Low Vision Persons.</p>
      <p><strong>Contact Person:</strong> Mr. Arvind Narvekar, Deputy Director & HOD</p>
      <p><strong>Mobile No.:</strong> 9372766321 / 9969147065</p>
      <p><strong>Landline No.:</strong> 022-2435370/2820/5365 Ext.248/221</p>
      <p><strong>Email ID:</strong> prevention@nabindia.info</p>
    </>
  );

  return (
    <ProjectPageLayout
      title="Prevention Of Blindness And Low Vision"
      imageUrl="/images/Projects/prevention.jpg"
      history={history}
      aimsAndObjectives={aimsAndObjectives}
      committeeMembers={committeeMembers}
      contactInfo={contactInfo}
    />
  );
};

export default PreventionOfBlindness;
