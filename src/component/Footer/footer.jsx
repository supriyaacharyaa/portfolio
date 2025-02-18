import React from 'react';
import './footer.css'
const Footer = () => {
  const currentYear = new Date().getFullYear();  // Get the current year

  return (
    <footer>
      <p>&copy; {currentYear} Supriya Acharya. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
