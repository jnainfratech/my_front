import React from 'react'
import './TerrifCard.css'

function TerrifCard({data}) {
    console.log("data in card",data)

  return (
    <div className='terrifcard'> 
        <div className='cardimg'>
            <p className='cardtxt'>{data.type}</p>
            <p className='cardprice'>{data.price}</p>
            <p className='cardtxt'>Add to wallet</p>
        </div>
        <div>
            <p>{data.marketing}</p>
            <p>{data.compatitive}</p>
            <p>{data.roadmap}</p>
        </div>
        
    </div>
  )
}

export default TerrifCard