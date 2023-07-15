import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../src/assets/Anest.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-items">
        <li>
          <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="service" smooth={true} duration={500} offset={-80}>
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="testimonials" smooth={true} duration={500} offset={-80}>
            Testimonials
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
