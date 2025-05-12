import React from 'react';
import './StudyDestination.css';
import { FaPassport } from 'react-icons/fa';
import StudyBg from '../../../assets/study-bg.jpg'


import StudyUsa from '../../../assets/flag/study-usa.png'
import StudyUk from '../../../assets/flag/study-uk.png'
import StudyNz from '../../../assets/flag/study-nz.png'
import StudyFrance from '../../../assets/flag/study-france.png'
import StudyCanada from '../../../assets/flag/study-canada.png'
import StudyAustrailia from '../../../assets/flag/study-australia.png'
import StudyGermany from '../../../assets/flag/study-germany.webp'
import StudyIreland from '../../../assets/flag/study-ireland.webp'
import StudySingapore from '../../../assets/flag/study-singapore.png'


const countries = [
    {
      name: 'Canada',
      image: StudyCanada,
      link: '',
      description: 'Affordable, quality education with opportunities.',
    },
    {
      name: 'United Kingdom',
      image: StudyUk,
      link: '',
      description: 'Renowned universities and flexible courses.',
    },
    {
      name: 'United States',
      image: StudyUsa,
      link: '',
      description: 'Top research, scholarships, diverse programs.',
    },
    {
      name: 'Australia',
      image: StudyAustrailia,
      link: '',
      description: 'High living standards and education.',
    },
    {
      name: 'Germany',
      image: StudyGermany,
      link: '',
      description: 'Free education in technical fields.',
    },
    {
      name: 'New Zealand',
      image: StudyNz,
      link: '',
      description: 'Peaceful, safe, and quality education.',
    },
    {
      name: 'France',
      image: StudyFrance,
      link: '',
      description: 'Fashion, business, culture, scholarships available.',
    },
    {
      name: 'Ireland',
      image: StudyIreland,
      link: '',
      description: 'Innovation, tech, and career opportunities.',
    },
    {
      name: 'Singapore',
      image: StudySingapore,
      link: '',
      description: 'Modern, global, quality Asian top universities.',
    },
  ];
  
  
const StudyDestination = () => {
  return (
    <div className="country-area">
      <div
        className="country-bg"
        style={{ backgroundImage: `url(${StudyBg})` }}
      ></div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="site-heading text-center">
                <span className="site-title-tagline">
                     <FaPassport style={{ marginRight: '8px' }} /> Study Destinations
                 </span>
              <h2 className="site-title text-white">
                Explore Top Study Destinations Around the World
              </h2>
            </div>
          </div>
        </div>
        <div className="country-wrap">
          <div className="row g-4">
            {countries.map((country, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="country-item">
                  <div className="country-img">
                    <img src={country.image} alt={country.name} />
                  </div>
                  <div className="country-content">
                    <h4>
                      <a href={country.link || '#'}>{country.name}</a>
                    </h4>
                    <p>{country.description}</p>
                    <div className='hero-buttons mt-2'>
                        <a href={country.link || '#'} className="theme-btn1 px-4 py-2">
                        Details <i className="fas fa-circle-arrow-right"></i>
                        </a>
                    </div>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyDestination;
