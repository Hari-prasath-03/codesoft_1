/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./MyProjects.css";
import myprojects from "../../assets/mywork_data.js";
import x_icon from "../../assets/x_icon.svg";
import navigate_icon from "../../assets/navigate_icon.svg";

const MyProjects = () => {
  const [isDiscOpen, setIsDiscOpen] = useState(
    Array(myprojects.length).fill(false)
  );

  const handleImageClick = (index) => {
    const newIsDiscOpen = [...isDiscOpen];
    newIsDiscOpen[index] = true;
    setIsDiscOpen(newIsDiscOpen);
  };

  const handleViewLessClick = (index) => {
    const newIsDiscOpen = [...isDiscOpen];
    newIsDiscOpen[index] = false;
    setIsDiscOpen(newIsDiscOpen);
  };

  return (
    <div id="portfolio" className="myprojects">
      <div className="myprojects-title">
        <h1>My Projects</h1>
      </div>
      <div className="myproject-container">
        {myprojects.map((project, i) => (
          <div key={i} className="img">
            <div className="img-ctr">
              <img height={200} src={project.w_img} alt={`Project ${i}`} />
              <a href={project.link} target="_blank" rel="noopener noreferrer"><img width={25} height={25} src={navigate_icon} alt="" /></a>
            </div>
            <div className="control">
              <p>{project.p_name}</p>
              <button onClick={() => handleImageClick(i)}>View more</button>
            </div>
            {isDiscOpen[i] && (
              <div className="discription">
                <img
                  className="d-img"
                  src={project.w_img}
                  alt={`Project ${i}`}
                />
                <div className="X" onClick={() => handleViewLessClick(i)}>
                  <img width={25} height={25} src={x_icon} alt="" />
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="Y">
                  <img width={20} height={20} src={navigate_icon} alt="" />
                </a>
                <div className="extras">
                  <div className="project-description">
                    <h4>Project Description:</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: project.p_disc }}
                    ></div>
                  </div>
                  <div className="technologies-used">
                    <h4>Technologies Used:</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: project.t_used }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
