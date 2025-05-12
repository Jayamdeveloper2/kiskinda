import React from 'react';
import {
  FaUserGraduate,
  FaEnvelope,
  FaGlobe,
  FaUniversity,
  FaCommentDots,
  FaPaperPlane
} from 'react-icons/fa';
import './QuoteSection.css';

import bgImage from '../../../assets/hero-image5.avif'

const QuoteSection = () => {
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

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    preferredCountry: '',
    program: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Study Abroad Form Data:', formData);
    // Submit to backend or email API
  };

  return (
    <div className="quote-area mb-100">
      <div
        className="quote-bg"
        style={{
          backgroundImage:
            `url(${bgImage})`,
        }}
      ></div>
      <div className="container">
        <div className="row">
            {/* LEFT SIDE CONTENT */}
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="quote-info pe-lg-5">
                        <h2 className="quote-side-title">Your Dream, Our Mission</h2>
                        <p className="quote-side-text">
                            We guide students to top universities across the globe.
                            Unlock world-class education opportunities with expert guidance, from application to arrival.
                        </p>
                    </div>
                  </div>
          <div className="col-lg-6 ms-auto">
            <div className="quote-form">
              <div className="quote-header">
                <h4>Request Study Abroad Guidance</h4>
                <p>
                  Fill out the form below to receive expert advice on studying abroad, program selection, and visa assistance.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
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
                          value={formData.name}
                          onChange={handleChange}
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
                          value={formData.email}
                          onChange={handleChange}
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
                          value={formData.preferredCountry}
                          onChange={handleChange}
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
                          value={formData.program}
                          onChange={handleChange}
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
                          rows="3"
                          className="form-control"
                          placeholder="Write your query or academic background..."
                          value={formData.message}
                          onChange={handleChange}
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
      </div>
    </div>
  );
};

export default QuoteSection;
