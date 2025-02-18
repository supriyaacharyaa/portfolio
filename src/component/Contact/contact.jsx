import React from 'react'
import './contact.css'
function Contact() {
  return (
    <>
    <section id="contactpage">
    <section id="clients">
    <h2 className='client'>Clients</h2> 
     <p className='clientdesc'>I have worked with many clients here are some review of my work.</p>
     <div className="review">
     <div className="box">
     <p>
     I had the pleasure of working with Supriya on the front-end development of our website, and I am extremely impressed with the results. From the very beginning, she demonstrated a strong understanding of our vision and translated it into a beautiful, responsive, and user-friendly design.I highly recommend Supriya to anyone looking for a front-end developer who not only delivers high-quality code but also understands the importance of great user experience and design. We look forward to continuing our partnership in the future! <br />
     -Nilima Acharya</p>
     </div>
     <div className="box">
        <p>
     Working with Supriya has been an exceptional experience from start to finish. As a client, I was seeking a front-end developer who could take our website to the next level in terms of both functionality and design, and she truly exceeded our expectations.
     If you’re looking for a front-end developer who combines creativity with technical expertise, I highly recommend Supriya. She made a huge impact on the success of our project, and I’m looking forward to working with her again in the future. <br />
     -Shanaya Dahal</p>
     </div>
     </div>
    </section>
     <section id='contactus'>
<h2 className='contacttitle'>Contact Me</h2>
<p className='contactdesc'> Fill The following form to contact me.</p>
<form action="" className="contactform">
    <input type="text" className="name" placeholder='Your Name' />
    <input type="email" className="email" placeholder='Your email' />
    <textarea className="msg" name="message"  placeholder='Your Message' rows="5"></textarea>
    <button className='submitbtn' type='submit' value="send">Submit</button>
    <div className="links">

    </div>
</form>


    </section> 
    </section>
    </>
  )
}

export default Contact
