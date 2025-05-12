import React from 'react'
import ContactPage from '../pages/Contact/ContactPage'
import ContactBanner from '../assets/banner/contact-banner.jpg';
import Banner from '../components/Banner/Banner';


const Contact = () => {
 
const breadcrumbs = [
  { label: "Home", link: "/" },
  { label: "Contact Us", active: true }
];

  return (
    <div>

       <Banner 
        backgroundImage={ContactBanner}
        title="Contact Us"
        breadcrumbs={breadcrumbs}
      />

        <ContactPage />
      
    </div>
  )
}

export default Contact
