import React from 'react'
import './header.css'
import CVB from './CVB'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Ahmed Hanafy</h1>
          <h5 className="text-light">Frontend Developer</h5>
          <CVB />
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt='me'/>
          </div>

          <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
    </header>
  )
}

export default Header