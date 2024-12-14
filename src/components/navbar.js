import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
    return ( 
          <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "var(--dark-color)" }}>
            <div className="container"> 
              <a className="navbar-brand" href="#">
                <img src="images/logo.png" alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar} 
                aria-expanded={isOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <div className={`navbar-collapse ${isOpen ? "show" : "collapse"}`} id="main">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <NavLink
                  className="nav-link p-2 p-lg-3"
                  to="/"
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                  >
                  Home
                  </NavLink>
                  </li>
      
                  <li className="nav-item">
                  <NavLink
                  className="nav-link p-2 p-lg-3"
                  to="/services"
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                  >
                  Services
                  </NavLink>
                  </li>
      
                  <li className="nav-item">
                  <NavLink
                  className="nav-link p-2 p-lg-3"
                  to="/portfolio"
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                  >
                  Portfolio
                  </NavLink>
                  </li>
      
                  <li className="nav-item">
                  <NavLink
                  className="nav-link p-2 p-lg-3"
                  to="/about"
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                  >
                  About
                  </NavLink>
                  </li>
      
                  <li className="nav-item">
                  <NavLink
                  className="nav-link p-2 p-lg-3"
                  to="/contact"
                  activeClassName="active"
                  onClick={() => setIsOpen(false)}
                  >
                  Contact
                  </NavLink>
                  </li>
                </ul>
                <div className="search ps-3 p-e-3 d-none d-lg d-lg-block">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
      
                <a className="btn rounded-pill main-btn" href="#">
                  Login
                </a>
              </div>
            </div>
          </nav>
        );
}

export default Navbar;