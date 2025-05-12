import React from 'react';
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaCheckCircle, FaHeadset } from 'react-icons/fa';

import About1 from '../../../assets/about-01.jpg';
import About2 from '../../../assets/about-02.png';
import About3 from '../../../assets/about-03.jpg';

const About = () => {
  // Data storage in variables
  const aboutData = {
    experience: {
      years: 30,
      description: "Years Of Experience"
    },

    images: {
      main: About1,
      shape: About2,
      team: About3
      },

      content: {
        tagline: "About Us",
        title: "Turning Your Study Abroad Dreams Into Reality",
        highlighted: "Study Abroad",
        description: "We are a leading education consultancy dedicated to helping students achieve their international academic goals. With expert guidance, personalized support, and a strong network of global institutions, we provide end-to-end assistance for every step of your study abroad journey—from university selection and application to visa guidance and pre-departure preparation."
      },
    
    features: [
        {
          icon: <FaCheckCircle className="feature-icon" />,
          title: "Accurate & Expert Advise",
          description: "Our experienced consultants provide reliable guidance for your visa process."
        },
        {
          icon: <FaHeadset className="feature-icon" />,
          title: "24/7 Live Online Support",
          description: "Get assistance anytime with our round-the-clock support team."
        }
      ]
  };

  
  return (
    <section className="about-area" >
      <div className="container">
        <div className="row">
          {/* Left Column - Images */}
          <div className="col-lg-6 align-self-center">
            <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
              <div className="about-img" >
                <div className="row">
                  <div className="col-6">
                    <img className="img-1" src={aboutData.images.main} alt="Our office" />
                    <img className="shape" src={aboutData.images.shape} alt="Decorative shape" />
                  </div>
                  <div className="col-6">
                    <div className="about-experience" >
                      <h5>
                        {aboutData.experience.years}<span>+</span>
                      </h5>
                      <p>{aboutData.experience.description}</p>
                    </div>
                    <img className="img-2" src={aboutData.images.team} alt="Our team" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6">
            <div className="about-right wow fadeInUp" data-wow-delay=".25s">
              <div className="site-heading mb-3">
                <span className="site-title-tagline" >
                  <i className="far fa-passport"></i> {aboutData.content.tagline}
                </span>
                <h2 className="site-title">
                  {aboutData.content.title.split(aboutData.content.highlighted).map((part, index, arr) => (
                    <>
                      {part}
                      {index < arr.length - 1 && <span>{aboutData.content.highlighted}</span>}
                    </>
                  ))}
                </h2>
              </div>
              <p className="about-text">
                {aboutData.content.description}
              </p>

              <div className="about-content">
                <div className="row g-4">
                    {aboutData.features.map((feature, index) => (
                        <div className="col-lg-6" key={index}>
                            <div className="about-item">
                                <div className="icon">
                                    {feature.icon}
                               </div>
                             <div className="content">
                            <h6>{feature.title}</h6>
                                <p>{feature.description}</p>
                            </div>
                         </div>
                    </div>
                ))}
                </div>
              </div>
              
              <div className='hero-buttons'>
                <a href="#" className="theme-btn1">
                   Discover More <i className="fas fa-circle-arrow-right"></i>
                </a>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;