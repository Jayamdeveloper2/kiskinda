import React from 'react';
import { FaGraduationCap, FaUserGraduate, FaCertificate, FaLanguage, FaBriefcase ,FaPassport } from 'react-icons/fa';
import './AboutProgram.css';

const AboutProgram = () => {
  const programs = [
    {
      title: "Undergraduate Programs",
      icon: <FaGraduationCap className="aboutprogram-icon" />,
      description: "Bachelor's degrees in Arts, Science, Commerce, Engineering, Law, Medical, Nursing, Hospitality, Culinary and more.",
      examples: ["BA", "BSc", "BCom", "BE/BTech", "LLB", "MBBS", "BHM"],
      
    },
    {
      title: "Postgraduate Programs",
      icon: <FaUserGraduate />,
      description: "Advanced degrees for specialization and career advancement across various disciplines.",
      examples: ["MBA", "MS", "MTech", "MA", "MSc", "LLM", "MD"],
     
    },
    {
      title: "Diploma & Advanced Diploma",
      icon: <FaCertificate  />,
      description: "Focused skill-based programs offering practical training and industry-ready qualifications.",
      examples: ["Diploma in Engineering", "Advanced Diploma in Business", "Postgraduate Diploma"],
      
    },
    {
      title: "Vocational Courses",
      icon: <FaBriefcase/>,
      description: "Career-oriented training programs designed for specific trades and technical fields.",
      examples: ["Automotive Technology", "Healthcare", "IT Support", "Construction", "Cosmetology"],
      
    },
    {
      title: "Language & Foundation",
      icon: <FaLanguage  />,
      description: "Preparation programs to build language proficiency and academic foundations.",
      examples: ["English Language", "University Foundation", "Pathway Programs"],
     
    },
    {
      title: "Short-term Certifications",
      icon: <FaCertificate  />,
      description: "Specialized courses for skill enhancement and professional development.",
      examples: ["Digital Marketing", "Data Science", "Project Management", "Graphic Design"],
     
    }
  ];

  return (
    <section className="program-section">
      <div className="container">
        <div className="section-header">
            <span className="site-title-tagline">
             <FaPassport className="me-2" /> Programs
            </span>
          <h2 className="site-title mb-2">Our <span>Academic Programs</span></h2>
          <p className="section-subtitle">
            Comprehensive educational pathways to match your career aspirations and academic goals
          </p>
        </div>
        
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div 
              className="program-card" 
              key={index}
            >
              <div className="program-icon-container">
                <span className='about-program-icon'> {program.icon}</span>
              </div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              
              <div className="program-examples">
                <h4>Popular Options:</h4>
                <ul>
                  {program.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;