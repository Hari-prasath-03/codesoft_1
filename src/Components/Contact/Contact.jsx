/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [popup, setPopup] = useState(false);
  const [formMsg, setFormMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = event.target.elements;

    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      setPopup(true);
      setFormMsg("All the fields are Required.");
      return;
    }

    const formData = new FormData(event.target);

    formData.append("access_key", "36766442-1460-4ee3-a6a1-acd5c6cf79b1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setPopup(true);
      setFormMsg(res.message);
      console.log("Success", res);
    } else {
      setPopup(true);
      setFormMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s Talk</h1>
          <p>
            I&apos;m currently available to talk on new projects, so feel free
            to send a message about any thing you want me to wprk on. You can
            contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detial">
              <img src={mail_icon} alt="" />
              <p>hariharanwebdev@gmail.com</p>
            </div>
            <div className="contact-detial">
              <img src={call_icon} alt="" />
              <p>+91 9791676739</p>
            </div>
            <div className="contact-detial">
              <img src={location_icon} alt="" />
              <p>Salem, Tamil nadu</p>
            </div>
          </div>
        </div>
        {popup ? (
          <>
            <div className="popup-bg"></div>
            <div className="popup-msg">
              <p>{formMsg}</p>
              <button
                onClick={() => setPopup(false)}
                className="contact-submit"
              >
                Ok
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
        <form onSubmit={onSubmit} className="contact-right">
          <div className="input-group">
            <label htmlFor="name">Your Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">Write Your message here:</label>
            <textarea
              id="text"
              name="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
