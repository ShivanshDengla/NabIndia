import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const HomeForElderlyBlind = () => {
  const aimsAndObjectives = (
    <>
      <p>Established in 1970 by the National Association for the Blind (NAB) India, the Lions Home for the Aging Blind in Khandala is not just a place of shelter—it is a vibrant, nurturing community that brings hope, dignity, and empowerment to more than 75 visually impaired senior citizens.</p>
      <p>At the Home, our elderly residents find security, compassion, and a true sense of belonging. But beyond meeting their basic needs, we empower them to live with purpose.</p>
      <p>Residents actively participate in enriching activities such as:</p>
      <ul>
        <li>Knitting</li>
        <li>Embroidery</li>
        <li>Candle-making</li>
      </ul>
      <p>These meaningful engagements foster independence, enhance self-esteem, and offer a deep sense of fulfilment, allowing our elders to age with grace and pride.</p>
      <p><strong>“We believe that every elderly person, regardless of disability, deserves a life filled with dignity, love, and purpose.”</strong></p>
      
      <h4>How You Can Support</h4>
      <p>Your contribution can make a lasting difference in the lives of our visually impaired elders. You can support us by:</p>
      <ul>
        <li>Sponsoring a resident’s care (nutrition, medical aid, daily living)</li>
        <li>Funding assistive devices and recreational materials</li>
        <li>Donating toward infrastructure upkeep and accessibility upgrades</li>
        <li>Volunteering your time or skills for engagement activities</li>
        <li>Contributing in-kind (clothing, bedsheets, hygiene items, etc.)</li>
      </ul>
      <p>Whether as an individual, a corporate partner, or a donor, your support helps our senior residents lead lives of dignity and joy.</p>

      <p>To donate or partner with us, contact: <a href="mailto:nablionshome@gmail.com">nablionshome@gmail.com</a></p>
      <p>Contact numbers: <a href="tel:+919834285024">+91 98342 85024</a></p>
    </>
  );

  return (
    <>
      <SEO
        title="Lions Home for the Aging Blind, Khandala - NAB India"
        description="Discover the Lions Home for the Aging Blind in Khandala, a nurturing community for visually impaired senior citizens. We provide shelter, care, and empowering activities to ensure a life of dignity and purpose."
        keywords="Home for elderly blind, NAB India Khandala, Lions Home for the Aging Blind, senior care for visually impaired, elderly blind care India"
      />
      <ProjectPageLayout
        title="Lions Home for the Aging Blind, Khandala"
        imageUrl="/images/Projects/elderly-home.jpeg"
        aimsAndObjectives={aimsAndObjectives}
      />
    </>
  );
};

export default HomeForElderlyBlind;
