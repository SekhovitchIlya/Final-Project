import React from 'react';
import logo from '../img/logo.png';
import './footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='#'></img>
      </div>
    </footer>
  )
}
