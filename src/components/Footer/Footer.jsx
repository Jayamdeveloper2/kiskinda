import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
import footerBg from '../../assets/study-footer.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const countries = [
    'Canada',
    'United Kingdom (UK)',
    'United States (USA)',
    'Australia',
    'Germany',
    'New Zealand',
    'France',
    'Ireland',
    'Singapore',
  ];

  return (
    <footer className="footer-area" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-top-border"></div>

      <div className="footer-overlay">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              {/* Countries Served */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title">Countries Served</h3>
                  <ul className="footer-links">
                    {countries.map((country) => (
                      <li key={country}>{country}</li>
                    ))}
                  </ul>
                  <div className="footer-social">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagram /></a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Study Abroad</Link></li>
                    <li><Link to="/destinations">Destinations</Link></li>
                    <li><Link to="/india-admission">India Admission</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>

              {/* Comprehensive Services */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title">Comprehensive Services</h3>
                  <ul className="footer-links">
                    <li>Profile Evaluation</li>
                    <li>Course Finder</li>
                    <li>IELTS Preparation</li>
                    <li>SOP Writing Tools</li>
                    <li>Application Submission</li>
                    <li>Visa Support</li>
                    <li>Accommodation and Travel Preparation</li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title">Contact Info</h3>
                  <ul className="footer-contact">
                    <li>
                      <FaMapMarkerAlt />
                      <span>123 Immigration Street, Visa City, VC 12345</span>
                    </li>
                    <li>
                      <FaPhone />
                      <span>+1 (123) 456-7890</span>
                    </li>
                    <li>
                      <FaEnvelope />
                      <span>info@visaservices.com</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="copyright">
                  &copy; {currentYear} Kiskinda . All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6">
                <p className="company-name">
                  <a href="">Developed By Jayam web Solutions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
