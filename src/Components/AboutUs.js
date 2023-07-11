import * as React from 'react';
import Box from '@mui/material/Box';

import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Rectange from '../Images/Rectangle2.png'
import './AboutUs.css'

function AboutUs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
  return (
    <div>
         <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="About" value="1" />
                <Tab label="Mission" value="2" />
                <Tab label="Vision" value="3" />
            </TabList>
        </Box>
        <TabPanel className='tab' value="1">
            <div className='TabContent'>
                <div className='TabText'>
                    <p className='TabTitle'>Hurry Up</p>
                    <p className='TabSlogan'>If You Can Deam it ,  you can do it</p>
                    <p className='TabPara'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.  Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. </p>
               
                </div>
                <div className='TabImg'>
                
                    <img src={Rectange} alt="error"  className='regImag'/>
                </div>
            </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    </div>
  )
}

export default AboutUs