import React from "react";
import PropTypes from "prop-types";
import "./Banner.css";

const Banner = ({ 
  backgroundImage,
  title,
  breadcrumbs = []
}) => {
  return (
    <div 
      className="site-breadcrumb" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <h2 className="breadcrumb-title">{title}</h2>
        {breadcrumbs.length > 0 && (
          <ul className="breadcrumb-menu">
            {breadcrumbs.map((item, index) => (
              <li 
                key={index} 
                className={item.active ? "active" : ""}
              >
                {item.link ? (
                  <a href={item.link}>{item.label}</a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      active: PropTypes.bool
    })
  )
};

export default Banner;