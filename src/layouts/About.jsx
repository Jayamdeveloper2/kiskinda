import React from 'react'
import Banner from '../components/Banner/Banner'
import ContactBanner from '../assets/banner/contact-banner.jpg';
import AboutKiskinda from '../pages/About/AboutKiskinda/AboutKiskinda';
import AboutProgram from '../pages/About/AboutProgram/AboutProgram';
import Universities from '../pages/About/Universities/Universities';
import QuoteSection from '../pages/home/QuoteSection/QuoteSection';
import CallToAction from '../pages/home/CallToAction/CallToAction';


import Ctabg from '../assets/cta-1.jpg';
import Bgdesign from '../assets/about-02.png';

const About = () => {

const breadcrumbs = [
  { label: "Home", link: "/" },
  { label: "About Us", active: true }
];

  return (
    <div>
      
      <Banner 
        backgroundImage={ContactBanner}
        title="About us"
        breadcrumbs={breadcrumbs} 
      />
      
      <AboutKiskinda />

      <AboutProgram />

      <Universities />

      <QuoteSection />

    <CallToAction
        title="Your Trusted Partner for Study Abroad Guidance"
        description="We help students pursue higher education overseas with expert support in university selection, applications, and visa processing for a smooth journey abroad."
        buttonText="Contact Now"
        buttonLink="/contact"
        imageSrc={Ctabg}
        bgImageSrc={Bgdesign}
    />

    </div>
  )
}

export default About
