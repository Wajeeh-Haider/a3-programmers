import React, { useState , useRef} from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import validator from "validator";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameBorder="0"
                  style={{ border: 0, width: "100%", height: "290px" }}
                  allowFullScreen
                ></iframe>
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
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
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
