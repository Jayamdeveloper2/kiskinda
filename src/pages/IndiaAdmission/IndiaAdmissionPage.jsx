import React from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaUniversity, FaLaptop, FaCheckCircle, FaUserGraduate, FaSearchLocation } from 'react-icons/fa';
import './IndiaAdmissionPage.css'

import IndiaAdmisionImage from '../../assets/india-admission1.jpg';

const IndiaAdmissionPage = () => {
 
  return (
    <div>
   

      <div className="skill-area">
        <div className="container">
          <div className="skill-wrap">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="skill-img wow fadeInLeft" data-wow-delay=".25s">
                  <img src={IndiaAdmisionImage} alt="thumb" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="skill-content wow fadeInUp" data-wow-delay=".25s">
                  <span className="site-title-tagline">
                    <FaPassport style={{ marginRight: '8px' }} /> India Admission
                  </span>
                  <h2 className="site-title mb-3">
                    KISKINDA Offers Study Abroad &nbsp;<span>India Admission</span>
                  </h2>
                  <p className="skill-text">
                    KISKINDA also facilitates STUDY ABROAD and India Admission For both On
                    campus Courses and Online Degree.
                  </p>
                  <p className="skill-text">
                    For India Admission you can directly apply through our portal and your
                    application will be submitted to the respective University or College  
                    and our Counsellor will guide you admission Process.
                  </p>

                  {/* Special University Count Badge */}
                  <div className="university-badge">
                    <FaUniversity className="badge-icon" />
                    <span className="badge-text">INDIA ON CAMPUS ADMISSION: 1200+ UNIVERSITIES</span>
                  </div>

                  <div className='hero-buttons mt-1'>
                    <Link to="/find-course" className="theme-btn1 ">
                      Find a Course <i className="fas fa-circle-arrow-right"></i>
                    </Link>
                    <Link to="/signup" className="theme-btn2">
                      Sign up <i className="fas fa-circle-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="process-area pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
              <span className="site-title-tagline">
                <FaPassport style={{ marginRight: '8px' }} /> Why INDIA Admission with KISKINDA?
              </span>
              <h2 className="site-title">India's <span>Trusted Admission Support</span> Platform</h2>
              <p className="mt-3">
                1200+ UNIVERSITIES | Direct University Connection | Application Support |
                July - August Intakes | Course Finder Available
              </p>
            </div>
          </div>
        </div>

        <div className="row wow fadeInUp mt-4" data-wow-delay=".25s">
          <div className="col-md-6 col-lg-4">
            <div className="process-item">
                <span className='count'>01</span>
              <div className="process-icon">
                <FaUniversity className="process-svg" />
              </div>
              <div className="process-content">
                <h4>University Category</h4>
                <p>
                 <strong>A+ Universities</strong> : BITS Pilani, SB JAIN, Christ, IMT, Medical<br />
                  <strong>‘A’ Category</strong>: Amity, Galgotia and more
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="process-item mt-md-0 mt-lg-5">
            <span className='count'>02</span>
              <div className="process-icon">
                <FaLaptop className="process-svg" />
              </div>
              <div className="process-content">
                <h4>Online India Admission</h4>
                <p>
                  150+ Institutes including IIM, IIITs offering UGC & AICTE
                  recognized Online Degrees
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="process-item mt-lg-0 mt-lg-3">
              <span className='count'>03</span>
              <div className="process-icon">
                <FaCheckCircle className="process-svg" />
              </div>
              <div className="process-content">
                <h4>Degree Validity & Fees</h4>
                <p>
                  Degrees Equivalent to Regular Programs<br />
                  Affordable Fee Structure & Easy Access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="service-area pt-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto wow fadeInDown" data-wow-delay=".25s">
        <div className="site-heading text-center">
          <span className="site-title-tagline">
            <FaUniversity /> Why Us
          </span>
          <h2 className="site-title">
            We Provide <span>Complete Admission Support</span>
          </h2>
        </div>
      </div>
    </div>
    <div className="service-wrap wow fadeInUp" data-wow-delay=".25s">
      <div className="row g-4 g-lg-0">
        {/* Service Item 1 */}
        <div className="col-md-6 col-lg-4">
          <div className="service-item">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="service-icon">
                  <FaUserGraduate size={40} />
                  
                </div>
                <span className="count">01</span>
              </div>
              <div className="col-9">
                <div className="service-content">
                  <h4 className="service-title">Why Choose Us?</h4>
                  <p className="service-text">
                    150+ Institutes, Direct Top University Connections, Pre &
                    Post Admission Support, Portfolio Building, Scholarships,
                    Student Loan Help, Job Assistance, and a Course Finder in
                    Our Portal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Item 2 */}
        <div className="col-md-6 col-lg-4">
          <div className="service-item">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="service-icon">
                  <FaUniversity size={40} />
                 
                </div>
                <span className="count">02</span>
              </div>
              <div className="col-9">
                <div className="service-content">
                  <h4 className="service-title">Online Degree Scenarios</h4>
                  <p className="service-text">
                    Ideal for Working Professionals, Dual Degree Seekers,
                    Competitive Exam Aspirants, Those Facing Geographical or
                    Health Constraints, and Diploma Holders Converting to
                    Degrees. Intakes: Rolling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Item 3 */}
        <div className="col-md-6 col-lg-4">
          <div className="service-item">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="service-icon">
                  <FaSearchLocation size={40} />
                  
                </div>
                <span className="count">03</span>
              </div>
              <div className="col-9">
                <div className="service-content">
                  <h4 className="service-title">India Admission Portal</h4>
                  <p className="service-text">
                    Access Course-wise & University-wise Search, Entrance
                    Details, Faculty Info, Tuition Fees, Recognition Info,
                    Placement Data, Prospectus, Sample Degree & Direct Apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hero-buttons my-4 w-100 d-flex justify-content-center'>
          <Link to="/find-course" className="theme-btn1 ">
            Find a Course <i className="fas fa-circle-arrow-right"></i>
          </Link>
          <Link to="/signup" className="theme-btn2">
            Sign up <i className="fas fa-circle-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default IndiaAdmissionPage;