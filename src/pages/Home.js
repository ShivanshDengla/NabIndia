import React from 'react';
import Hero from '../components/Hero';
import BrandAmbassador from '../components/BrandAmbassador';
import Supporters from '../components/Supporters';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="NAB India - Home"
        description="Welcome to the official website of the National Association for the Blind (NAB) India. Discover our mission to empower the visually impaired and learn how you can get involved."
        keywords="NAB India, National Association for the Blind, home, empowerment, visually impaired, non-profit India"
      />
      <Hero />
      <BrandAmbassador />
      <Supporters />
    </>
  );
};

export default Home;
