import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/4.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Navbar'>
      <div className='lg' style={{ marginLeft: '30px', marginRight: '3px' }}>
      <img src={logo} alt="" style={{ maxWidth: '40px' }} />
      
      </div>
      <div className='txt' style={{ color: '#ffffff' }}>
  <p>AT DIGITAL</p>
</div>
      <div className='nav-toggle' onClick={toggleMenu}> 
        <div className='bar'></div>
      </div>
      <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <a href="#careers">Careers</a>
      </div>
    </div>
  );
};

export default Navbar;
