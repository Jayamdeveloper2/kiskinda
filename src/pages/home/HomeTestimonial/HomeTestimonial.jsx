import React from 'react';
import { FaPassport, FaQuoteLeft, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeTestimonial.css';

const HomeTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote: "With Kiskinda's help, I got admission to Centennial College in Canada. Now, I work full-time in a reputed IT company in Toronto earning a great salary.",
      author: "Anjali",
      country: "Canada",
      rating: 5
    },
    {
      id: 2,
      quote: "I completed my MBA at the University of Glasgow. I'm now working in a finance company in London. Kiskinda made my dream possible.",
      author: "Rajesh",
      country: "UK",
      rating: 5
    },
    {
      id: 3,
      quote: "I did a Master's in Nursing in Melbourne. I now work in a hospital earning over AUD 70,000 annually. Thank you, Kiskinda!",
      author: "Swetha",
      country: "Australia",
      rating: 5
    },
    {
      id: 4,
      quote: "Studying Engineering at TU Berlin was a dream. Kiskinda guided me from application to visa. I'm now working in a top automotive company.",
      author: "Gokul",
      country: "Germany",
      rating: 5
    },
    {
      id: 5,
      quote: "I chose New Zealand for my Diploma in Hospitality. Today, I'm managing a hotel and earning well. Kiskinda was with me throughout the journey.",
      author: "Nithya",
      country: "New Zealand",
      rating: 5
    },
    {
      id: 6,
      quote: "With Kiskinda's help, I joined NYIT for my MS in Computer Science. I'm now a software engineer in San Francisco.",
      author: "Arun",
      country: "USA",
      rating: 5
    }
  ];

  // Color palette for avatar backgrounds
  const avatarColors = [
    '#4e79a7', '#f28e2b', '#e15759', '#76b7b2', 
    '#59a14f', '#edc948', '#b07aa1', '#ff9da7',
    '#9c755f', '#bab0ac', '#8cd17d', '#86bcb6'
  ];

  const getAvatarColor = (name) => {
    const charCode = name.charCodeAt(0) || 0;
    return avatarColors[charCode % avatarColors.length];
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="testimonial-area pt-80 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <FaPassport /> Testimonials
              </span>
              <h2 className="site-title">What Our <span>Students Say</span> About Us</h2>
            </div>
          </div>
        </div>
        
        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial) => {
              const bgColor = getAvatarColor(testimonial.author);
              return (
                <div key={testimonial.id} className="px-3">
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <div 
                        className="testimonial-avatar"
                        style={{ 
                          backgroundColor: bgColor,
                          color: '#fff'
                        }}
                      >
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="testimonial-author-info">
                        <h4>{testimonial.author}</h4>
                        <p>{testimonial.country}</p>
                      </div>
                    </div>

                    <div className="testimonial-rate">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <div className="testimonial-quote">
                      <p>{testimonial.quote}</p>
                    </div>
                   
                  </div>
                </div>
              );
            })}
          </Slider>

          <div className='hero-buttons mt-4 d-flex w-100 justify-content-center'>
            <a href="" className='theme-btn1'>More Reviews</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;