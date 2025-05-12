import React from "react";
import './IndiaAdmission.css'
import IndiaAdmissionbg from "../../../assets/india-admission.jpg";
import {
    FaUniversity,
    FaLaptop,
    FaHandsHelping,
    FaPassport,
  } from 'react-icons/fa';
// Feature data array
const features = [
  {
    count: "01",
    icon: <FaUniversity />,
    title: "1200+ On-Campus Universities",
    description:
      "Access A+ universities like BITS Pilani, Christ, SB JAIN, and more with full application and admission support.",
  },
  {
    count: "02",
    icon: <FaLaptop />,
    title: "Online Degrees (150+ Institutes)",
    description:
      "Get UGC/AICTE recognized degrees from IIMs, IIITs and top institutions – affordable and flexible for working professionals.",
  },
  {
    count: "03",
    icon: <FaHandsHelping />,
    title: "Expert Guidance & Support",
    description:
      "From course selection to application, and post-admission – full support, scholarships, and student loans included.",
  },
  {
    count: "04",
    icon: <FaPassport />,
    title: "Portfolio & Job Assistance",
    description:
      "Build your student profile, access job assistance, and explore rolling intakes suited for every candidate type.",
  },
];

const IndiaAdmission = () => {
  return (
    <div className="choose-area py-100">
      <div className="container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-6">
            <div className="wow fadeInUp" data-wow-delay=".25s">
              <div className="site-heading mb-0">
                <span className="site-title-tagline">
                  <i className="far fa-university"></i> India Admission
                </span>
                <h2 className="site-title">
                  Explore <span>Top Indian Universities</span> with 
                </h2>
                <p>
                  KISKINDA facilitates admissions to both On-Campus and Online Degree Programs across India. 
                  Apply directly through our portal and get expert counselling support throughout your admission process.
                  <br />
                 <div className="hero-buttons mt-4">
                   <a
                    href="#"
                    rel="noopener noreferrer"
                    className="theme-btn1"
                  >
                   Find a course
                  </a>
                </div>
                
                </p>
              </div>
              <div className="choose-img">
                <img src={IndiaAdmissionbg} alt="India Admission" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-4 wow fadeInRight" data-wow-delay=".25s">
              {features.map((item, index) => (
                <div
                  className={`col-md-6 ${index < 2 ? "mt-lg-5" : ""}`}
                  key={index}
                >
                  <div className="choose-item">
                    <span className="count">{item.count}</span>
                          <div className="choose-item-icon">
                              {item.icon}
                          </div>
                    <div className="choose-item-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
               <div className="hero-buttons">
                <a
                  className="theme-btn1"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Sign Up Now
                </a>

                </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaAdmission;
