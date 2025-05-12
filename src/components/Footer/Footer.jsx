import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
import footerBg from '../../assets/study-footer.png'; // Adjust path to your image

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area" style={{ backgroundImage: `url(${footerBg})` }}>
      {/* Decorative top border */}
      <div className="footer-top-border"></div>
      
      <div className="footer-overlay">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* About Us Column */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title">About Us</h3>
                  <p className="footer-about">
                    We provide expert visa and immigration services worldwide, helping individuals and families achieve their dreams of living, working, or studying abroad.
                  </p>
                  <div className="footer-social">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagram /></a>
                  </div>
                </div>
              </div>

              {/* Quick Links Column */}
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/countries">Countries</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>

              {/* Services Column */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="footer-title">Our Services</h3>
                  <ul className="footer-links">
                    <li><Link to="/services/study-visa">Study Visa</Link></li>
                    <li><Link to="/services/work-visa">Work Visa</Link></li>
                    <li><Link to="/services/tourist-visa">Tourist Visa</Link></li>
                    <li><Link to="/services/pr-visa">Permanent Residency</Link></li>
                    <li><Link to="/services/business-visa">Business Immigration</Link></li>
                    <li><Link to="/services/documentation">Documentation</Link></li>
                  </ul>
                </div>
              </div>

              {/* Contact Info Column */}
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