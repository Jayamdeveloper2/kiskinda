import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './CallToAction.css';

const CallToAction = ({ title, description, buttonText, buttonLink, imageSrc, bgImageSrc }) => {
  return (
    <div className="cta-area">
      <div className="container">
        <div className="cta-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cta-img">
                <img 
                  src={imageSrc} 
                  alt="Visa and Immigration Services" 
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-content">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className='hero-buttons'>
                  <a href={buttonLink} className="theme-btn3">
                    {buttonText} <FaArrowRight className="ms-2" />
                  </a>
                </div>
                <div className="shape">
                  <img 
                    src={bgImageSrc} 
                    alt="Decorative shape" 
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
