/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <section id='footer'>
      <a href='#' className='footer_logo'>Ahmed</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimoniols">Testimoniols</a></li>
        <li><a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer_socials">
        <a href='https://linkedin.com' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href='https://dribbble.com/Ahmed_Hanafy/shots' target="_blank" rel="noreferrer"><FiDribbble/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ahmed Website. All rights reserved.</small>
      </div>
    </section>
  )
}

export default Footer;