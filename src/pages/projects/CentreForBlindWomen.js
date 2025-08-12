import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const CentreForBlindWomen = () => {
  const aimsAndObjectives = (
    <>
      <h3>NAB – DVK Music Academy</h3>
      <h4>Inauguration of the NAB – DVK Music Academy</h4>
      <p>
        The National Association for the Blind, India proudly launched the country’s first Music Academy for Visually
        Impaired Persons on 19th November 2019 at the NAB Rustom Merwanji Alpaiwalla Complex, Reay Road, Mumbai. The
        inauguration was graced by internationally acclaimed flute maestro Pt. Ronu Majumdar.
      </p>
      <p>This unique initiative offers free, high-quality training to visually impaired music enthusiasts in:</p>
      <ul>
        <li>Hindustani Classical, Vocal, and Light Music</li>
        <li>Musical instruments such as Harmonium, Guitar, Keyboard</li>
        <li>Percussion instruments including Tabla, Dholak, Dholaki, Octopad, and more</li>
        <li>Singing along with Karaoke Music Tracks for budding vocalists</li>
      </ul>
      <p>
        The Academy also houses its own orchestra, <strong>Golden Melodies</strong>, which performs at corporate events,
        cultural programmes, and private functions like birthdays.
      </p>
      <p>
        This project is generously supported by M/s <strong>Fermenta Biotech Ltd. (FBL)</strong> and is named in memory of
        FBL’s founder, Late Shri Datla Vasant Kumar.
      </p>
      <p>
        <strong>Address:</strong> NAB Rustom Merwanji Alpaiwalla Complex, Cotton Green Cotton Depot, Reay Road East, Near
        Railway Station, Mumbai
        <br />
        <strong>Contact:</strong> +91 93727 66322
        <br />
        <strong>Email:</strong> <a href="mailto:musicacademy@nabindia.info">musicacademy@nabindia.info</a>
      </p>

      <h4>How You Can Support</h4>
      <p>
        Your contribution can help us nurture the musical talents of visually impaired individuals and open doors to new
        opportunities. You can support by:
      </p>
      <ul>
        <li>Sponsoring instruments and music equipment</li>
        <li>Funding scholarships for talented students</li>
        <li>Inviting our orchestra for performances at your events</li>
        <li>Volunteering your time and expertise as a music trainer or mentor</li>
        <li>Making a donation to sustain and expand our programmes</li>
      </ul>
      <p>
        To support the NAB–DVK Music Academy, please contact us at
        <a href="mailto:musicacademy@nabindia.info"> musicacademy@nabindia.info</a> or call +91 93727 66322.
      </p>
    </>
  );

  return (
    <>
      <SEO
        title="NAB – DVK Music Academy - Music Training for Visually Impaired"
        description="India’s first music academy for visually impaired persons offering free, high-quality training in Hindustani classical, vocals, instruments, and percussion, with performances by the Golden Melodies orchestra."
        keywords="DVK Music Academy, NAB India, visually impaired music training, Hindustani classical, vocals, harmonium, guitar, keyboard, tabla, dholak, octopad, karaoke, Golden Melodies, Fermenta Biotech"
      />
      <ProjectPageLayout
        title="NAB – DVK Music Academy"
        imageUrl="/images/Projects/center-of-blind.png"
        aimsAndObjectives={aimsAndObjectives}
      />
    </>
  );
};

export default CentreForBlindWomen;
