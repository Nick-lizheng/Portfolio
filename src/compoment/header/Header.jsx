import React from 'react';
import "./header.css";
import CTA from './CTA';
import me from "../../asresst/me2.jpg";
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>

    
    <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Nick Li Zheng</h1>
      <h5 className='text-light'>FullStack Developer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className='me'>
        <img className='img' src={me} alt="me" />

      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </div>
    </header>
  )
}

export default Header