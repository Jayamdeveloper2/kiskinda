import React from 'react';
import './AboutKiskinda.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaPassport, FaGlobeAmericas, FaUserGraduate, FaHandshake } from 'react-icons/fa';

import About1 from '../../../assets/about-01.jpg';
import About2 from '../../../assets/about-02.png';
import About3 from '../../../assets/about-03.jpg';

const AboutKiskinda = () => {
  const aboutData = {
    experience: {
      years: 10,
      description: "Years of Excellence"
    },
    images: {
      main: About1,
      shape: About2,
      team: About3
    },
    content: {
      tagline: "About Us",
      title: "Your Gateway to Global Education",
      highlighted: "Global Education",
      description: "At Kiskinda, we help you choose the right study abroad program based on your academic background and career goals. Whether you're aiming for an undergraduate course, a postgraduate degree, or a diploma, we have a program for you."
    },
    features: [
      {
        icon: <FaCheckCircle className="feature-icon" />,
        title: "University Selection",
        description: "Strategic shortlisting based on your profile, budget, and career goals from 500+ partner institutions."
      },
      {
        icon: <FaCheckCircle className="feature-icon" />,
        title: "Admission Support",
        description: "End-to-end application assistance including SOP review, LOR preparation, and interview coaching."
      },
    ],
    mission: {
      title: "Our Mission",
      statement: "To empower students with the knowledge, resources, and support needed to successfully navigate the international education landscape and achieve their academic and career aspirations.",
    }
  };

  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          
          {/* Left Column - Images */}
          <div className="col-lg-6 align-self-center">
            <div className="about-left">
              <div className="about-img">
                <div className="row">
                  <div className="col-6">
                    <img className="img-1" src={aboutData.images.main} alt="Our office" />
                    <img className="shape" src={aboutData.images.shape} alt="Decorative shape" />
                  </div>
                  <div className="col-6">
                    <div className="about-experience">
                      <h5>{aboutData.experience.years}<span>+</span></h5>
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
            <div className="about-kiskinda">
              <div className="site-heading mb-3">
                <span className="site-title-tagline">
                  <FaPassport className="me-2" /> {aboutData.content.tagline}
                </span>
                <h2 className="site-title">
                  {aboutData.content.title.split(aboutData.content.highlighted).map((part, index, arr) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < arr.length - 1 && <span className="highlight">{aboutData.content.highlighted}</span>}
                    </React.Fragment>
                  ))}
                </h2>
              </div>
              <p className="about-text">
                {aboutData.content.description}
              </p>

              {/* Mission Statement Section */}
              <div className="mission-section mt-5">
                <div className="mission-statement rounded-3">
                  <h3 className="mission-title mb-3">{aboutData.mission.title}</h3>
                  <p className="mission-text">{aboutData.mission.statement}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutKiskinda;