import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer'><CiLinkedin/></a>
        <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'><CiInstagram/></a>
        <a href="https://github.com" target='_blank' rel='noopener noreferrer'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials