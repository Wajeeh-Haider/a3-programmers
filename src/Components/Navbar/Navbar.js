import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  scrollToComponent,
  onScrollForService,
  onScrollForTeam,
  onScrollForAbout,
}) => {
  const [Nav, setNav] = useState(true);

  const buttonClick = () => {
    setNav(!Nav);
  };
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <Link to="/" className="logo me-auto">
            <img
              src="img/logo.png"
              alt=""
              className="img-fluid rounded-circle"
            />
          </Link>
          <nav
            id="navbar"
            className={`navbar ${
              Nav === true ? "" : "navbar-mobile position-fixed"
            } ${Nav === true ? "position-relative" : ""}`}
          >
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to=""
                  onClick={onScrollForAbout}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to=""
                  onClick={onScrollForService}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to=""
                  onClick={onScrollForTeam}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/"
                  onClick={scrollToComponent}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="getstarted scrollto"
                  to=""
                  onClick={onScrollForAbout}
                >
                  Get Started
                </Link>
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
