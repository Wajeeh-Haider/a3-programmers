import React from "react";
import { Link } from "react-router-dom";
import "./WhyUs.css";
const WhyUs = () => {
  return (
    <div>
      <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div className="content">
                <h3>Why Choose Us</h3>
                <p>
                  Preparing for your success, we provide truly prominent IT
                  solutions.
                </p>
              </div>

              <div className="accordion-list">
                <ul>
                  <li>
                    <Link
                    to="/"
                      data-bs-toggle="collapse"
                      className="collapse"
                      data-bs-target="#accordion-list-1"
                    >
                      WE HAVE SKILLED TEAM
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="accordion-list-1"
                      className="collapse show"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        We have highly skilled team with excellent technical
                        knowledge and experience in using latest software
                        standards, tools, platforms, frameworks and technologies
                        and we invest continuously in training and education, to
                        be able to respond to any new technology challenges and
                        demands from our clients.
                      </p>
                    </div>
                  </li>

                  <li>
                    <Link
                    to="/"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-2"
                      className="collapsed"
                    >
                      03 YEARS OF IT OUTSOURCING
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="accordion-list-2"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        In more than 3 years of IT outsourcing, we have gained
                        experience in a wide spectrum of technologies,
                        industries, and application types.
                      </p>
                    </div>
                  </li>

                  <li>
                    <Link
                    to="/"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-3"
                      className="collapsed"
                    >
                      WE DELIVER EXCELLENCE
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </Link>
                    <div
                      id="accordion-list-3"
                      className="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        We offer strong and relibe services. We have clients
                        that have been working with us since the company was
                        founded. Last but not least, A3 Programmers is one of
                        the best places for outsourcing.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
              style={{ backgroundImage: 'url("  img/why-us.png")' }}
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
