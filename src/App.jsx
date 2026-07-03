import React, { useEffect, useState } from 'react'
import Header from './sections/Header/Header'
import Nav from './components/Nav/Nav'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Services from './sections/Services/Services'
import Portfolio from './sections/Portfolio/Portfolio'
import Timeline from './sections/Timeline/Timeline'
import Highlights from './sections/Highlights/Highlights'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  /* ---- Scroll Progress Bar ---- */
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setScrollProgress(total > 0 ? (current / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ---- Scroll Reveal Animations ---- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <Header />
      <Nav />
      <About />
      <Experience />
      <Timeline />
      <Services />
      <Portfolio />
      <Highlights />
      <Contact />
      <Footer />
    </>
  )
}

export default App