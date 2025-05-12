import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/kiskindalogo.png";
import "./Header.css";
import { BsCaretDownFill, BsBuilding, BsBook, BsHeadset, BsAward } from "react-icons/bs";
import Australia from "../../assets/flag/austrailia-flag.webp";
import Canada from "../../assets/flag/canada-flag.webp";
import Germany from "../../assets/flag/germany-flag.webp";
import ireland from "../../assets/flag/irland-flag.webp";
import Newzealand from "../../assets/flag/nz-flag.webp";
import Singapore from "../../assets/flag/singapore-flag.webp";
import Uk from "../../assets/flag/uk-flag.webp";
import usa from "../../assets/flag/usa-flag.webp";
import France from "../../assets/flag/france.png";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 991);
  const [isClosingMenu, setIsClosingMenu] = useState(false);
  const hoverTimeout = useRef(null);
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 991);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuEnter = (menu) => {
    clearTimeout(hoverTimeout.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    clearTimeout(hoverTimeout.current);
    setActiveMenu(null);
  };

  const handleLinkClick = () => {
    clearTimeout(hoverTimeout.current);
    setIsClosingMenu(true);
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      setIsClosingMenu(false);
    }, 300);
  };

  // Function to generate a safe ID from country name
  const generateId = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  };

  const countries = [
    { name: "Canada", flag: Canada, id: generateId("Canada") },
    { name: "United Kingdom (UK)", flag: Uk, id: generateId("United Kingdom (UK)") },
    { name: "United States (USA)", flag: usa, id: generateId("United States (USA)") },
    { name: "Australia", flag: Australia, id: generateId("Australia") },
    { name: "Germany", flag: Germany, id: generateId("Germany") },
    { name: "New Zealand", flag: Newzealand, id: generateId("New Zealand") },
    { name: "France", flag: France, id: generateId("France") },
    { name: "Ireland", flag: ireland, id: generateId("Ireland") },
    { name: "Singapore", flag: Singapore, id: generateId("Singapore") },
  ];

  const isDestinationsPage = location.pathname === "/destinations";

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" onClick={handleLinkClick}>
              <img src={logo || "/placeholder.svg"} alt="Company Logo" className="logo-img" />
            </Link>
          </div>

          <nav className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}>
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>

              <li className="mega-menu-parent">
                <Link
                  to="#"
                  onMouseEnter={() => handleMenuEnter("study")}
                  onMouseLeave={handleMenuLeave}
                >
                  Study Abroad <BsCaretDownFill className="ms-1 dropdown-icon" />
                </Link>

                <div
                  className={`mega-menu ${activeMenu === "study" ? "active" : ""} ${
                    isClosingMenu ? "closing" : ""
                  }`}
                  onMouseEnter={() => handleMenuEnter("study")}
                  onMouseLeave={handleMenuLeave}
                >
                  <div className="mega-menu-container">
                    <div className="mega-menu-content">
                      <div className="mega-menu-column">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="mega-menu-item">
                              <Link
                                to="/about"
                                className="text-decoration-none"
                                onClick={handleLinkClick}
                              >
                                <div className="d-flex align-items-start p-1 rounded">
                                  <div className="me-3">
                                    <BsBuilding className="text-muted megamenu-icon" />
                                  </div>
                                  <div>
                                    <div className="fw-semibold">About Kiskinda</div>
                                    <div className="text-muted mt-1 megamenu-small-text">
                                      Leading for over 15 years in education.
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="mega-menu-item mt-3">
                              <Link
                                to="/universities"
                                className="text-decoration-none"
                                onClick={handleLinkClick}
                              >
                                <div className="d-flex align-items-start p-1 rounded">
                                  <div className="me-3">
                                    <BsBook className="text-muted megamenu-icon" />
                                  </div>
                                  <div>
                                    <div className="fw-semibold">University Selection</div>
                                    <div className="megamenu-small-text text-muted mt-1">
                                      Find your perfect institution match
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mega-menu-item">
                              <Link
                                to="/quote"
                                className="text-decoration-none"
                                onClick={handleLinkClick}
                              >
                                <div className="d-flex align-items-start p-1 rounded">
                                  <div className="me-3">
                                    <BsHeadset className="text-muted megamenu-icon" />
                                  </div>
                                  <div>
                                    <div className="fw-semibold">Book Consultation</div>
                                    <div className="megamenu-small-text text-muted mt-1">
                                      Free 30-minute expert session
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="mega-menu-item mt-3">
                              <Link
                                to="/programs"
                                className="text-decoration-none"
                                onClick={handleLinkClick}
                              >
                                <div className="d-flex align-items-start p-1 rounded">
                                  <div className="me-3">
                                    <BsAward className="text-muted megamenu-icon" />
                                  </div>
                                  <div>
                                    <div className="fw-semibold">Our Academic Programs</div>
                                    <div className="megamenu-small-text text-muted mt-1">
                                      Explore diverse study options
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="mega-menu-parent">
                <Link
                  to="/kiskinda/destinations"
                  onMouseEnter={() => handleMenuEnter("destinations")}
                  onMouseLeave={handleMenuLeave}
                >
                  Destinations <BsCaretDownFill className="ms-1 dropdown-icon" />
                </Link>
                <div
                  className={`mega-menu p-3 ${activeMenu === "destinations" ? "active" : ""} ${
                    isClosingMenu ? "closing" : ""
                  }`}
                  onMouseEnter={() => handleMenuEnter("destinations")}
                  onMouseLeave={handleMenuLeave}
                >
                  <div className="row g-3">
                    {countries.map((country, index) => (
                      <div key={index} className="col-6 col-md-4">
                        <a
                          href={
                            isDestinationsPage
                              ? `/kiskinda/destinations#${country.id}`
                              : `/kiskinda/destinations#${country.id}`
                          }
                          className="d-flex align-items-center text-decoration-none text-dark p-2 country-nav-link"
                          onClick={handleLinkClick}
                        >
                          <div className="flag-circle me-2">
                            <img
                              src={country.flag || "/placeholder.svg"}
                              alt={`${country.name} Flag`}
                              className="country-flag"
                            />
                          </div>
                          <span>{country.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link to="/india-admission" onClick={handleLinkClick}>
                  India Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-cta d-flex gap-4">
            <Link to="/contact" className="cta-button d-none d-md-block" onClick={handleLinkClick}>
              Free Consultation
            </Link>
            <button className="mobile-menu-toggle d-lg-none" onClick={toggleMobileMenu}>
              <span className="hamburger-icon">☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;