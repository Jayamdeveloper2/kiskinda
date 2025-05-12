import React, { useState, useEffect } from 'react';
import './Hero.css';
import BgImage from '../../../assets/banner-illustration.svg';
import Hero1 from '../../../assets/hero-image6.jpg';
import Hero2 from '../../../assets/usa.webp';
import Hero3 from '../../../assets/hero-image8.jpg';
import Hero4 from '../../../assets/hero-image10.webp';
import { FaUniversity, FaGlobeAmericas, FaBook } from "react-icons/fa";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: Hero1,
      subtitle: "Transform Your Future",
      title: "Explore Global Study Options",
      description: "Study at world-ranked universities and start your international academic journey with expert support."
    },
    {
      image: Hero2,
      subtitle: "Study Abroad Made Easy",
      title: "Achieve Dreams Through Education",
      description: "We guide you through admissions, visas, and placements in top global institutions."
    },
    {
      image: Hero3,
      subtitle: "Global Opportunities",
      title: "Broaden Horizons Through Learning",
      description: "Build international experience, confidence, and skills with our personalized study abroad programs."
    },
    {
      image: Hero4,
      subtitle: "Personalized Approach",
      title: "Your Path To Global Success",
      description: "Find the right country, course, and university that match your academic goals perfectly."
    }
  ];
  
  // Static stats that don't change
  const [stats, setStats] = useState([
    { 
      value: 0, 
      target: 1500, 
      text: "Universities",
      icon: <FaUniversity className="stat-icon" />,
      color: "#3461E2"
    },
    { 
      value: 0, 
      target: 22, 
      text: "Countries Worldwide",
      icon: <FaGlobeAmericas className="stat-icon" />,
      color: "#3461E2"
    },
    { 
      value: "All Programs",  
      text: "Covered",
      icon: <FaBook className="stat-icon" />,
      color: "#3461E2",
      noCounter: true
    }
  ]);

  // Enhanced slide rotation with transition state
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsTransitioning(false);
      }, 500); // Matches CSS transition duration
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Counter animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => {
          if (stat.noCounter || typeof stat.value !== 'number') {
            return stat;
          }
  
          const increment = Math.ceil(stat.target / 100);
          if (stat.value < stat.target) {
            return {
              ...stat,
              value: Math.min(stat.value + increment, stat.target)
            };
          }
  
          return stat;
        })
      );
    }, 50);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(245 225 192 / 21%)',
      }}
    >
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h6 className={`hero-subtitle ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
              {slides[currentIndex].subtitle}
            </h6>
            <h1 className={`hero-title ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
              {slides[currentIndex].title}
            </h1>
            <p className={`hero-description ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
              {slides[currentIndex].description}
            </p>
            <div className="hero-buttons">
              <a href="#" className="theme-btn1">Explore Programs</a>
              <a href="#" className="theme-btn2">Free Consultation</a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-slider">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={`Study abroad ${index + 1}`}
                  className={`slider-image ${index === currentIndex ? 'active' : ''}`}
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
  
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-icon-container" style={{ color: stat.color, fontSize: "50px" }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3>
                  {typeof stat.value === 'number'
                    ? `${stat.value.toLocaleString()}+`
                    : stat.value}
                </h3>
                <p>{stat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;