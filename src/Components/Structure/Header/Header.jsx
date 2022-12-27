import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header className='header-container'>
      <div className='header-logo-container'>
        <img className='header-logo' src={logo} alt='#'/>
      </div>

      <div className='header-tagline'>
        <p>Lovely Recipes</p>
      </div>
        
      <div className='header-navBar'>
        <p>Menu</p>
        <div className='header-links'>
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
