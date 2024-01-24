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
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, sapiente veritatis animi accusamus odit modi adipisci repudiandae fuga asperiores eveniet, cum at nam aliquam placeat. Odio voluptatum fugiat quod ullam.'
  },
  {
    id:2,
    avatar:AVTR2,
    name:'shatte wale',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, sapiente veritatis animi accusamus odit modi adipisci repudiandae fuga asperiores eveniet, cum at nam aliquam placeat. Odio voluptatum fugiat quod ullam.'
  },
  {
    id:3,
    avatar:AVTR3,
    name:'kwame despite',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, sapiente veritatis animi accusamus odit modi adipisci repudiandae fuga asperiores eveniet, cum at nam aliquam placeat. Odio voluptatum fugiat quod ullam.'
  },
  {
    id:4,
    avatar:AVTR4,
    name:'nana mcBrown',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, sapiente veritatis animi accusamus odit modi adipisci repudiandae fuga asperiores eveniet, cum at nam aliquam placeat. Odio voluptatum fugiat quod ullam.'
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