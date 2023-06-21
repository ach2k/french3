import React from 'react';
import { FaHome, FaBook, FaBookOpen } from 'react-icons/fa';
import {ImYoutube} from 'react-icons/im';
import {HiPuzzle} from 'react-icons/hi';
import './styles.css';


const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <a href='./Homess'>
            <ul className='home'>            
                <FaHome/>      Home    
            </ul>
        </a>
        <a href='./About'>
            <ul className='lessons'>
                <FaBook/>                Lessons
            </ul>
        </a>
        <a href='/'>
            <ul className='exercices'>
            <HiPuzzle/> Exercices
            </ul>
        </a>
        <a href='/'>
            <ul className='youtube'>
                <ImYoutube className='youtube-logo'/> Youtube
            </ul>
        </a>
        <a href='/'>
            <ul className='dictionary'>
                <FaBookOpen className='dictionary-logo'/> Dictionary
            </ul>
        </a>
    </div>
    
    </>
  )
}

export default Navbar