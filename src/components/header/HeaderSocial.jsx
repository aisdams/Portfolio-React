import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aisyah-ramadhani-6b010420b" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/aisdams" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/aisrdm_14/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial