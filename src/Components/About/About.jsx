/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import js from "../../assets/jsbg.png";
import node from "../../assets/nodebg.png";
import mongo from "../../assets/mongo.png";
// import profile_img from "../../assets/profile"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-images">
          <img src={js} alt="" />
          <img src={node} alt="" />
          <img src={mongo} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I&apos;m a dedicated Web Solution Engineer with a knack for
              developing seamless, responsive web applications. My journey in
              web development has equipped me with a diverse skill set,
              including HTML, CSS, SASS, Bootstrap, JavaScript, Node.js,
              Express.js, ejs, MongoDB, Git, and GitHub.
            </p>
            <p>
              In a short span of three months, I&apos;ve completed several projects
              that demonstrate my ability to build functional and visually
              appealing websites. My passion for coding drives me to
              continuously learn and adapt to new technologies, ensuring that I
              deliver modern and efficient solutions.
            </p>
          </div>
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "68%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "58%" }} />
            </div>
            <div className="about-skill">
              <p>Node and Express</p>
              <hr style={{ width: "63%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr style={{ width: "55%" }} />
            </div>
          </div> */}
        </div>
        {/* <div className="about-images">
          <img src="" alt="" />                                                                                 
          <img src="" alt="" />                                                                                 
          <img src="" alt="" />                                                                                 
        </div> */}
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3</h1>
          <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Months Experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;
