import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Me from '../../assets/AhmedC-72.JPG'

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
                <small>2+ Years </small>
              </article>
              {/* <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article> */}
              <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>
            <p>
            Certainly! As a front-end developer, I specialize in crafting the user interface and experience of websites and applications. I strive to ensure that the front end of a digital product is intuitive, responsive, and engaging. With expertise in HTML, CSS,  JavaScript , and React I bring concepts to life, bridging the gap between design and functionality to deliver seamless user experiences. Let's build something amazing together! 
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About