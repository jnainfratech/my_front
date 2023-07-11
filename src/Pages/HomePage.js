import React from 'react'
import NavBar from '../Components/NavBar'
import './HomePage.css'
import AboutUs from '../Components/AboutUs'
import { Container } from '@mui/material'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className='HeroImg'>
        <div className='HeroCont'>
          <p className='HeroTitle'>Primary hero Title</p>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster.</p>
          <button className='HeroBtn'>CONTACT US</button>
          
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