import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Me from '../../assets/photo_2024-01-24_20-34-07.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <img src={Me} alt='About_Image'/>
        </div>
        <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>2+ Years Working At Home</small>
              </article>
              <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ut quasi accusamus quod ea veniam fugit quibusdam, eveniet incidunt, voluptates nemo eaque distinctio quis! Mollitia cumque nobis magnam excepturi? Veritatis.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About