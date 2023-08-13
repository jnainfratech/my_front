import React, { useEffect, useState } from 'react'
import './TerrifCard.css'
import { Button } from '@mui/material'

import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from 'react-redux';
import { initateTrans } from '../Slice/transactionSlice';

const useStyles = makeStyles({
  customIcon: {
    color: 'blue',
  },
});
function TerrifCard({data}) {
    // console.log("data in card",data)
    const dispatch =  useDispatch()
    const url  = useSelector(state=>state.trans?.transData?.URL?.data?.instrument_response?.redirect_info?.url)


    const [paymentWindow, setPaymentWindow] = useState(null);

  useEffect(() => {
      if (url && !paymentWindow) {
        // Open the payment page in a new popup window when paymentUrl is available
        const newPaymentWindow = window.open(url, '_blank', 'width=800,height=600');
        if (!newPaymentWindow) {
          console.error('Popup blocked by browser');
        } else {
          setPaymentWindow(newPaymentWindow);
        }
      }
    }, [url, paymentWindow]);
  
    const handlePayment = (type, price, coins, e) => {
      console.log('payment generate');
      const data = {
        name: type,
        price: price,
      };
      dispatch(initateTrans(data));
      e.preventDefault();
    };
  useEffect(() => {
    if (url) {
      // Open the payment page in a new tab when paymentUrl is available
      const paymentWindow = window.open(url, '_blank');
      if (!paymentWindow) {
        console.error('Popup blocked by browser');
      }
    }
    
  }, [url]);
  return (
    <div className='terrifcard'> 
        <div className='cardimg'>
            <p className='cardtxt'>{data?.type}</p>
            <p className='cardprice'> ₹{data?.price}</p>
            <p className='cardprice'> {data?.coins} MPOINTS</p>
        </div>
        <div className="textcard" >
            <p className='carttxt'>Deliverables</p>
            <div>
              <div className='samerow'>
                <DoneIcon style={{color:"#0764E3"}}/> 
                <p className='txt'>{data?.excel}</p>
              </div>
              <div className='samerow'>
                <DoneIcon style={{color:"#0764E3"}} />
                <p className='txt'>{data?.rccdwg}</p>
              </div>
              <div className='samerow'>
                <DoneIcon style={{color:"#0764E3"}} />
                <p className='txt'>{data?.gadwg}</p>
              </div>
              <div className='samerow'>
                <DoneIcon style={{color:"#0764E3"}} />
                <p className='txt'>{data?.staad}</p>
              </div>
              
            </div>  
        </div>
        <div>
          <button className='buybtn' onClick={e=>handlePayment(data.type,data.price,data.coins,e)}> BUY NOW</button>
        </div>
        
    </div>
  )
}

export default TerrifCard