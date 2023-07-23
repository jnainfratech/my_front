import React, { useEffect, useState } from 'react'
import './RegisterPage.css'
import RegisterImage from '../Images/RegisterPage.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../Slice/userSlice';
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const status =  useSelector((state)=>state.user.status);
  const navigate = useNavigate();

  const [name,setName] = useState("")
  const [passowrd,setPassword] =  useState("")
  const [email,setEmail] = useState("")
  const [conformPassword,setConformPassowrd] = useState()

  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [conformPasswordError, setConformPasswordError] = useState('');

  const [token,setToken] = useState("")

  const handleRegister = ()=>{
     // Reset previous error messages
     setNameError('');
     setPasswordError('');
     setEmailError('');
     setConformPasswordError('');

       // Perform validation here
    if (!name || name.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(name)) {
      setNameError('Username must be at least 8 characters and contain both alphabets and numbers.');
      return;
    }
    if (!passowrd || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(passowrd)) {
      setPasswordError('Password must be at least 8 characters and contain both alphabets and numbers.');
      return;
    }
    
    if (!email) {
      setEmailError('Please enter your email.');
      return;
    }

    if (!conformPassword) {
      setConformPasswordError('Please confirm your password.');
      return;
    }
    if (passowrd !== conformPassword) {
      setConformPasswordError('Passwords do not match.');
      return;
    }

    const  data =  {
      name:name,
      email:email,
      password:passowrd
    }
    dispatch(fetchUserData(data))

  }
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && status === 200) {
      navigate('/'); // Redirect to the home route
    }
  }, [navigate, status]);
  // useEffect(()=>{
  //   const accessToken = localStorage.getItem('accessToken');
  //   if(status==200){
  //     navigate("/")
  //   }
  // },[])
const  handleLogin = ()=>{
  navigate('/login')
}


  return (
    <div className='regcont'>
      <div className='regimgcont'>
          <img  className='regimg' src={RegisterImage} alt="error"/>
      </div>
      <div className='reg'>
        <div className='regform'>
            <div>
              <p className='reghead'>REGISTER</p>
            </div>
            <div> 
              <p className='regtxt'>Bring to the table win-win survival strategies to 
                ensure proactive domination. At the end of the day, 
                going forward.</p>
              
              </div>
              <div>
                <p className='regusername'>USERNAME</p>
                <input className='reginput' name={name} onChange={(e)=>setName(e.target.value)} ></input>
                {nameError && <div className='error'>{nameError}</div>}
              </div>
              <div>
                <p className='regusername'>EMAIL</p>
                <input className='reginput' name={email} onChange={(e)=>setEmail(e.target.value)} ></input>
                {emailError && <div className='error'>{emailError}</div>}
              </div>
              <div>
                <p className='regusername'>PASSWORD</p>
                <input className='reginput' name={passowrd} onChange={(e)=>setPassword(e.target.value)} type='password'></input>
                {passwordError && <div className='error'>{passwordError}</div>}
              </div>
              <div>
                <p className='regusername'>CONFIRM PASSWORD</p>
                <input className='reginput'name={conformPassword} onChange={(e)=>setConformPassowrd(e.target.value)} type='password' ></input>
                {conformPasswordError && (
              <div className='error'>{conformPasswordError}</div>
            )}
              </div>
              <div className='regbtncon'>
                <button className='regbtn'onClick={handleRegister} >REGISTER</button>
              </div>
              <div>
                <p className='regfp' onClick={handleLogin}>ALREADY HAVE ACCOUNT ?</p>
                
              </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage