import React from 'react'
import './skill.css'

function Skill() {
  return (
    <>
    <section id="skill">
     <h2 className='skilltitle'>What I Do</h2> 
     <p className='skilldesc'>As a skilled web designer with expertise in Figma, HTML, CSS and JavaScript, I'm passionate about creating visually stunning, responsive websites. I combine creative design with technical precision to deliver seamless, user-centered digital experiences that drive results.</p>
     <div className='skillbar'>
        <div className="div"><h4>UI/UX Design</h4>
        <p>I specialize in UI/UX design, crafting intuitive and visually engaging interfaces that enhance user experience and drive interaction.</p></div>
        <div className="div"><h4>Website Design</h4>
        <p>I specialize in web design, creating responsive, visually appealing websites with a focus on user-friendly interfaces and seamless functionality.</p></div>
     </div>
     </section>
    </>
  )
}

export default Skill
