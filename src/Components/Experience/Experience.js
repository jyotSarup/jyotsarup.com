import React from 'react'

function Experience(props) {
  
  return (
    

    <div className="experience">
     
      <h2 style={{paddingBottom:"0",marginBottom:"0",color:"#07072b"}}>{props.experience.company}</h2>
  <h4 style={{marginTop:"-8px"}}>{props.experience.place}</h4>
      <h3 style={{marginBottom:"-8px"}}>{props.experience.position}</h3>
      <h3 style={{margin:"-8px"}}>{props.experience.timeServed}</h3>
      <h4 style={{margin:"0"}}>{props.experience.dates}</h4>
      <p>{props.experience.workDone}</p>
    </div>
  )
}

export default Experience
