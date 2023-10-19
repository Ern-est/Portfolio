import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/Anest.png';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar${showMenu ? ' show-menu' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-items${showMenu ? ' show-items' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
