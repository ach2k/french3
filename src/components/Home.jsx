import * as React from 'react';
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

















const Home = () => {
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
    Take a few minutes to find out!</span>
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
    <div><Grid/>sss</div>
    <div>Articles related to the french language, like apps for studying etc. (advertisements related?)</div>
    <div>Feedback with e-mail proposal, maybe also call it contact?</div>

    

    <footer>Footer</footer><div>


    
    
    </div>
    
    </>
  )
}

 export default Home;