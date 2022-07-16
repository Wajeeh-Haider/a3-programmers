import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";
const Team = ({ team }) => {
  return (
    <>
      <section ref={team} className="team section-bg ">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>
              We've created a great team. Working with these people is a great
              pleasure.
            </p>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="pic">
                  <img src="img/team/team-1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Saqlain Ashraf</h4>
                  <span>Web & Mobile App Developer</span>
                  <p>
                    Life is dependably going to learn new things and when we
                    comes to begin another venture.
                  </p>

                  <div className="social">
                    <Link
                      to=""
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/profile.php?id=100010000892908",
                          "_blank"
                        )
                      }
                    >
                      <i className="ri-facebook-fill"></i>
                    </Link>
                    <Link
                      to=""
                      onClick={() =>
                        window.open(
                          " https://instagram.com/mehar_hamad534784?igshid=YmMyMTA2M2Y=",
                          "_blank"
                        )
                      }
                    >
                      <i className="ri-instagram-fill"></i>
                    </Link>
                    <Link
                      to=""
                      onClick={() =>
                        (window.location = "mailto:Saqlainashraf493@gmail.com")
                      }
                    >
                      <i className="bx bxl-google"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="pic">
                  <img src="img/team/team-3.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Hamad Ali</h4>
                  <span>Front-End Developer & Graphic Designer </span>
                  <p>
                    Dealing with complex problem as a developer always teach new
                    things to me.
                  </p>
                  <div className="social">
                    <Link
                      to=""
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/MrHd534784",
                          "_blank"
                        )
                      }
                    >
                      <i className="ri-facebook-fill"></i>
                    </Link>

                    <Link
                      to=""
                      onClick={() =>
                        window.open(
                          " https://instagram.com/mehar_hamad534784?igshid=YmMyMTA2M2Y=",
                          "_blank"
                        )
                      }
                    >
                      <i className="ri-instagram-fill"></i>
                    </Link>
                    <Link
                      to=""
                      onClick={() =>
                        (window.location = "mailto:Hamadali534784@gmail.com")
                      }
                    >
                      <i className="bx bxl-google"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div
                className="member d-flex align-items-start"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="pic">
                  <img
                    src="img/team/team-4.jfif"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Wajeeh Haider</h4>
                  <span>Full Stack Developer</span>
                  <p>
                    I am passionate about building excellent software that
                    improves the lives of those around me.
                  </p>
                  <div className="social">
                    <Link
                      to=""
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/wajeehhaider.shah/",
                          "_blank"
                        )
                      }
                    >
                      <i className="ri-facebook-fill"></i>
                    </Link>
                    <Link
                      to=""
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/syedwajeehshahhaider/",
                          "_blank"
                        )
                      }
                    >
                      <i className="ri-instagram-fill"></i>
                    </Link>
                    <Link
                      to=""
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/wajeeh-haider-aa55a520a/",
                          "_blank"
                        )
                      }
                    >
                      <i className="ri-linkedin-box-fill"></i>
                    </Link>
                    <Link
                      to=""
                      onClick={() =>
                        (window.location = "mailto:Swajeeh03@gmail.com")
                      }
                    >
                      <i className="bx bxl-google"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
