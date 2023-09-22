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
          <Link to='/' className='linkHeader'> <li>Home</li></Link>
          <Link to='/Services' className='linkHeader'> <li>Services</li></Link>
         <Link to='/About' className='linkHeader'><li>About</li></Link>   
            {/* <li>Projects</li> */}
            <Link to='/contactUs' className='linkHeader'> <li>Contact Us</li></Link>
          </ul>
          <div className='MobileMenuIcon' onClick={toggleMobileMenu}>
            ☰
          </div>
          {isMenuOpen && (
            <div className='divAround' onClick={toggleMobileMenu}>
            <ul className='MobileMenu'>
              <li onClick={toggleMobileMenu}>X</li>
              <Link to='/' className='linkHeader'> <li>Home</li></Link>
              <Link to='/Services' className='linkHeader'> <li>Services</li></Link>
              <Link to='/About' className='linkHeader'><li>About</li></Link>
              {/* <li>Projects</li> */}
              <Link to='/contactUs' className='linkHeader'> <li>Contact Us</li></Link>
            </ul>
            </div>
          )}
        </div>
        <Link to='/'>
          <div className='logo'>
        <img src={logo} alt='logo' height='100%' />
        </div>
        </Link>
      </div>
    </div>
  );
}
