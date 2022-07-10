import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {SiYoutube} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AISDAMS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/aisrdm_14/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/aisrdm_14/"><BsInstagram/></a>
        <a href="https://www.youtube.com/channel/UCt7Zm-5VJEGPJuIgcJEbPFg"><SiYoutube/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AISDAMS. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer