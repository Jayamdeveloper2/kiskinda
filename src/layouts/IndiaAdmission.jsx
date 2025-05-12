import React from 'react' 
import IndiaAdmissionPage from '../pages/IndiaAdmission/IndiaAdmissionPage'
import IndiaAdmissionBanner from '../assets/banner/india-admission-banner2.jpg';
import Banner from '../components/Banner/Banner';

const IndiaAdmission = () => {

   const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "India Admission", active: true }
  ];


  return (
    <div>

      <Banner
        backgroundImage={IndiaAdmissionBanner}
        title="India Admission"
        breadcrumbs={breadcrumbs}
      />

      <IndiaAdmissionPage />
    </div>
  )
}

export default IndiaAdmission
