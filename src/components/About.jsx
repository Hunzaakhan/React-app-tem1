import React from 'react'

const About = (props) => {
  return (
    <>
    
    <div id="About" className='A-section'>
<div  className="A-images">

<img  src={props.img} alt=" " />

</div>

<h3>{props.name}</h3>
<p className='role'>{props.role}</p>
<p className="team-description">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button className="contact-btn">Contact</button>
    </div>
    
    </>
  )
}

export default About
