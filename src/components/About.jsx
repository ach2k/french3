import React from 'react';
import {ImYoutube} from 'react-icons/im';
import {FaTiktok} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './about.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const About = () => {
  return (
    <>

    <div >
    
     {/* removed spacing={2} */}
    <Grid container  className="social-media">
  <Grid xs={1} className='social-grid'>
    <a href="https://www.youtube.com/channel/UC0Vzeji1xkYqxSdYZZaM7cg" target="_blank">
      <Item><ImYoutube className='youtube-logoo'/> FrenchMastery</Item>
    </a></Grid>
  <Grid xs={1} className='social-grid'>
    <a href="https://www.tiktok.com/@frenchmastery" target="_blank" >
    <Item><FaTiktok className='tiktok-logo'/> frenchmastery</Item>
    </a></Grid>
  <Grid xs={1} className='social-grid'>
    <a href="https://twitter.com/achraph_" target="_blank">
    <Item><BsTwitter className='twitter-logo'/> @Achraff2k
</Item>
</a>  
</Grid>
  </Grid>
  </div>
    </>
  )
}

export default About