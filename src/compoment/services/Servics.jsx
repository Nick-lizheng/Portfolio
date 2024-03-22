import React from 'react'
import { MdOutlineCheck} from "react-icons/md"
import "./service.css"

const Servics = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <artical className='service'>
            <div className='service__head'>
              <h3>Data Visulizasion</h3>

            </div>

            <ul className='service__list'>
              <li>
                <MdOutlineCheck className='service__list-icon'/>
                <p>Creating DashBorad by using QlikSence</p>

              </li>
              <li>
                <MdOutlineCheck className='service__list-icon'/>
                <p>WebScraping data from page</p>

              </li>
              <li>
                <MdOutlineCheck className='service__list-icon'/>
                <p>Handling data with spark and kedro pipeline</p>

              </li>
              <li>
                <MdOutlineCheck className='service__list-icon'/>
                <p>Automation tasking</p>

              </li>

            </ul>

          </artical>
          {/* end of data visulization */}

          <artical className='service'>
            <div className='service__head'>
              <h3>Web Development</h3>

            </div>

            <ul className='service__list'>
              <li>
                <MdOutlineCheck className='service__list-icon'/>
                <p>Buliding FrontEnd</p>

              </li>
          
            </ul>

          </artical>

          {/* end of web development */}

          <artical className='service'>
            <div className='service__head'>
              <h3>Content creation</h3>

            </div>

            <ul className='service__list'>
              <li>
                <MdOutlineCheck className='service__list-icon'/>
                <p>photoragphy</p>

              </li>
          
            </ul>

          </artical>
        </div>
    </section>
  )
}

export default Servics