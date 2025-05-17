import React from 'react'

const Projects = (props) => {

  return (

  <>
  
<div id="projects" className='p-cards'>

<div className='p-images'>
<img src={props.img} alt=" " />
<h3 className='label'>{props.title}</h3>


</div>




</div>



  </>
  )
}

export default Projects;
