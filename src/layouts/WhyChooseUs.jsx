import React from "react";
import whychooseus from '../assets/whychooseus.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './WhyChooseUs.css';

const features = [
  {
    title: "Dedicated Counsellor",
    description:
      "You'll have a dedicated counselor who will provide personalized guidance and support throughout your educational journey.",
  },
  {
    title: "Course Finder & Student Sign-In Portal",
    description:
      "After submitting your profile, access the student portal to download reports, submit documents, track your application, use the SOP writer, and find your course by country and university.",
  },
  {
    title: "Scholarship Assistance",
    description:
      "Our counsellors will guide you with complete details regarding scholarship availability.",
  },
  {
    title: "Education Loan Support",
    description:
      "Our team is here to assist you with education loan guidance and processing support.",
  },
  {
    title: "Pre & Post Departure Assistance",
    description:
      "We offer visa support services and help facilitate your accommodation search through our portal.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image Section */}
          <div className="col-lg-5">
            <div className="image-wrapper position-relative overflow-hidden rounded-3 shadow-lg">
              <img
                src={whychooseus}
                alt="Why Choose Us"
                className="img-fluid w-100"
              />
              <div className="image-overlay"></div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="col-lg-7">
            <div className="text-center text-lg-start">
              <span className="text-primary fw-bold mb-2 d-inline-block animate-fade-in">
                Why Kiskinda?
              </span>
              <h2 className="display-5 fw-bold text-dark mb-4">
                Reasons to <span className="text-primary">Choose Us</span>
              </h2>
              <div className="feature-list">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="card mb-3 border-0 shadow-sm animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="card-body p-4">
                      <h5 className="card-title fw-semibold text-dark mb-2">
                        {item.title}
                      </h5>
                      <p className="card-text text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<style>
    {
        `
        .bg-light {
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.image-wrapper {
  transition: transform 0.5s ease;
}

.image-wrapper:hover {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
}

.card {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
  transform: translateY(-5px);
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h2 span {
  color: #007bff;
  font-weight: 700;
}

.card-title {
  font-size: 1.25rem;
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
}
        `
    }
</style>
export default WhyChooseUs;