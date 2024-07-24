/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import hariHaran from "../../assets/hariharanRounded.jpeg"
import resume from "../../assets/Hariharan Resume.pdf"

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={hariHaran}alt="" />
      {/* <div className="img"></div> */}
      <h1>
        Hi, I&apos;m <span>Hariharan </span> Full-Stack web solution engineer.
      </h1>
      <h4>
        Craft exceptional web solutions - Let&apos;s build something amazing
        together.
      </h4>
      <p>
        I&apos;m a passionate Web Solution Engineer with 3+ months of experience
        in building dynamic and user-friendly web applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="AnchorLink" offset={25} href="#portfolio">
            Explore My Work
          </AnchorLink>
        </div>
        <a href={resume} download className="hero-resume">My resume</a>
      </div>
    </div>
  );
};

export default Hero;
