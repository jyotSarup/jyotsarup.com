import React from "react";
import "../../App.css";
import "./projects.scss";


function ProjectDetails(props) {
 
  const screenshotImages = require.context('../../assets', true);
  const screenshots = props.projects.screenshots
  console.log(props)
  return (
    <div>
        <div style={{background : `${props.projects.bgColor}` }}className="projectDetailsWrapper">
        <h1 style={{color:"#07072b"}}className="projectHeading">{props.projects.heading}</h1>
          <div className="screenShotsWrapper">
            <div className="screenshots" >
              {screenshots.map(screenshot => <img className="screenshotImg" style={{maxWidth:`${(100/screenshots.length)-4}%`}} src={screenshotImages(`./${screenshot}`)}/>)}
            </div>
          </div>
          <div className="DescriptionWrapper">
            
            <h3 style={{color:"#07072b"}} className="ProjectSubHeading">{props.projects.subHeading}</h3>
            <p className="projectDescription">{props.projects.description}</p>
          </div>
          <div className="actionButtons">
              <a href={props.projects.projectLink}>View Website</a>
              <a href={props.projects.gitHub}>View on Github</a>
          </div>
          {/* {!props.projects.isLastProject &&( <hr style={{width:"40%",height:"3px",backgroundColor:"#07072b",margin:"auto", marginTop:"2em"}}/>)} */}
        </div>
    </div>
  )
}

export default ProjectDetails
