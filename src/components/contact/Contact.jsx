import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {TbBrandMessenger} from 'react-icons/tb'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mo1k5et', 'template_b0cak05', form.current, 'AmXEz0hNvgcM5q-Ki')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>marioaistwice@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target='_blank'>Send a message</a>
          </article>
          
          <article className='contact__option'>
            <TbBrandMessenger className='contact__option-icon'/>
            <h4>Direct Message</h4>
            <h5>aisrmd_14</h5>
            <a href="https://www.instagram.com/aisrdm_14/" target='_blank'>Send a message</a>
          </article>
          
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>aisdams</h5>
            <a href="https://www.linkedin.com/in/aisyah-ramadhani-6b010420b/" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder=' Type Your Full Name' required/>
          <input type="email" name='email' placeholder='Type Your Email'/>
          <textarea name="message" rows="7" placeholder='Type Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact