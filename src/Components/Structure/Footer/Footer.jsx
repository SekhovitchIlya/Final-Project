import React from 'react';
import logo from '../img/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-logo-container'>
        <img className='footer-logo' src={logo} alt='#'/>
      </div>

      <div className='footer-tagline'>
        <p>Lovely Recipes</p>
      </div>

      <div className='footer-logo-container-right'>
        <img className='footer-logo' src={logo} alt='#'/>
      </div>
    </footer>
  )
}
