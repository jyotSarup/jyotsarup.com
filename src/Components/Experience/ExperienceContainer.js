import React from 'react'
import Experience from './Experience'
import './experience.scss'

function ExperienceContainer() {
  const workExp = [{
    position:"System Engineer",
    timeServed:"3+ years",
    dates:"Sep 21,2015 - Jan 25,2019",
    company:"Tata Consultancy Services",
    place:"Noida,India",
    workDone:"",
    

  },
  {
    position:"Intern",
    timeServed:"6 months",
    dates:"Jun 1,2014 - Dec 1,2014",
    company:"NIIT Technology Ltd",
    place:"Noida,India",
    workDone:""
  }
]
  return (
    <div style={{background:"linear-gradient(#efeaea,#c3c0c0, #9e9e9e)", padding:"2em"}}>
      <h1 >What I have been upto</h1>
      <div className="desc" >
        My interest in logical thinking and analysis brought me in software industry. After completing 4 years of
        graduation in Information Technology, I started working as System Engineer in a globally known firm. The experience
        of working direcly with clients for more than three years helped me grow from a fresh graduate to an IT professional.
        New trends and technologies in this industry tempted me to get back into school and learn more. Currently, I am a Web and Mobile
        Application Development student at Langara College, Vancouver. This course is not only professional, but, it also keeps me updated
        with trending technologies. Can not wait to join a new team and get back to work this september. 
      </div>
      <div className="ExpWrapper" >
       
      {workExp.map(exp => <Experience experience= {exp}/>)}
    </div>
    </div>
    
  )
}

export default ExperienceContainer
