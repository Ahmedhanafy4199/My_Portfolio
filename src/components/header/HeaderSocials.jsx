import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href='https://linkedin.com' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href='https://dribbble.com' target="_blank" rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials