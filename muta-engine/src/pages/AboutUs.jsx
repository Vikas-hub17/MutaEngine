// src/pages/AboutUs.jsx
import React from 'react';
import Header from '../AboutUs/Header';
import Footer from '../AboutUs/Footer';
import ContactSection from '../AboutUs/Contact';
import MissionSection from '../AboutUs/Mission';
import Value from '../AboutUs/Value';
import WhatWeDoSection from '../AboutUs/WhatWeDo';
import WhoWeAreSection from '../AboutUs/WhoWeAre';
import WhyChooseUsSection from '../AboutUs/WhyChooseUs';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Header />
      <MissionSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <Value />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
