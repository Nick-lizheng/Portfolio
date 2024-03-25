import React from 'react'
import "./footer.css"

import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'




const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Li Zheng</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        

      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/nick-li-zheng-402062bb/.com" target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
        <a href="https://www.instagram.com/nics_034/" target='_blank' rel='noopener noreferrer'><BsInstagram/></a>
        <a href="https://github.com/nickzheng87" target='_blank' rel='noopener noreferrer'><BsGithub/></a>

      </div>


      <div className='footer__copyright'>
        <small>&copy; Li Zheng. All rights reserved.</small>

      </div>
    </footer>
  )
}

export default Footer