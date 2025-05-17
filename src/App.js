
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (

    <>

      <Header />
      <Navbar />
      <div className='main-content'>

<div id="projects">
        <h3 className='p-title'>projects</h3>

        <div className="projects-grid">
          <Projects title="Summer House " img='https://www.w3schools.com/w3images/house5.jpg' />
          <Projects title="Brick House" img='https://www.w3schools.com/w3images/house2.jpg' />
          <Projects title="Renovated " img=' https://www.w3schools.com/w3images/house3.jpg' />
          <Projects title="Barn House " img='https://www.w3schools.com/w3images/house4.jpg ' />
          <Projects title=" Summer House" img='https://www.w3schools.com/w3images/house2.jpg ' />
          <Projects title="Brick House " img='https://www.w3schools.com/w3images/house5.jpg' />
          <Projects title=" Renovated" img=' https://www.w3schools.com/w3images/house4.jpg' />
          <Projects title="Burn house " img='https://www.w3schools.com/w3images/house3.jpg' />
        </div>
</div>
        <h3 className="A-title">About</h3>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <div className='team-container'>
          <About name="John Doe" role="CEO & Founder" img="https://www.w3schools.com/w3images/team2.jpg" />
          <About name="Jane Doe" role="Architect" img="https://www.w3schools.com/w3images/team1.jpg" />
          <About name="Mike Ross" role="Architect" img=" https://www.w3schools.com/w3images/team3.jpg" />
          <About name="Dan Star" role="Architect" img="https://www.w3schools.com/w3images/team4.jpg" />
        </div>
        <Contact />
      </div>

      <Footer />
    </>



  )
}

export default App
