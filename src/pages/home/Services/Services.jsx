import React from "react";
import {
    FaUserTie,
    FaSearch,
    FaGraduationCap,
    FaHome,
    FaPlane,
    FaPassport,
    FaFileAlt,
    FaFileSignature
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
    const ourServices = [
        {
            icon: <FaUserTie />,
            title: "Profile Evaluation",
            description: "Our team can assist complete profile Evaluation review Document, Examining Resumes LOR, SOP and other Submitted records."
        },
        {
            icon: <FaSearch />,
            title: "Course Finder",
            description: "Our platform allows you to easily search courses for country and University, for each course you can readily view Tuition Fees, the course duration and available intakes."
        },
        {
            icon: <FaGraduationCap />,
            title: "IELTS Preparation",
            description: "We offer specialized IELTS preparation to help you achieve your desired score and meet language proficiency requirements. Contact us for Demo online IELTS Course."
        },
        {
            icon: <FaFileAlt />,
            title: "SOP Writing Tools",
            description: "Our experts provide valuable guidance and support to craft a compelling Statement of Purpose (SOP) that highlights your strengths and aspirations."
        },
        {
            icon: <FaFileSignature />,
            title: "Application Submission",
            description: "We streamline the application process, ensuring all required documents are submitted accurately and on time."
        },
        {
            icon: <FaPassport />,
            title: "Visa Support",
            description: "We guide you through the visa application process, helping you navigate the complexities and increase your chances of approval."
        },
        {
            icon: <FaHome />,
            title: "Accommodation",
            description: "Our portal has accommodation search and booking facility and our team will assist you."
        },
        {
            icon: <FaPlane />,
            title: "Travel Preparation",
            description: "Our dedicated team will guide you through your travel Preparation and Provide documents check list."
        }
    ];

    return (
        <section className="Service-section">
            <div className="container">
                <div className="services-intro">
                    <h2 className="site-title">Our Comprehensive <span>Services</span></h2>
                    <p className="tagline">Start Your Journey with Kiskinda</p>
                    <p className="subtext">Research and choose - Profiling, Ideal Destination, University and Course</p>
                </div>

                <div className="our-services-section">
                    <div className="services-grid comprehensive">
                        {ourServices.map((service, index) => (
                            <div className="service-card" key={`our-service-${index}`}>
                                <div className="icon-container">
                                    <div className="icon-circle">
                                        <span className="service-icon">{service.icon}</span>
                                    </div>
                                    <h4>{service.title}</h4>
                                </div>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className="hero-buttons mt-5 d-flex justify-content-center">
                        <a href="" className="theme-btn1">Discover More</a>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Services;