import React from 'react';
import { FaPassport, FaArrowRight, FaGraduationCap, FaUserGraduate, FaCertificate, FaLanguage, FaBriefcase, FaBook } from 'react-icons/fa';
import './Programs.css';

import image1 from '../../../assets/hero-image1.avif'
import image2 from '../../../assets/hero-image2.avif'
import image3 from '../../../assets/hero-image3.avif'
import image4 from '../../../assets/hero-image4.avif'
import image5 from '../../../assets/hero-image5.avif'
import image6 from '../../../assets/hero-image11.jpg'

const Programs = () => {
    const programs = [
        {
          id: 1,
          title: "Undergraduate Programs",
          description: "Study bachelor degrees in arts, science, engineering and commerce.",
          icon: <FaGraduationCap size={40} />,
          image: image1,
        },
        {
          id: 2,
          title: "Postgraduate Programs",
          description: "Advance with master’s degrees in management, science, and technology.",
          icon: <FaUserGraduate size={40} />,
          image: image2,
        },
        {
          id: 3,
          title: "Diploma & Advanced Diploma",
          description: "Practical diplomas designed for career readiness in various fields.",
          icon: <FaCertificate size={40} />,
          image: image3,
        },
        {
          id: 4,
          title: "Vocational Courses",
          description: "Learn practical skills for direct employment and career success.",
          icon: <FaBriefcase size={40} />,
          image: image4,
        },
        {
          id: 5,
          title: "Language Programs",
          description: "Improve English and other language skills for academic success.",
          icon: <FaLanguage size={40} />,
          image: image5,
        },
        {
          id: 6,
          title: "Certification Courses",
          description: "Earn certifications in specialized areas for fast-track careers.",
          icon: <FaBook size={40} />,
          image: image6,
        }
      ];
      

  return (
    <div className="programs-area py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto wow fadeInDown" data-wow-delay=".25s">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <FaPassport /> Programs We Support
              </span>
              <h2 className="site-title">
                Let's <span> explore </span> our study abroad programs
              </h2>
            </div>
          </div>
        </div>

        <div className="programs-wrap wow fadeInUp" data-wow-delay=".25s">
          <div className="row g-4">
            {programs.map((program) => (
              <div className="col-md-6 col-lg-4" key={program.id}>
                <div className="program-item">
                  <span className="count">0{program.id}</span>
                  <div className="program-content">
                    <div className="program-icon">
                      {program.icon}
                    </div>
                    <div className="program-info">
                      <h4 className="program-title">
                        <a href="#">{program.title}</a>
                      </h4>
                      <p className="program-text">{program.description}</p>
                     
                    </div>
                  </div>
                  <div className="program-img">
                    <img src={program.image} alt={program.title} />
                  </div>
                </div>
              </div>
            ))}

            <div className='hero-buttons d-flex w-100 justify-content-center'>
            <a href="#" className="theme-btn1">
                Explore Programs
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;