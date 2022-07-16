import React from "react";
import "./Footer.css";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>
                  Join Our Newsletter To Get Latest Updates From Us.
                </p>
                <form method="post">
                  <input type="email" name="email" />
                  <input type="submit" placeholder="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright
            <strong>
              <span> A3 Programmers</span>
            </strong>
            . All Rights Reserved {date}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
