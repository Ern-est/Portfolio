import React from 'react';
import logo from '../../src/assets/Anest.png'; // Update the path to your image
import './Navbar.css'; // Import the CSS file for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
