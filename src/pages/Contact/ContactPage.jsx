import React from 'react';
import Banner from '../../components/Banner/Banner';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaUserTie, 
  FaPen, 
  FaComment,
  FaUserGraduate,
  FaGlobe,
  FaUniversity,
  FaCommentDots,
  FaPaperPlane
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

import ContactImage from '../../assets/contactpage.jpg';
import './ContactPage.css';


const countries = [
  { value: "Canada", label: "Canada" },
  { value: "UK", label: "United Kingdom" },
  { value: "USA", label: "United States" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "France", label: "France" },
  { value: "Ireland", label: "Ireland" },
  { value: "Singapore", label: "Singapore" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Other Countries", label: "Other Countries" },
];

const ContactPage = () => {

  const [studyAbroadFormData, setStudyAbroadFormData] = React.useState({
    name: '',
    email: '',
    preferredCountry: '',
    program: '',
    message: ''
  });

  const handleStudyAbroadChange = (e) => {
    const { name, value } = e.target;
    setStudyAbroadFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 
  const handleStudyAbroadSubmit = (e) => {
    e.preventDefault();
    console.log('Study Abroad Form Data:', studyAbroadFormData);
    // Submit study abroad form logic
  };

  return (
    <div className="contact-page">
     
      <div className="contact-area py-100">
        <div className="container">
          <div className="contact-content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="contact-info">
                  <div className="icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="content">
                    <h5>Office Address</h5>
                    <p>Kiskinda Overseas Education, <br />
                     24 Ganapathipalayam, Noyyal, Karur - 639117.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="contact-info">
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="content">
                    <h5>Call Us</h5>
                    <p>+91 9443949773</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="contact-info">
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <div className="content">
                    <h5>Email Us</h5>
                    <p>ramesh.nr999@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="contact-info">
                  <div className="icon">
                    <FaClock />
                  </div>
                  <div className="content">
                    <h5>Open Time</h5>
                    <p>Mon-Sat (9:30AM - 06.30PM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="row g-4">
              <div className="col-lg-7">
                <div className="contact-form">
                  <div className="contact-form-header">
                    <h2>Get In Touch</h2>
                    <p>Just a call away. We're here to help you take the first step toward studying abroad. Whether you have questions about programs, destinations, or visa processes – our experts are ready to assist.</p>
                  </div>
                  {/* Study Abroad Form */}
                  <div className="study-abroad-form mt-5">
                    <form onSubmit={handleStudyAbroadSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-icon">
                              <FaUserGraduate />
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                name="name"
                                value={studyAbroadFormData.name}
                                onChange={handleStudyAbroadChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-icon">
                              <FaEnvelope />
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                name="email"
                                value={studyAbroadFormData.email}
                                onChange={handleStudyAbroadChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-icon">
                              <FaGlobe />
                              <select
                                className="form-select"
                                name="preferredCountry"
                                value={studyAbroadFormData.preferredCountry}
                                onChange={handleStudyAbroadChange}
                                required
                              >
                                <option value="">Preferred Country</option>
                                {countries.map((c) => (
                                  <option key={c.value} value={c.value}>
                                    {c.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-icon">
                              <FaUniversity />
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Interested Program (e.g. MBA, MS)"
                                name="program"
                                value={studyAbroadFormData.program}
                                onChange={handleStudyAbroadChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <div className="form-icon">
                              <FaCommentDots />
                              <textarea
                                name="message"
                                rows="2"
                                className="form-control"
                                placeholder="Write your query or academic background..."
                                value={studyAbroadFormData.message}
                                onChange={handleStudyAbroadChange}
                                required
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 mt-2">
                          <button type="submit" className="theme-btn">
                            <FaPaperPlane /> Submit Request
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contact-img">
                  <img src={ContactImage} alt="Contact us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="google-map-area">
        <div className="container">
          <div className="google-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634.2816160466461!2d78.11046755178299!3d11.026853673968048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2de8c3ca0c15%3A0xddf0d5ecf6283ceb!2sGanapathipalayam!5e1!3m2!1sen!2sin!4v1746680194281!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;