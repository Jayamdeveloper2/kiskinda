import React from 'react'
import Banner from '../components/Banner/Banner'
import ContactBanner from '../assets/banner/contact-banner.jpg';
import DestinationPage from '../pages/Destinations/DestinationPage';
import CallToAction from '../pages/home/CallToAction/CallToAction';


import Ctabg from '../assets/cta-1.jpg';
import Bgdesign from '../assets/about-02.png';

const Destination = () => {

const breadcrumbs = [
  { label: "Home", link: "/" },
  { label: "Study Abroad", active: true }
];

  return (
    <div>
      
      <Banner
        backgroundImage={ContactBanner}
              title="Study Abroad"
              breadcrumbs={breadcrumbs}
       />

       <DestinationPage />

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

export default Destination
