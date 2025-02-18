import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
const NavBar =() =>{
    const {showMenu, setShowMenu} =useState(false);
    return(
       <div className="navbar">
       <img  src="" alt="" />
        <div className="menu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="menuitem">Home</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className="menuitem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className="menuitem">Portfolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500} className="menuitem">Clients</Link>
        </div>
        <button className="contact" onClick={()=>{
            document.getElementById('contactus').scrollIntoView({behaviour:'smooth'});
        }}>
            Contact
        </button>
        
       
       </div>
    )
}
export default NavBar
