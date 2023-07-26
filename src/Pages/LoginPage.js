import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import LoginImg from '../Images/LoginPage.png'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Slice/userSlice';

function LoginPage() {
  const dispatch =  useDispatch()
  const userData = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const status =  useSelector((state)=>state.user.status);

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const navigate =  useNavigate()
  const handleRegister = ()=>{
    navigate("/register")
  }
  const handleLogin = ()=>{
    console.log("even genrated")
    const data =  {
      name:username,
      password:password
    }
    dispatch(loginUser(data))
  }
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && status === 200) {
      navigate('/'); // Redirect to the home route
    }
  }, [navigate, status]);
  return (
    <div className='loginContainer'>
      <div className='loginimgcontainer'>
        <img src={LoginImg} className='loginimg' />
      </div>
      <div className='loginform'>
          <div className='containerlogin'>
              <div>
                <p className='logintypo1'>HEY,LOOK WHO'S HERE!</p>
                <p className='logintypo2'>LOGIN</p>
              </div>
              <div>
                  <p className='loginusername'>Username</p>
                  <input className='logininput' onChange={(e)=>setUsername(e.target.value)} ></input>
              </div>
              <div>
                  <p className='loginusername'>Password</p>
                  <input className='logininput' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
              </div>
              <div style={{marginTop:"15px"}}>
                  <button className='loginbtn' onClick={handleLogin} >LOGIN</button>
              </div>
              <div>
                <p className='loginfp'>FORGOT PASSWORD?</p>
                <p className='loginfp' onClick={handleRegister} >WANT TO REGISTER WITH US?</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default LoginPage