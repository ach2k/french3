import React, { useEffect } from 'react';
import Navbar from './Navbar';
import "../App.css";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
// import HikingIcon from '@mui/icons-material/Hiking';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import GrassIcon from '@mui/icons-material/Grass';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { purple, blue } from '@mui/material/colors';
import { Transform, Translate } from '@mui/icons-material';
import Grid from './Grids';
import About from './About';
import { ContactUs } from './Contact';
import Footer from './Footer';

const Home = () => {

  // useEffect(() => {
  //   const handleZoom = () => {
  //     const zoomLevel = Math.round(window.devicePixelRatio * 100);
  //     while (zoomLevel < 100) {
  //       // Adjust the zoom level back to the desired minimum value
  //       document.body.style.zoom = '100%';
  //     }
  //   };
    
  //   window.addEventListener('resize', handleZoom);
  //   handleZoom(); // Handle initial zoom level
    
  //   return () => {
  //     window.removeEventListener('resize', handleZoom);
  //   };
  // }, []);


  return (
    <>
    <Navbar/>
    <div className=''>
      <div className='intro'>
      {/* <i class="fa-solid fa-face-laugh" style={{fontSize:"20px", color:"white"}}></i> */}
      <span className='intro-header'>FrenchMastery</span>
      <span className='intro-text'>Welcome to FrenchMastery, your premier destination
       for mastering the French language. 
      </span>
      <span className="mountain"><FilterHdrIcon style={{ fontSize: '200px' }}/></span>
      <span className='stars'><AutoAwesomeIcon style={{ fontSize: '65px' }}/></span>
      {/* <span className='hiking'><HikingIcon style={{ fontSize: '65px' }}/></span> */}
      <span className='greeting'><EmojiPeopleIcon style={{ fontSize: '130px' }}/></span>
      <span className='greeting-arrow'><ArrowDropDownIcon style={{ fontSize: '60px' }}/></span>
      {/* <span className='grass'><GrassIcon style={{ fontSize: '60px' }}/></span> */}
      </div>
      <div className='box'>
      <div className='level-test'>
    <span className='level-test-text'>You don't know your level?<br/>
    Check out the different levels! <span className='devworking1'><br/>Our developers are currently working on the test</span></span>
    <Stack className='stack' spacing={2} direction="row" >
     <Button sx={{ backgroundColor: "#34568B", transform:"Translate(0px,-35px)"}} className='test' variant="contained">Take the test</Button>
     <Button sx={{ color: "#34568B", borderColor: "#34568B", transform:"Translate(0px,-35px)" }} className='levels' variant="outlined" >Different levels</Button>
    </Stack>
      </div>
      <div className='second'>
      Our team of dedicated language instructors has 
       carefully crafted this website to provide you with a comprehensive and immersive 
       learning experience. Whether you're a beginner or looking to refine your existing 
       skills, our goal is to empower you with the knowledge and fluency needed to navigate 
       the Francophone world with confidence. Get ready to embark on an exciting journey of 
       linguistic exploration and unlock the beauty and richness of French language and culture 
       through lessons and exercices. Join us today and let's embark on this language adventure
        together. Bienvenue à FrenchMastery!
      </div>
      </div>
    </div>
    <div><Grid/></div>
    <div><About/></div>
    <div><ContactUs/></div>
    <div><Footer/></div>

    
    </>
  )
}

 export default Home;