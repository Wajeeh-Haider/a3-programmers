import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = ({ onScrollForAbout }) => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
              <h1 className="animate__animated animate__fadeInLeft">
                We Provide Better Solutions For Your Bussiness
              </h1>
              <h2 className="animate__animated animate__fadeInUp">
                We Beleive In Hardwork, So We Are Always Ready To Help You To
                Make Your Bussiness In Better Version .
              </h2>
              <div className="d-flex justify-content-center align-items-center justify-content-lg-start animate__animated animate__bounceInUp">
                <Link
                  to=""
                  className="btn-get-started scrollto d-flex align-items-center "
                  onClick={onScrollForAbout}
                >
                  Get Started
                  <i className="bx bx-right-arrow-alt ms-1 animate__animated animate__flash animate__infinite  animate__slower"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img animate__animated animate__fadeInRight">
              <img
                src="img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
