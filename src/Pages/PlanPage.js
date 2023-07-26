import React from 'react'
import NavBar from '../Components/NavBar'
import plans from '../Images/Plans.png'
import './Plan.css'
import { Container } from '@mui/material'
import cardimg from '../Images/Dark.png'
import TerrifCard from '../Components/TerrifCard'
import Footer from '../Components/Footer'
const tempdata = [
    {
        type:"Normal",
        img :cardimg,
        price:"10000",
        coins:"22",
        excel:"Designed Excel",
        gadwg:"G.A Dwg",
        rccdwg:"RCC Dwg",
        staad:"Staad Input file"
    },
    {
        type:"Medium",
        img :cardimg,
        price:"25000",
        coins:"60",
        excel:"Designed Excel",
        gadwg:"G.A Dwg",
        rccdwg:"RCC Dwg",
        staad:"Staad Input file"
    },    
    {
        type:"Premium",
        img :cardimg,
        price:"50000",
        coins:"130",
        excel:"Designed Excel",
        gadwg:"G.A Dwg",
        rccdwg:"RCC Dwg",
        staad:"Staad Input file"
    }
]

function PlanPage() {
  return (
    <div>
    <div>
        <div>
            <NavBar></NavBar>
            <div className='planheader'>
                <Container>
                    <span className='plantxt'>Our Plans</span>
                </Container>
            </div>
            <div>
                <Container>
                    <div>
                        <p className='planbread'>Home  > Our plans</p>
                    </div>
                </Container>
            </div>
            <div>
                <Container>
                    <p className='plantarrif'>Tarrif Plans</p>
                  
                    <div className='planreturn'>
                    { 
                    tempdata.map((data)=>{
                      
                        return <TerrifCard data={data} />
                        
                    })
                    }
                    </div>  
                </Container>
            </div>

        </div>
        
    </div>
    <div style={{marginTop:'100px'}}>
        <Footer />
    </div>
    
    </div>
  )
}

export default PlanPage