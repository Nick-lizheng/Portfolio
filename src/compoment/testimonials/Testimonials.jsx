import React from 'react'
import "./testimonials.css"
import AVATAR1 from '../../asresst/avatar1.webp'
import AVATAR2 from '../../asresst/avatar2.webp'
import AVATAR3 from '../../asresst/avatar3.jpg'

// import swiper core and requiered modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


//import swiper styles

import 'swiper/css';
import 'swiper/css/pagination'



const data = [
  {
    avatar: AVATAR1,
    name: 'Colleague A',
    review: 'Thanks Nick provied enhancement suggestion!'
  },
  {
    avatar: AVATAR2,
    name: 'Colleague B ',
    review: 'Awesome! Did a great job always!'
  },
  {
    avatar: AVATAR3,
    name: 'Colleague C',
    review: 'Nice Partner and problem dealler as well. Respect!'
  }
]





const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimoials</h2>

      <Swiper className='container testimonials__container'
          // {/* install Swiper modules */}
          modules = {[Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{clickable: true}}>
        {
          data.map(({avatar,name,review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        
        

      </Swiper>

    </section>
    
  )
}

export default Testimonials