import React from 'react'
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs";




const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='exprience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='exprience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='exprience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='exprience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>


        {/* end of fontEnd */}

        <div className='experience__data'>
          <h3>Data Development</h3>
          <div className='experience__content'>
            <article className='exprience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Spark</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='exprience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Kedro</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            
          </div>
        </div>

        {/* End of data */}


        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='exprience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='exprience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            
          </div>
        </div>




      </div>


    </section>
  )
}

export default Experience