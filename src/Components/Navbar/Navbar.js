import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [Nav, setNav] = useState(true);

  const buttonClick = () => {
    setNav(!Nav);
  };
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          {/* <h1 className="logo me-auto">
            <a href="index.html">Arsha</a>
          </h1> */}
          <a  href="index.html" className="logo me-auto"><img src="img/logo.png" alt="" className="img-fluid rounded-circle"/></a>
          <nav
            id="navbar"
            className={`navbar ${Nav === true ? "" : "navbar-mobile position-fixed"} ${
              Nav === true ? "position-relative" : ""}`}
          >
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              {/* <li>
                <a className="nav-link   scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li> */}
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i
              className={`bi mobile-nav-toggle ${
                Nav === true ? "bi-list" : "bi-x"
              }`}
              onClick={buttonClick}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
