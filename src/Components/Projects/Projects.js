import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import "./projects.scss";
import ProjectDetails from './ProjectDetails'

function Projects() {
  const projects =[
    {
      heading:"Dishlist",
      subHeading:"Hybrid Mobile Application",
      techStack:"Apache Cordova + Vue + Quasar + HTML + Sass",
      description:"Developed in a team of developers and designers and presented as a final project in Term 2. Dishlist is a digital menu which serves as a solution to restaurants. Being in a city with restaurants having food from different nationalities, customers find it tough to understand the menu. Dishlist mobile application makes it wast by providing detailed description of the menu items and ingredients with some real pictures and reviews uploaded by other customers",
      bgColor:"rgba(255, 102, 77, 0.9)",
      screenshots:["dishlist_scan_qr.png","dishlist_dish_photos.png", "dishlist_menu.png"]
    }

  ]
  return (

   
    <div>
      
      <div className="ProjectsWrapper">
        {projects.map(project=> <ProjectDetails projects={project}/>)}
      </div>
    </div>
  )
}

export default Projects
