import React, { useState } from 'react';
import {
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaChartLine,
  FaPassport,
  FaClock,
} from 'react-icons/fa';
import './DestinationPage.css';

const DestinationPage = () => {
  const [activeCountry, setActiveCountry] = useState(null);

  const countries = [
    {
      name: 'Canada',
      description:
        'Canada is known for its high-quality education, post-study work permits, and immigrant-friendly policies. Students benefit from affordable tuition and globally recognized degrees. Strong Economy and Job Opportunities, Tech Industries boasts 488,000 IT professionals.',
      highlights: [
        { text: '223+ Universities' },
        { text: 'STEM: CAD 20,000-36,000/year | Non-STEM: CAD 40,000-60,000/year' },
        { text: 'Part-time work: 24 hours/week' },
        { text: 'Post-study work: 2-3 years depending on program' },
      ],
      courses: [
        'Computer Science',
        'Business',
        'Engineering',
        'Health Sciences',
        'Physiotherapy',
        'Information Technology',
        'Animation and Gaming',
      ],
      intakes: ['September', 'January', 'May'],
    },
    {
      name: 'United Kingdom (UK)',
      description:
        'The UK offers short-duration courses and world-renowned universities. With flexible work rights and a strong Indian student community, the UK remains a top choice with 95% Visa Success Ratio, offering Sandwich Courses options (Placement) and Affordable Fees.',
      highlights: [
        { text: '160+ Universities' },
        { text: 'STEM: £25,000-40,000 | Non-STEM: £20,000-30,000' },
        { text: 'Part-time work: 20 hours/week' },
        { text: 'Post-study work: 2 years' },
      ],
      courses: [
        'Business Management',
        'Computer Science',
        'Finance',
        'Data Science',
        'Global Business',
        'Engineering and Technology',
        'Law',
        'Nursing',
        'Social Science',
        'Media and Communication',
      ],
      intakes: ['September', 'January', 'May'],
    },
    {
      name: 'United States (USA)',
      description:
        'Home to Ivy League and top research universities, the USA provides diverse programs, scholarships, and career prospects in every field, High employability and OPT.',
      highlights: [
        { text: '4000+ Universities' },
        { text: 'STEM: $83,589–$126,930 | Non-STEM: $60,000–$85,000/year' },
        { text: 'CPT: 20 hrs/week, 40 hrs during summer' },
        { text: 'OPT: 36 months (STEM), 12 months (Non-STEM)' },
      ],
      courses: [
        'Engineering',
        'Computer Science',
        'Business Management',
        'Biological Sciences',
        'Communication',
        'Advertising',
      ],
      intakes: ['September', 'January', 'May'],
    },
    {
      name: 'Australia',
      description:
        'Australia is a popular destination for international students with top universities, excellent living standards, and strong post-graduation placement opportunities.',
      highlights: [
        { text: '42+ Universities' },
        { text: 'STEM: AUD 60,000–80,000 | Non-STEM: AUD 50,000–60,000' },
        { text: 'Part-time work: 48 hours/fortnight' },
        { text: 'Post-study work: Based on city/region' },
      ],
      courses: [
        'Computer Science',
        'Business Analytics',
        'Cyber Security',
        'MBA',
        'Automotive Engineering',
        'Nursing',
        'Architecture',
        'Aerospace Engineering',
        'Accountancy',
        'Social Work',
        'Psychology',
      ],
      intakes: ['July', 'November', 'February'],
    },
    {
      name: 'Germany',
      description:
        'Germany is known for its tuition-free or low-cost education, especially in engineering and technology. The country offers excellent work options after graduation.',
      highlights: [
        { text: '108+ Universities' },
        { text: 'STEM: €40,000–€55,000 | Non-STEM: €30,000–€45,000/year' },
        { text: 'Part-time: 20 hrs/week, unlimited during breaks' },
        { text: 'Post-study work: 18 months' },
      ],
      courses: [
        'Computer Science',
        'Mechanical Engineering',
        'Electrical Engineering',
        'Civil Engineering',
        'Business Administration',
        'MBA',
        'Finance',
        'Economics',
        'Automotive Engineering',
        'Design',
        'Law',
      ],
      intakes: ['April', 'September', 'October', 'March'],
    },
    {
      name: 'New Zealand',
      description:
        'High growth in the number of Indian Students, good job opportunities, high-quality education, attractive PSW, culture and standard of living.',
      highlights: [
        { text: '71+ Universities' },
        { text: 'STEM: NZD 55,000–70,000 | Non-STEM: NZD 45,000–65,000' },
        { text: 'Part-time: 20 hrs/week, full-time during holidays' },
        { text: 'Post-study work: 3 years' },
      ],
      courses: [
        'Information Technology',
        'Engineering',
        'Healthcare',
        'Construction',
        'Hospitality',
        'Business',
        'Data Analytics',
      ],
      intakes: ['July', 'November', 'February'],
    },
    {
      name: 'France',
      description:
        'France offers world-class education in business, fashion, and hospitality. Over 400,000 international students, including 10,000+ Indians, study in France annually.',
      highlights: [
        { text: '75+ Universities' },
        { text: 'STEM: €30,000–€50,000/year' },
        { text: 'Part-time: 20 hrs/week, unlimited during breaks' },
        { text: 'Post-study work: Masters – 2 years' },
      ],
      courses: ['Fashion', 'Hotel Management', 'Business Management', 'Engineering'],
      intakes: ['September', 'July'],
    },
    {
      name: 'Ireland',
      description:
        '95% Visa approval, great job & part-time opportunities. 19 of the top 20 pharmaceutical & biotech companies are in Ireland. International student numbers rise yearly.',
      highlights: [
        { text: '30+ Universities' },
        { text: 'STEM: €30,000–€45,000 | Non-STEM: €25,000–€35,000/year' },
        { text: 'Part-time work: 20 hours/week' },
        { text: 'Post-study work: 6–24 months (Level-based)' },
      ],
      courses: [
        'Data Science',
        'Pharmaceutical Science',
        'Civil Engineering',
        'Cyber Security',
        'Economics',
      ],
      intakes: ['September', 'January'],
    },
    {
      name: 'Singapore',
      description:
        'Singapore offers a modern and global learning environment with top Asian universities. Ideal for students seeking quality education close to home.',
      highlights: [
        { text: '34+ Universities' },
        { text: 'STEM: SGD 60,000–80,000 | Non-STEM: SGD 50,000–60,000/year' },
        { text: 'Part-time: 16 hours/week' },
        { text: 'Post-study: 90 days–1 year based on institution' },
      ],
      courses: [
        'Engineering',
        'Business',
        'Computer Science & IT',
        'Hospitality',
        'Tourism',
        'Digital Media',
        'Biotechnology',
        'Accountancy',
      ],
      intakes: ['August', 'September', 'January', 'February'],
    },
  ];

  // Function to generate a safe ID from country name
  const generateId = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  };

  // Handle country click
  const handleCountryClick = (countryName) => {
    setActiveCountry(countryName);
    const element = document.getElementById(generateId(countryName));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="study-destinations py-5" id="top">
      <div className="container">
        <div className="section-header">
          <span className="site-title-tagline">
            <FaPassport className="me-2" /> Study Abroad
          </span >
          <h2 className="site-title mb-2">
            Explore <span>Top Study Destinations</span> Around the World
          </h2>
          <p className="section-subtitle">
            Studying abroad is a life-changing decision. At Kiskinda, we guide students to the best
            international study destinations where education meets opportunity. We have partnerships
            with reputed universities in the following countries:
          </p>
        </div>

        {/* Navigation Links */}
        {/* <div className="country-nav mb-5">
          <h4>Jump to Country:</h4>
          <div className="nav-links">
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => handleCountryClick(country.name)}
                className={`country-nav-link ${
                  activeCountry === country.name ? 'active' : ''
                }`}
              >
                {country.name}
              </button>
            ))}
          </div>
        </div> */}
      </div>

      <div className="container">
        <div className="row">
          {countries.map((country, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div
                className={`country-card card h-100 ${
                  activeCountry === country.name ? 'active' : ''
                }`}
                id={generateId(country.name)}
              >
                <div className="card-body">
                  <h2>{country.name}</h2>
                  <p>{country.description}</p>

                  <div className="highlights">
                    <h4 className="mb-0">Key Highlights:</h4>
                    <ul className="list-unstyled">
                      {country.highlights.map((highlight, i) => (
                        <li key={i} className="mb-3">
                          • {highlight.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="info-box">
                    <h5 className="section-title">Popular Courses:</h5>
                    <div className="courses-tags">
                      {country.courses.map((course, i) => (
                        <span key={i} className="course-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="intake-notice">
                    <div className="intake-header">
                      <FaCalendarAlt className="intake-icon" />
                      <h5>Intake Periods:</h5>
                    </div>
                    <div className="intake-badges">
                      {country.intakes.map((intake, i) => (
                        <span key={i} className="intake-badge">
                          {intake}
                          <span className="intake-ribbon"></span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <a href="#top" className="back-to-top">
        Back to Top
      </a>
    </div>
  );
};

export default DestinationPage;