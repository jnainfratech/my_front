import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import './NavBar.css';
import Logo from '../Images/Logo12.png'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { logoutUser } from '../Slice/userSlice';
const options = [
    'Profile',
    'Map',
    'Transaction',
    'Logout',
  ];
function NavBar() {
    const userData = useSelector((state) => state.user.userData);

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const dispatch = useDispatch()
    const handleLogout = ()=>{
        localStorage.removeItem('accessToken');
        // Dispatch the logout action
        dispatch(logoutUser());
    }
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
const handlePlans = ()=>{
    navigate("/plans")
}
const handleHome = ()=>{
    navigate("/")
}

const navigate = useNavigate()
const [token,setToken] = useState("")
useEffect(()=>{
    setToken(localStorage.getItem("accessToken"))
},[])
const hanndleClick = ()=> {
    navigate("/login")
}
const handleLogoClick = ()=>{
    navigate("/")
}
const handleStructure = ()=>{
    navigate('/Structure')
}
  return (
    <div>
        <div className='navbar'>
            <Container className='cont1'>
                <div className='navCont'>
                    <div className='navLogo' onClick={handleLogoClick} >
                        <img src={Logo} alt="Error in logo" className='navLogo'></img>
                    </div>
                    <div className='navItem'>
                        <div onClick={handleHome}>
                            <p className='text'>Home</p>
                        </div>
                        <div>
                            <p>About</p>
                        </div>
                        <div>
                            <p onClick={handleStructure}>Use US</p>
                        </div>
                        <div onClick={handlePlans}>
                            <p>Our Plans</p>
                        </div>
                        <div className='navbtndiv'>
                            { userData  ?  
                                <div> 
                                   <Stack direction="row" spacing={2}>
                                    
                                        <div>
                                            <Button
                                            ref={anchorRef}
                                            id="composition-button"
                                            aria-controls={open ? 'composition-menu' : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleToggle}
                                            >
                                            <AccountBoxIcon style={{ color: 'black', fontSize: 30 }}  />
                                            </Button>
                                            <Popper
                                            open={open}
                                            anchorEl={anchorRef.current}
                                            role={undefined}
                                            placement="bottom-start"
                                            transition
                                            disablePortal
                                            >
                                            {({ TransitionProps, placement }) => (
                                                <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin:
                                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                }}
                                                >
                                                <Paper className='muipaper'>
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList
                                                        autoFocusItem={open}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                        onKeyDown={handleListKeyDown}
                                                        className='muipaper'
                                                    >   
                                                        <div className='dropdownitem'>
                                                            <div>
                                                                Hello,{userData.username}!
                                                            </div>
                                                        </div>
                                                        <Box borderBottom={1} borderColor="black" style={{color:"black"}}/>

                                                        <div className='dropdownitem'>
                                                            <div>
                                                                <AccountBalanceWalletIcon />
                                                            </div>
                                                            <div>
                                                                <MenuItem onClick={handleClose}>Wallet</MenuItem>
                                                            </div>
                                                            
                                                        </div>    
                                                        <div className='dropdownitem'>
                                                            <div>
                                                                <AccountBoxIcon />
                                                            </div>
                                                            <div>
                                                                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                                                            </div>
                                                            
                                                        </div>
                                                        <div className='dropdownitem'>
                                                            <div>
                                                                <PaidIcon />
                                                            </div>
                                                            <div>
                                                                <MenuItem onClick={handleClose}>My Transaction</MenuItem>
                                                            </div>
                                                            
                                                        </div>
                                                       
      
                                                    <div className='dropdownitem'onClick={handleLogout} >
                                                            <div>
                                                                <LogoutIcon />
                                                            </div>
                                                            <div>
                                                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                            </div>
                                                            
                                                        </div>
                                                    
                                                    </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                                </Grow>
                                            )}
                                            </Popper>
                                        </div>
                                        </Stack>

                                </div> :

                                <button className='navbtn'onClick={hanndleClick}>Login</button>
                            }   
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default NavBar