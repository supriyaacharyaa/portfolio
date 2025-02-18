import React from 'react';
import './intro.css';
import myimage from '../../assets/myimage.jpg'
import { Link } from 'react-scroll';
function Intro() {
  return (
    <div id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <div className="introtext">I'm <span className="iname">Supriya</span><br />Web Designer</div>
        <p className='intropara'>I combine my creativity and technical skills to craft visually engaging, user-friendly websites that provide seamless digital experiences.</p>
        <Link><button className='btn'>Hire Me</button></Link>
      </div>
      <img className='bg' src={myimage} alt="" />
    </div>
  )
}

export default Intro
