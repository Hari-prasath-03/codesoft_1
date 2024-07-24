/* eslint-disable no-unused-vars */
import React from "react";
import "./Services.css";
import services_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="servies">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {services_data.map((service, i) => (
          <div key={i} className="services-formate">
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
