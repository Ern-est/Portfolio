import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {currentYear} Cherry_codes_. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
