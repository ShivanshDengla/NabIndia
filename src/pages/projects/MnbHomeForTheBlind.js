import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const MnbHomeForTheBlind = () => {
  const history = (
    <>
      <h4>Background</h4>
      <p>Established on July 16, 1956, The Muncherjee Nowrojee Banajee Industrial Home for the Blind (MNB) stands as a living monument to the generosity of the late Serenbai Banajee, who graciously donated her bungalow in memory of her father. Her vision was to create a residential, industrial, and vocational training centre for visually challenged men.</p>
      <p>In keeping with her noble intent, the institution was formally registered under the Bombay Public Trust Act, 1950.</p>
      <p>Today, MNB continues to uphold this legacy by running a centre for visually impaired (VI) and additional disabilities with visually impaired (MDVI) children, as well as offering diverse programs for VI adults. These include vocational skills training, IT courses, and other development initiatives aimed at enabling self-reliance and empowerment</p>
    </>
  );

  const aimsAndObjectives = (
    <>
      <h4>Vision & Mission</h4>
      <p>Every visually impaired person leads an independent life and becomes a contributory member of society.</p>
      <p>To empower visually impaired individuals through:</p>
      <ul>
        <li>Comprehensive vocational or IT training</li>
        <li>Providing the necessary infrastructure and working capital support best suited to each individual’s capabilities</li>
        <li>Enabling them to improve their quality of life and become self-reliant</li>
        <li>Instilling a sense of social responsibility with the motto: "Each One Reach One"</li>
      </ul>
    </>
  );

  const galleryImages = [
    { src: '/images/Projects/mnb-2.jpg', alt: 'MNB Project Image' },
    { src: '/images/Projects/mnb-3.jpg', alt: 'MNB Project Image' },
    { src: '/images/Projects/mnb-4.jpg', alt: 'MNB Project Image' },
  ];

  const contactInfo = (
    <>
      <h4>Contact Details</h4>
      <p>26793688/ 26791487/ +91 9004319934</p>
      <p>
        MNB INDUSTRIAL HOME FOR THE BLIND <br />
        280 S V ROAD NEAR BUS DEPOT <br />
        JOGESHWARI (W) MUMBAI 400102 <br />
        M-90043 19934 <br />
        mnbhome280@gmail.com
      </p>
    </>
  );

  return (
    <>
      <SEO
        title="MNB Home for the Blind - Vocational Training & Empowerment"
        description="The Muncherjee Nowrojee Banajee (MNB) Industrial Home for the Blind provides vocational training, IT courses, and other development programs to empower visually impaired men and children."
        keywords="MNB Home for the Blind, NAB India, vocational training for blind men, IT courses for visually impaired, empowerment for disabled"
      />
      <ProjectPageLayout
        title="MNB Home for the Blind"
        imageUrl="/images/Projects/mnb.png"
        imageAlt="Dr. Vimal Kumar Dengla with Actress Tapsee Pannu"
        history={history}
        aimsAndObjectives={aimsAndObjectives}
        contactInfo={contactInfo}
        galleryImages={galleryImages}
      />
    </>
  );
};

export default MnbHomeForTheBlind; 