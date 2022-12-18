import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import './header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='#'></img>
      </div>
        
      <div className='navBar'>
        <Link to={'/home'}>
          <span>Home</span>
        </Link>
        
        <Link to={'/meals'}>
          <span>Meals</span>
        </Link>  

        <Link to={'/about'}>
          <span>About</span>
        </Link>      
      </div>
    </header>
  )
}
