import React from 'react'

const Contact = () => {
  return (
   <>
   <div id="Contact" className='C-section'>
<h3 className="C-title">Contact</h3>
 <p>Lets get in touch and talk about your next project.</p>
<form className='C-form'>
<input type="text" placeholder='Name' required/>
<input type="text" placeholder='Email' required/>
<input type="text" placeholder='Subject' required/>
<input type="text" placeholder='Comment' required/>
  <button type="submit">SEND MESSAGE</button>
</form>
<div className='image-container'>

<img src="https://www.w3schools.com/w3images/map.jpg" alt="location map" />

</div>
   </div>
   
   </>
  )
}

export default Contact
