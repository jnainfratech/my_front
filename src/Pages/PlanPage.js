import React from 'react'
import NavBar from '../Components/NavBar'
import plans from '../Images/Plans.png'
import './Plan.css'
import { Container } from '@mui/material'
import cardimg from '../Images/Dark.png'
import TerrifCard from '../Components/TerrifCard'
const tempdata = [
    {
        type:"Normal",
        img :cardimg,
        price:"20$",
        marketing:"Marketing Strat",
        compatitive:"Compatative Analysis",
        roadmap:"Road Map",
        monthly:"Month Reporting"
    },
    {
        type:"Normal",
        img :cardimg,
        price:"20$",
        marketing:"Marketing Strat",
        compatitive:"Compatative Analysis",
        roadmap:"Road Map",
        monthly:"Month Reporting"
    },    {
        type:"Normal",
        img :cardimg,
        price:"20$",
        marketing:"Marketing Strat",
        compatitive:"Compatative Analysis",
        roadmap:"Road Map",
        monthly:"Month Reporting"
    }
]

function PlanPage() {
  return (
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
                    <p className='plantarrifsm'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.</p>
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
  )
}

export default PlanPage