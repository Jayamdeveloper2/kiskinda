import React from 'react';
import { FaUniversity, FaGlobeAmericas } from 'react-icons/fa';
import './Universities.css'

const Universities = () => {
  const universities = [
    {
      country: "Canada",
      flag: "🇨🇦",
      institutions: [
        "University of Toronto", 
        "Seneca College", 
        "Centennial College"
      ]
    },
    {
      country: "UK",
      flag: "🇬🇧",
      institutions: [
        "University of Birmingham", 
        "University of Glasgow", 
        "Coventry University"
      ]
    },
    {
      country: "USA",
      flag: "🇺🇸",
      institutions: [
        "Arizona State University", 
        "University of South Florida", 
        "NYIT"
      ]
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      institutions: [
        "Monash University", 
        "Deakin University", 
        "University of Queensland"
      ]
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      institutions: [
        "RWTH Aachen", 
        "TU Berlin", 
        "University of Stuttgart"
      ]
    },
    {
      country: "New Zealand",
      flag: "🇳🇿",
      institutions: [
        "University of Auckland", 
        "Victoria University of Wellington"
      ]
    },
    {
      country: "France",
      flag: "🇫🇷",
      institutions: [
        "Paris School of Business", 
        "SKEMA Business School"
      ]
    },
    {
      country: "Ireland",
      flag: "🇮🇪",
      institutions: [
        "Trinity College Dublin", 
        "University College Dublin"
      ]
    },
    {
      country: "Singapore",
      flag: "🇸🇬",
      institutions: [
        "National University of Singapore", 
        "SIM Global Education"
      ]
    }
  ];

  return (
    <div className="universities-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="section-header text-center mb-5">
              <h2 className="site-title">
                <span>Universities</span>  We Work With
              </h2>
              <p className="lead">
                We have tie-ups with globally ranked universities in:
              </p>
            </div>

            <div className="row g-4">
              {universities.map((uniGroup, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="university-card h-100 p-4 bg-white rounded-3 shadow-sm">
                    <div className="d-flex align-items-center mb-3">
                      <span className="fs-3 me-2">{uniGroup.flag}</span>
                      <h3 className="h5 mb-0">{uniGroup.country}</h3>
                    </div>
                    <ul className="list-unstyled mb-0">
                      {uniGroup.institutions.map((uni, i) => (
                        <li key={i} className="mb-2 d-flex">
                          <FaUniversity className="text-primary mt-1 me-2 flex-shrink-0" />
                          <span>{uni}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;