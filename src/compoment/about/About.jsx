import React from "react";
import "./about.css";
import ME from "../../asresst/me.jpg";
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { MdFolderSpecial } from "react-icons/md";




const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>      
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <LuUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>10 + Worldwide</small>
            </article>
            
            <article className="about__card">
              <MdFolderSpecial className="about__icon"/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat culpa corporis temporibus dolor reprehenderit omnis, laborum cum ad voluptas pariatur itaque voluptates nulla, excepturi ducimus. Suscipit sunt ut illum velit!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About