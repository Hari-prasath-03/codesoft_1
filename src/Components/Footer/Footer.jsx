/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import linkedIn_icon from "../../assets/linkedIn_icon.svg";
import gitHub_icon from "../../assets/gitHub_icon.svg";

const Footer = () => {
  const linledIn = "https://www.linkedin.com/in/hariharan-c/";
  const gitHub = "https://github.com/Hariharan-webdev";

  return (
    <div className="footer">
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © {new Date().getFullYear()} Hariharan All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a href={linledIn} target="_blank" rel="noopener noreferrer">
            <img src={linkedIn_icon} alt="" />
          </a>
          <a href={gitHub} target="_blank" rel="noopener noreferrer">
            <img src={gitHub_icon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
