import React from 'react'
import "./portfolio.css"
import PROJECT1 from "../../asresst/project1.jpg"


const data = [
  {
    id: 1,
    Image: PROJECT1,
    title: 'Happsa-waste-capture-portal',
    github: 'https://github.com',
    demo: 'https://waste-capture-portal.happsa.com.au/'
  }
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, Image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio_item-image'>
                  <img src={Image} alt={title} />

                </div>

                <h3>{title}</h3>
                <div className='porfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>

              </article>
            )
          }

          )
        }

      </div>

    </section>
  )
}

export default Portfolio