import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ goHome }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo" onClick={goHome} style={{ cursor: 'pointer' }}>My Portfolio</div>
      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={goHome}>Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#330;
      </div>
    </nav>
  );
};

export default Navbar;
