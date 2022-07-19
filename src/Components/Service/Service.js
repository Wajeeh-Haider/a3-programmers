import React from "react";
import "./Service.css";
import serviceData from "./ServiceData";
const Service = ({ service }) => {
  return (
    <>
      <section ref={service} className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
          </div>
          <div className="row d-flex justify-content-center">
            {serviceData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-xl-4 col-md-6 d-flex align-items-stretch mt-5 mt-xl-4"
                  data-aos="zoom-in"
                  data-aos-delay={item.dataDelay}
                >
                  <div className="icon-box text-center">
                    <div className="icon">
                      <i className={`${item.icon} py-3`}></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
