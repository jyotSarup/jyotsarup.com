import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import "./skills.scss";

function Skills() {

  useEffect(()=>{
    let div1 = document.getElementsByClassName('division')

    div1 = [...div1] 

    const division = document.addEventListener('scroll',()=>{
      div1.forEach(div=>{
          let bounding = div.getBoundingClientRect()
          if(bounding.bottom <= 514){
            div.style.transform = "translateX(0)"          
          }
      })
    })

  },[])

  return (
    <div>
      <h2>Skills</h2>
      <div className="skillsWrapper">
        <div className="client-side tools"></div>
        <div id="division1" className="division fromLeft"></div>
        <div className="server-side tools"></div>
        <div id="division2" className="division fromRight"></div>
        <div className="database tools"></div>
        <div id="division3" className="division fromLeft"></div>
        <div className="other tools"></div>
      </div>
    </div>
  )
}

export default Skills
