/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { MdOutlineRateReview } from 'react-icons/md'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { useState, useEffect, useRef } from 'react'

const Nav = () => {
  const [activeNav, setActiceNav] = useState('#')
  const isNavigating = useRef(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isNavigating.current) {
          const sectionId = entry.target.getAttribute('id')
          setActiceNav(`#${sectionId}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach(section => {
      observer.observe(section)
    })

    // Check if we're at the top of the page on mount
    if (window.scrollY < 100) {
      setActiceNav('#')
    }

    // Handle scroll to detect when at the top
    const handleScroll = () => {
      if (window.scrollY < 100 && !isNavigating.current) {
        setActiceNav('#')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (section) => {
    setActiceNav(section)
    isNavigating.current = true

    // Re-enable observer after smooth scroll completes (approximately 1 second)
    setTimeout(() => {
      isNavigating.current = false
    }, 1000)
  }

  return (
    <nav>
      <a href='#' onClick={() => handleNavClick('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
      <a href='#about' onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#services' onClick={() => handleNavClick('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#portfolio' onClick={() => handleNavClick('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><VscFolderLibrary /></a>
      <a href='#testimoniols' onClick={() => handleNavClick('#testimoniols')} className={activeNav === '#testimoniols' ? 'active' : ''}><MdOutlineRateReview /></a>
      <a href='#contact' onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      <a href='#footer' onClick={() => handleNavClick('#footer')} className={activeNav === '#footer' ? 'active' : ''}><BsChevronDoubleDown /></a>
    </nav>
  )
}

export default Nav