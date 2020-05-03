import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import "./projects.scss";
import ProjectDetails from './ProjectDetails'

function Projects() {
  const projects =[
    
    {
      id:1,
      heading:"Easy Realty System",
      subHeading:"Business Management Tool for Realtor",
      techStack:"React + ChartJS + NestJS + TypeScript + Nodejs",
      description:"Developed in a team of developers and designers and presented as a final project in Term 3. Easy Realty System is a business managemen tool for small to medium size realtor companies. Using this, they can manage their realtors, listings. The system also offers a dashboard where the user can see statistics of past sales of the realtors.",
      // bgColor:"#c3c0c0" ,
      bgColor:"linear-gradient(rgb(203, 218, 187), rgb(170, 189, 208), rgb(107, 119, 98))",
      screenshots:["easyRealtySystem_screenshots.png"],
      gitHub:"https://github.com/jyotSarup/easy-realty-system-dashboard",
      projectLink:"http://easyrealtysystem.wmdd.ca/",
      // isLastProject:false
    },
    {
      id:2,
      heading:"Dishlist",
      subHeading:"Hybrid Mobile Application",
      techStack:"Apache Cordova + Vue + Quasar + HTML + Sass",
      description:"Developed in a team of developers and designers and presented as a final project in Term 2. Dishlist is a digital menu which serves as a solution to restaurants. Being in a city with restaurants having food from different nationalities, customers find it tough to understand the menu. Dishlist mobile application makes it wast by providing detailed description of the menu items and ingredients with some real pictures and reviews uploaded by other customers",
      // bgColor:"#9e9e9e",
      bgColor:"linear-gradient(rgb(203, 218, 187), rgb(170, 189, 208), rgb(107, 119, 98))",
      screenshots:["dishlist_scan_qr.png","dishlist_dish_photos.png", "dishlist_menu.png"],
      gitHub:"https://github.com/jyotSarup/dishlist-hybrid-mobile",
      projectLink:"http://dishlist.wmdd.ca/",
      // isLastProject:true
    }

  ]
  return (

   
    <div>
      
      <div className="ProjectsWrapper">
        {projects.map(project=> <ProjectDetails key={project.id} projects={project}/>)}
      </div>
    </div>
  )
}

export default Projects
