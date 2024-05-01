/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './testimoniols.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    id:1,
    avatar:AVTR1,
    name:'tina snow',
    review:'Working with the team at FrontEndTeam was an absolute pleasure. They not only delivered a stunning website but also ensured that it was fully responsive and user-friendly. Our online presence has never looked better!'
  },
  {
    id:2,
    avatar:AVTR2,
    name:'shatte wale',
    review:'I was impressed by the level of attention to detail and creativity shown by the FrontEndTeam team. They listened to our needs and transformed our vision into a visually captivating website that exceeded our expectations.'
  },
  {
    id:3,
    avatar:AVTR3,
    name:'kwame despite',
    review:'As a non-profit organization, we needed a website that effectively conveyed our mission and engaged our audience. FrontEndTeam understood our unique requirements and delivered a website that has significantly boosted our online presence.'
  },
  {
    id:4,
    avatar:AVTR4,
    name:'nana mcBrown',
    review:'The team at FrontEndTeam went above and beyond to ensure that our website not only looked great but also performed flawlessly across all devices. Their dedication to delivering top-notch results is unmatched.'
  },
]

const Testimoniols = () => {
  return (
    <section id='testimoniols'>
      <h5>Review from clients</h5>
      <h2>Testimoniols</h2>

      <Swiper className="container testimoniols_container"
            // install Swiper modules
            modules={[ Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        
        {
          data.map(({ avatar, name, review, id }) => {
              return(
                <SwiperSlide key={id} className="testimoniol">
                  <div className="client_avatar">
                    <img src={avatar} />
                  </div>
                  <h5 className="client_name">{name}</h5>
                  <small className="client_review">{review}</small>
              </SwiperSlide>
              )
            })
        }
      </Swiper>
    </section>
  )
}

export default Testimoniols