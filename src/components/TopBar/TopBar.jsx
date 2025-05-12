import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe
} from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <FaPhone className="top-bar-icon" />
            <span>+91 9443949773</span>
          </div>
          <div className="top-bar-item">
            <FaEnvelope className="top-bar-icon" />
            <span>ramesh.nr999@gmail.com</span>
          </div>
        </div>

        <div className="top-bar-right">
          <div className="top-bar-social">
            <span className="follow-label">Follow us:</span>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
