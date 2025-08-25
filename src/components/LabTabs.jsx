import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './LabTabs.css';
import portrait from '../assets/images/portrait.jpg';

import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box className="tabs-container" sx={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar Tabs - stays vertical */}
        <TabList
          onChange={handleChange}
          orientation="vertical"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            minWidth: { xs: 100, md: 150 },
            '& .MuiTab-root': {
              color: '#61dafb',
              fontSize: { xs: '0.8rem', md: '1rem' },
              '&.Mui-selected': {
                color: '#fff',
              },
            },
          }}
        >
          <Tab label="Home" value="1" />
          <Tab label="About" value="2" />
          <Tab label="Skills" value="3" />
          <Tab label="Portfolio" value="4" />
          <Tab label="Contact" value="5" />
        </TabList>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
          {/* HOME */}
          <TabPanel value="1">
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                alignItems: 'center',
                gap: 3,
                minHeight: '80vh',
              }}
            >
              {/* Left side - text */}
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <h2>HOME</h2>
                <p>Junior full stack developer ready to bring your projects to life.</p>
              </Box>

              {/* Right side - image */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={portrait} className="portrait" alt="portrait" />
              </Box>
            </Box>
          </TabPanel>


          {/* ABOUT */}
          <TabPanel value="2">
            <Box className="about-text"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <h2>About Me</h2>
              <About />
            </Box>
          </TabPanel>

          {/* SKILLS */}
          <TabPanel value="3">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 2,
              }}
            >
              <h2>SKILLS</h2>
              <Skills />
            </Box>
          </TabPanel>

          {/* PORTFOLIO */}
          <TabPanel value="4">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 2,
              }}
            >
              <h2>PORTFOLIO</h2>
              <Projects />
            </Box>
          </TabPanel>

          {/* CONTACT */}
          <TabPanel value="5">
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
    }}
  >
      <h2>CONTACT</h2>
      <Contact />
      <Box
        sx={{
          maxWidth: { xs: '90%', sm: '400px', md: '500px' },
          textAlign: 'center',
          wordBreak: { xs: 'break-word', md: 'normal' },
          fontSize: { xs: '1.rem', sm: '1.3rem', md: '1.5rem' }, 
          lineHeight: 1.8, 
          mt: 2,            
        }}
      >
      </Box>

  </Box>
          </TabPanel>

        </Box>
      </Box>
    </TabContext>
  );
}
