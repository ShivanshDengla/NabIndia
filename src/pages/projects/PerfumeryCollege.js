import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const PerfumeryCollege = () => {
  const history = (
    <p>NAB Perfumery College is an initiative of National Association for the Blind, a new avenue for the visually challenged persons in the Fregrance Industry. NAB, India has always pioneered new avenues for the visually challenged persons. Considering their smelling strength this avenue has been initiated so that they are trained and placed in the mainstream industry as perfume tester, perfume evaluator and quality control.</p>
  );

  const aimsAndObjectives = (
    <>
      <h4>What Is The NAB Perfumery College?</h4>
      <p>NAB Perfumery College is a unique educational initiative by the National Association for the Blind, India. Our college was incepted to help enrich the lives of visually challenged people and to open them up to the world of perfumery. Our course is specifically designed for visually challenged people – and those with a keen sense of smell. The Fragrance Program is a 2-year Diploma which provides its students with an advanced education and the potential for employment within the fragrance industry. </p>

      <h4>Our Mission</h4>
      <p>Our mission is to ensure that every blind or low vision child has access to formal education in an appropriate environment and is provides all the support services necessary for academic excellence and all-round employment development.</p>

      <h4>NAB PERFUMERY COLLEGE COURSE DETIALS</h4>
      <p><strong>Course Tenure:</strong> 2 years Diploma consisting of 4 modules. Our syllabus is from basic to advanced perfumery. After every module there will be assessment and successful students will be certified.</p>
      <p><strong>Course Eligibility:</strong> Visually challenged students, Minimum Xth Std. Pass, with basic knowledge of spoken and written English.</p>
      <p>Who can communicate well and are determined to learn, have a keen sense of smell and a zeal to work hard.</p>
      <p><strong>Age Eligibility:</strong> 16 to 35 years</p>
      <p><strong>Venue:</strong> National Association for the Blind; Worli, Mumbai– Head Office</p>
      <p><strong>Course Timing:</strong> 1 pm to 5 pm (Monday to Friday)</p>
      <p><strong>Course Materials:</strong> Perfumery books/notes with audio support and E-books will be provided.</p>
      <p><strong>Added training:</strong> Along with perfumery training to encourage independent working the students will be trained in using computers, English, soft skills, personality development, orientation and mobility.</p>
      <p><strong>Course Benefits:</strong> Graduates of the college can move into professional careers in the Indian fragrance industry, in roles such as trainee evaluators, fragrance selectors, QC technicians, and many more.</p>

      <h4>1st BATCH GRADUATION CEREMONY:</h4>
      <p>We have successfully completed of 17 students, who were felicitated by Hon’ble Governor of Maharashtra Shri Bhagat Singh Koshyari at Rajbhavan, on 20th August, 2021.</p>

      <h4>PLACEMENT:</h4>
      <p>We have placed around 10 students from 1st Batch, as “Perfume Evaluator”, CPL Aroma, AESTHESIS Foundation, SIGMA etc. </p>
    </>
  );

  const contactInfo = (
    <>
      <h4>How Can You Help?</h4>
      <p>We welcome all businesses and institutes to Partner with us:</p>
      <ul>
        <li>To supply training materials and finished products for the classes.</li>
        <li>Employee volunteering their service/support to the students.</li>
        <li>To assist in organizing training programs to enrich the curriculum and further support student’s employability.</li>
        <li>To support us in the funding of the Program or making it a part of your CSR.</li>
      </ul>
      
      <h4>How Can the Fragrance Industry Help?</h4>
      <p>We warmly welcome all fragrance industry partners to work with us:</p>
      <ul>
        <li>We would also welcome professional corporate members to conduct various seminars, workshops and training programs for the students. Industry visits & insight will be invaluable to their learning.</li>
        <li>To supply training materials and finished products for the classes.</li>
        <li>To participate as guest teachers/lecturers</li>
        <li>To provide employment/ internship opportunities for graduates.</li>
        <li>Employee volunteering their service/support to the students.</li>
        <li>To help graduates move into professional careers in the Indian fragrance industry, in roles such as trained evaluators, fragrance selectors, QC technicians, and many more.</li>
      </ul>

      <p><strong>NAB PERFUMERY COLLEGE</strong></p>
      <p>11/12, Khan Abdul Gaffar Khan Road, Worli Seaface Mumbai – 400030</p>
      <p>Tel: +9122 24918528 / 9372766313 Ext.246/220</p>
      <p>Email: perfumerycollege@nabindia.info</p>
      <img src="/images/Projects/perfumery-college-2.jpg" alt="VI smelling in laboratory" style={{ width: '100%', marginTop: '20px', marginBottom: '10px' }} />
      <p style={{ textAlign: 'center', fontStyle: 'italic' }}>VI smelling in laboratory</p>
    </>
  );

  return (
    <>
      <SEO
        title="NAB Perfumery College - Training for the Fragrance Industry"
        description="The NAB Perfumery College offers a unique 2-year diploma for visually challenged individuals, training them for careers as perfume testers, evaluators, and QC technicians in the fragrance industry."
        keywords="NAB Perfumery College, fragrance industry jobs for blind, perfume tester training, perfumery diploma for visually impaired, careers in fragrance"
      />
      <ProjectPageLayout
        title="Perfumery College"
        imageUrl="/images/Projects/perfumery-college.jpg"
        history={history}
        aimsAndObjectives={aimsAndObjectives}
        contactInfo={contactInfo}
      />
    </>
  );
};

export default PerfumeryCollege;
