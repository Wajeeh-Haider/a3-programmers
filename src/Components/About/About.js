import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = ({ about, scrollToComponent }) => {
  return (
    <>
      <section ref={about} className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className="my-5">About Us</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6 p-4 p-lg-0 p-xl-0">
              <p>
                A3 Programmers is created to address the need for professional
                IT Consulting, Web Development services and Software
                Development. We enable you to become more efficient, streamline
                your operations, and grow to your true potential with the power
                of technology.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> Our qualified staff
                  has the knowledge and experience to tackle any problem.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> We’ll work directly
                  with your company to completely understand your situation,
                  make intelligent recommendations, and implement a customized
                  solution to fit the needs of your business.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Our vision is to
                  create & maintain good customer relationship, adding in their
                  satisfaction
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3>Book a Call Now!</h3>
              <p>
                Feel free to contact us for getting started with your project.
                Our solution designing experts will guide you all the way.
              </p>
              <Link
                to=""
                onClick={scrollToComponent}
                className="btn-learn-more"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
