import React from 'react'
import Hero from '../pages/home/hero/hero'
import About from '../pages/home/about/About'
import StudyDesitination from '../pages/home/StudyDestinations/StudyDesitination'
import Programs from '../pages/home/Programs/Programs'
import Universities from '../pages/About/Universities/Universities'
import HomeTestimonial from '../pages/home/HomeTestimonial/HomeTestimonial'
import QuoteSection from '../pages/home/QuoteSection/QuoteSection'
import CallToAction from '../pages/home/CallToAction/CallToAction'
import Services from '../pages/home/Services/Services'
import IndiaAdmission from '../pages/home/IndiaAdmission/IndiaAdmission'

import Ctabg from '../assets/cta-1.jpg';
import Bgdesign from '../assets/about-02.png';

const Home = () => {
  return (
    <div>
      <Hero />
      
      <About />

      <Services />

      <StudyDesitination />

      <Programs />

      {/* <Universities /> */}

      {/* <HomeTestimonial /> */}
      
      <IndiaAdmission />
      
      <QuoteSection />

      <CallToAction 
        title="Your Trusted Partner for Study Abroad Guidance"
        description="We help students pursue higher education overseas with expert support in university selection, applications, and visa processing for a smooth journey abroad."
        buttonText="Contact Now"
        buttonLink="/contact"
        imageSrc={Ctabg}  // Dynamic image for the CTA section
        bgImageSrc={Bgdesign}  // Background image for the CTA section
      />
    </div>
  )
}

export default Home
