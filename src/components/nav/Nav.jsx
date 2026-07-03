/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { MdOutlineEmojiEvents } from 'react-icons/md'
import { BsChevronDoubleDown } from 'react-icons/bs'

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

    if (window.scrollY < 100) {
      setActiceNav('#')
    }

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

    setTimeout(() => {
      isNavigating.current = false
    }, 1000)
  }

  const navLinkClass = (section) => {
    const baseClass = "bg-transparent p-2.5 xs:p-3 rounded-full flex items-center justify-center text-light text-[0.9rem] xs:text-[1.05rem] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative hover:text-white hover:-translate-y-[2px]"
    const activeClass = "bg-gradient-primary text-white shadow-[0_4px_15px_rgba(91,141,238,0.4)] -translate-y-[2px]"
    return activeNav === section ? `${baseClass} ${activeClass}` : baseClass
  }

  return (
    <nav className="bg-[rgba(10,10,26,0.85)] w-max flex p-1.5 xs:p-2.5 gap-0.5 xs:gap-1.5 z-50 fixed left-1/2 -translate-x-1/2 bottom-5 xs:bottom-8 rounded-[50px] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <a href='#' onClick={() => handleNavClick('#')} className={navLinkClass('#')} title="Home"><AiOutlineHome className="relative z-10" /></a>
      <a href='#about' onClick={() => handleNavClick('#about')} className={navLinkClass('#about')} title="About"><AiOutlineUser className="relative z-10" /></a>
      <a href='#experience' onClick={() => handleNavClick('#experience')} className={navLinkClass('#experience')} title="Experience"><BiBook className="relative z-10" /></a>
      <a href='#services' onClick={() => handleNavClick('#services')} className={navLinkClass('#services')} title="Services"><RiServiceLine className="relative z-10" /></a>
      <a href='#portfolio' onClick={() => handleNavClick('#portfolio')} className={navLinkClass('#portfolio')} title="Portfolio"><VscFolderLibrary className="relative z-10" /></a>
      <a href='#highlights' onClick={() => handleNavClick('#highlights')} className={navLinkClass('#highlights')} title="Highlights"><MdOutlineEmojiEvents className="relative z-10" /></a>
      <a href='#contact' onClick={() => handleNavClick('#contact')} className={navLinkClass('#contact')} title="Contact"><BiMessageSquareDetail className="relative z-10" /></a>
      <a href='#footer' onClick={() => handleNavClick('#footer')} className={navLinkClass('#footer')} title="Footer"><BsChevronDoubleDown className="relative z-10" /></a>
    </nav>
  )
}

export default Nav
