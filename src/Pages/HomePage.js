import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import './HomePage.css'
import AboutUs from '../Components/AboutUs'
import { Container } from '@mui/material'
import Footer from '../Components/Footer'
import { TypeAnimation } from 'react-type-animation';
import Typewriter from '../Components/Typewriter'


function HomePage() {
  const [text, setText] = useState('Hello');


  useEffect(() => {
    // Function to update the text with animation
    const animateText = () => {
      setTimeout(() => {
        setText('Welcome to'); // Text to display after 1 second
      }, 1000);

      setTimeout(() => {
        setText('Concept Celerio'); // Text to display after 2 seconds
      }, 2000);

      // Add more setTimeout functions for additional animation steps
      // Example:
      // setTimeout(() => {
      //   setText('Your Text Here');
      // }, 3000);
    };

    animateText(); // Call the animation function

  }, []);
  return (
    <div>
      <NavBar />
      <div className='HeroImg'>
        <div className='HeroCont'>
  
          <p className='HeroTitle'> <Typewriter text=" Welcome to CONCEPT CELERIO" delay={150} /></p>
          <p className='Herotxt'>Experience unparalleled efficiency and flawless results by effortlessly obtaining all your valuable deliverables through the sheer simplicity of a few keystrokes. Our streamlined process ensures a seamless experience, leaving no room for errors and providing you with exceptional outcomes you can always count on. With our user-friendly system, accomplishing your tasks has never been more delightful and rewarding!</p>
          <button className='HeroBtn'>REGISTER WITH US</button>
          
        </div>
        
      </div>
      
        <Container>
          <div className='HeroAboutus'>
           <AboutUs />
          </div>
          
        </Container>
        
        <Container>
          <Footer />
        </Container>
      
      
      
    </div>
    
  )
}

export default HomePage