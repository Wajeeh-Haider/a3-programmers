import React, { useState, useRef } from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  const [getValues, setGetValues] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const handleValues = (e) => {
    setGetValues({ ...getValues, [e.target.name]: e.target.value });
  };

  const { name, email, message, subject } = getValues;

  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message && subject) {
      if (!validator.isEmail(email)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter a valid email address!",
        });
      } else {
        const sendDatatoDb = await fetch(
          "https://a3-programmers-default-rtdb.firebaseio.com/a3.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              message,
              subject,
            }),
          }
        );
        if (!sendDatatoDb) {
          setInterval(() => {
            Swal.fire({
              title: "Error",
              text: "Something went wrong",
              icon: "error",
              confirmButtonText: "Try again",
            });
          }, 1000);
        } else {
          Swal.fire({
            icon: "success",
            title: "Yayy!",
            text: "We will reach you out ASAP!",
            button: "Okay",
          });
          setGetValues({
            name: "",
            email: "",
            message: "",
            subject: "",
          });
          emailjs
            .sendForm(
              "service_i4ujswe",
              "template_4vz19vf",
              form.current,
              "Q97mOncbRQolPnOoP"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        }
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
      });
    }
  };

  return (
    <>
      <section id="contact" ref={contact} className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className="my-5">Contact</h2>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location</h4>
                  <p>54 1 A2 Township Lahore</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email</h4>
                  <p>
                    <Link
                      to=""
                      onClick={() =>
                        (window.location = "mailto:support@a3programmers.tech")
                      }
                    >
                      Support@a3programmers.tech
                    </Link>
                  </p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+92 303 4143 408</p>
                </div>
                <div className="facebook">
                  <i className="bx bxl-facebook"></i>
                  <h4>Facebook</h4>
                  <p></p>
                </div>
                <div className="instagram">
                  <i className="bx bxl-instagram"></i>
                  <h4>Instagram</h4>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                className="php-email-form"
                method="POST"
                ref={form}
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={handleValues}
                      id="name"
                      value={getValues.name}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={handleValues}
                      name="email"
                      id="email"
                      value={getValues.email}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleValues}
                    name="subject"
                    id="subject"
                    value={getValues.subject}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    onChange={handleValues}
                    name="message"
                    rows="10"
                    value={getValues.message}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
