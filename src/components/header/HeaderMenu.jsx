import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div className='headerContent'>
        <div>
          <ul className='DesktopMenu'>
            <li>Services</li>
         <Link to='/About'><li>About</li></Link>   
            <li>Projects</li>
            <li>Contact Us</li>
          </ul>
          <div className='MobileMenuIcon' onClick={toggleMobileMenu}>
            ☰
          </div>
          {isMenuOpen && (
            <div className='divAround' onClick={toggleMobileMenu}>
            <ul className='MobileMenu'>
              <li onClick={toggleMobileMenu}>X</li>
              <li>Services</li>
              <Link to='/About'><li>About</li></Link>
              <li>Projects</li>
              <li>Contact Us</li>
            </ul>
            </div>
          )}
        </div>
        <img src={logo} alt='logo' className='logo' />
      </div>
    </div>
  );
}
