import React from 'react'
import './MyProfile.css'
import { Container } from '@mui/material'
import NavBar from '../Components/NavBar'
function ProfilePage() {
  return (
    <div>
        <NavBar />
        <div className='profileCont'>
            <Container>
                <span className='profilehead'>My Profile</span>
            </Container>
            
        </div>
        <div>
            <Container >
                <p className='profilebread'>Home > My Profile</p>
            </Container>
        </div>
        <div>
            <Container className='profileform'>
                <div>
                    <p className='profilelabel'>Username</p>
                    <input className='profileinput' />
                </div>
                <div>
                    <p className='profilelabel'>Email</p>
                    <input className='profileinput' />
                </div>
                <div>   
                    <p className='profilelabel'>Phone</p>
                    <input className='profileinput' />
                </div>
                <div>
                    <p className='profilelabel'>Address</p>
                    <input className='profileinput' />
                </div>
                <div className='profilebtndiv'>
                    <button className='profilebtn'>Update</button>
                </div>

                
            </Container>
        </div>
    </div>
  )
}

export default ProfilePage