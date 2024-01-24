/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

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
        <a href='' target='_blank'><FaFacebookF/></a>
        <a href='' target='_blank'><BsInstagram/></a>
        <a href='' target='_blank'><AiOutlineTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ahmed Website. All rights reserved.</small>
      </div>
    </section>
  )
}

export default Footer;