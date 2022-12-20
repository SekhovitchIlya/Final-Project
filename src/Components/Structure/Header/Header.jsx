import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='#'></img>
      </div>

      <div className='tagline'>
        <p>Most popular recipes</p>
      </div>
        
      <div className='navBar'>
        <p>Menu</p>
        <div className='links'>
          <Link to={'/home'}>
            <span>Home</span>
          </Link>
          
          <Link to={'/meals'}>
            <span>Meals</span>
          </Link> 
        </div>
         

      </div>
    </header>
  )
}
