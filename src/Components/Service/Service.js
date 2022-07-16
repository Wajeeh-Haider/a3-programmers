import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  return (
    <>
      <section ref={service} className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
          </div>
          <div className="row d-flex justify-content-center">
            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box text-center">
                <div className="icon">
                  <i className="bx bx-desktop py-4"></i>
                </div>
                <h4>Web Development</h4>
                <p>
                  We provide secure services by offering one-stop shop
                  experience in building startups ground up, as bringing new
                  ideas to life is our passion.
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box text-center">
                <div className="icon">
                  <i className="bx bx-mobile-alt  py-4"></i>
                </div>
                <h4>Mobile App Development</h4>
                <p>
                  We develop and provide native as well as hybrid mobile
                  applications with enchanting UI and delightful yet simple user
                  experience to our clients.
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box text-center">
                <div className="icon">
                  <i className="bx bxs-devices py-4"></i>
                </div>
                <h4>UI/UX Design</h4>
                <p>
                  We are skilled in designing each individual screen to create a
                  great experience for the users.
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box text-center">
                <div className="icon">
                  <i className="bi bi-body-text py-4"></i>
                </div>
                <h4>SEO</h4>
                <p>
                  We grow your business by boosting your online presence.
                  Demonstrate measurable results for any type of business.
                  Increase trust by providing customizable and easy to read
                  white-label reports.
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-5 mt-xl-4"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="icon-box text-center">
                <div className="icon">
                  <i className="bx bx-layer  py-4"></i>
                </div>
                <h4>Digital Marketing</h4>
                <p>
                  Your business comes first, with this philosophy, we take full
                  ownership over the technical aspects of your project,
                  providing you with pro-active updates, and keeping to the
                  agreed timelines. Freeing you to focus on what matters most
                </p>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-5 mt-xl-4"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="icon-box text-center">
                <div className="icon">
                  <i className="bi bi-clipboard2-data py-4"></i>
                </div>
                <h4>QA Testing Service</h4>
                <p>
                  Our pro-level testers provide extraordinary on-demand,
                  scalable and flexible Quality Assurance and Testing solutions
                  to clients on various devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
