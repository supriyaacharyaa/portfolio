import React from 'react'
import './works.css'
function Works() {
  return (
    <div id='works'>
      <h2 className='workstitle'>Portfolio</h2> 
      <p className='worksdesc'>I bring a keen eye for detail and a passion for creating intuitive user experiences. My focus is on creating visually engaging websites that are not only beautiful but also functional, responsive, and optimized for performance.</p>
      <div className="worksimgs">
        <img src="https://img.freepik.com/premium-photo/happy-boy-working-computer-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_839035-1755343.jpg" alt="" className="worksimg" />
        <img src="https://avatars.mds.yandex.net/get-shedevrum/12155741/cb4cef9ecf0b11eebbaf6eed827e143e/orig" alt="" className="worksimg" />
        <img src="https://img.freepik.com/premium-vector/excited-vector-illustration-cartoon_969863-317594.jpg" alt="" className="worksimg" />
        <img src="https://img.freepik.com/premium-vector/cartoon-icon-illustration-colorful-animated-alarm-clock_1263357-22214.jpg" alt="" className="worksimg" />
        <img src="https://img.freepik.com/premium-vector/cartoon-boy-giving-you-thumbs-up-vector-illustration_851674-45262.jpg" alt="" className="worksimg" />
        <img src="https://img.freepik.com/free-vector/teamwork-background-with-persons_23-2147765723.jpg" className='worksimg' alt="" />
      </div>
      <button className="worksbtn">View More</button>
    </div>
  )
}

export default Works
