import * as React from 'react';
import Box from '@mui/material/Box';

import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Rectange from '../Images/Rectangle2.png'
import About2  from '../Images/about2.jpg'
import About3 from '../Images/about3.jpg'
import './AboutUs.css'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  activeTab: {
    color: 'your_desired_color', // Change this to the color you want for the active tab text
  },
}));


function AboutUs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    const useStyles = makeStyles((theme) => ({
      activeTab: {
        color: '#0764E3', 
        border: 'none',
        '&.Mui-selected': {
          borderBottom: `2px solid #0764E3`, // Change this to the color you want for the active tab bottom border
        },                                              // Change this to the color you want for the active tab text
      },
    }));
  const classes = useStyles();    
  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="About" value="1" className= {value === '1' ? classes.activeTab : '' }/>
                <Tab label="Mission" value="2" className={value==='2' ? classes.activeTab : '' } />
                <Tab label="Vision" value="3" className={value === '3' ? classes.activeTab : ""} />
            </TabList>
        </Box>
        <TabPanel className='tab' value="1">
            <div className='TabContent'>
                <div className='TabText'>
                    <p className='TabTitle'>Hurry Up</p>
                    <p className='TabSlogan'>If You Can Deam it ,  you can do it</p>
                    <p className='TabPara'>Welcome to our ingeniously crafted website, meticulously designed to serve as a powerful tool for engineers, empowering them to effortlessly access their deliverables with unprecedented speed and unmatched cost-effectiveness. Enhance your client services like never before as you immerse yourself in the efficiency and convenience of this cutting-edge platform. While catering to experienced engineers, this exceptional tool ensures a seamless journey towards optimized outcomes, unlocking new heights of professional excellence and client satisfaction. Discover the future of streamlined engineering solutions, exclusively tailored for you! </p>
               
                </div>
                <div className='TabImg'>
                
                    <img src={Rectange} alt="error"  className='regImag'/>
                </div>
            </div>
        </TabPanel>
        <TabPanel value="2">
            <div className='TabContent'>
                <div className='TabText'>
                    <p className='TabSlogan'>Empowering minds, inspiring possibilities: Uniting the world through knowledge.</p>
                    <p className='TabPara'> At the heart of our mission lies an unwavering commitment: to cater to the dynamic needs of the market by revolutionizing the design and drawing process, unlocking unprecedented speed, and fostering unparalleled efficiency. Embracing innovation as our guiding light, we aspire to redefine industry standards, seamlessly adapting to the ever-changing landscape, and propelling your projects towards remarkable success. With our visionary approach, we aim to empower you with cutting-edge tools and solutions that empower your creativity and enable you to achieve extraordinary feats, all while surpassing market demands with grace and agility. Welcome to a future where possibilities know no bounds, and your ambitions find their true home. Together, let's create wonders!</p>
               
                </div>
                <div className='TabImg'>
                
                    <img src={About2} alt="error"  className='regImag'/>
                </div>
            </div>
        </TabPanel>
        <TabPanel value="3">
        <div className='TabContent'>
                <div className='TabText'>
                <p className='TabSlogan'>A future where boundless innovation and collaboration reshape the world for the better, driven by the shared pursuit of knowledge and compassion.</p>
                    <p className='TabPara'>Welcome to our world of engineering innovation, where the horizon brims with limitless potential. Our vision embraces a transformative future, one where automation, driven by cutting-edge technology, seamlessly enhances every facet of your project journey.
                      With unwavering dedication, we aim to unlock the power of AI technology, empowering you to conquer complex engineering tasks with newfound ease and efficiency. Through the visionary integration of AI, we envision a process where </p>
               
                </div>
                <div className='TabImg'>
                
                    <img src={About3} alt="error"  className='regImag'/>
                </div>
            </div>
        </TabPanel>
      </TabContext>
    </Box>
    </div>
  )
}

export default AboutUs