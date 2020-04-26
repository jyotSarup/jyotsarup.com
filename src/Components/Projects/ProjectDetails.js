import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "../../App.css";
import "./projects.scss";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";


function ProjectDetails(props) {
 
  const screenshotImages = require.context('../../assets', true);
  const screenshots = props.projects.screenshots
  console.log(props)
  return (
    <div>
        <div style={{backgroundColor : `${props.projects.bgColor}` }}className="projectDetailsWrapper">
          <div className="screenShotsWrapper">
            <div className="screenshots" >
              {screenshots.map(screenshot => <img className="screenshotImg" style={{maxWidth:`${(100/screenshots.length)-4}%`}} src={screenshotImages(`./${screenshot}`)}/>)}
            </div>
          </div>
          <div className="DescriptionWrapper">
            <h1 className="projectHeading">{props.projects.heading}</h1>
            <h3 className="ProjectSubHeading">{props.projects.subHeading}</h3>
            <p className="projectDescription">{props.projects.description}</p>
          </div>
          <div className="actionButtons">
              <a href={props.projects.projectLink}>View Website</a>
              <a href={props.projects.gitHub}>View on Github</a>
          </div>
        </div>
    </div>
  )
}

export default ProjectDetails
