import React, { useState, useEffect, useRef } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

const frontendSkills = [
  { name: 'HTML5',           level: 95, label: 'Expert' },
  { name: 'CSS3 / SCSS',    level: 95, label: 'Expert' },
  { name: 'JavaScript (ES6+)', level: 90, label: 'Expert' },
  { name: 'React.js',        level: 90, label: 'Expert' },
  { name: 'Redux Toolkit',   level: 82, label: 'Advanced' },
  { name: 'Vue.js',          level: 90, label: 'Expert' },
  { name: 'Bootstrap & Tailwind', level: 90, label: 'Expert' },
  { name: 'Shadcn / Radix',  level: 84, label: 'Advanced' },
  { name: 'Axios / REST API', level: 85, label: 'Advanced' },
  { name: 'PHPWord', level: 81, label: 'Advanced' },
  { name: 'DomPDF', level: 77, label: 'Intermediate' },
]

const otherSkills = [
  { name: 'Sass',            level: 78, label: 'Advanced' },
  { name: 'jQuery',          level: 80, label: 'Advanced' },
  { name: 'EmailJS',          level: 79, label: 'Advanced' },
  { name: 'Node.js',         level: 62, label: 'Intermediate' },
  { name: 'MongoDB',         level: 60, label: 'Intermediate' },
  { name: 'MySQL',           level: 68, label: 'Intermediate' },
  { name: 'Git & GitHub',    level: 88, label: 'Advanced' },
  { name: 'Figma',           level: 70, label: 'Intermediate' },
  { name: 'PHP / PHPWord',   level: 58, label: 'Intermediate' },
  { name: 'Python',          level: 45, label: 'Beginner' },
]

const SkillBar = ({ name, level, label, animate, delayStyle }) => (
  <article className="flex flex-col gap-1.5 sm:gap-2">
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
        <BsPatchCheckFill className="text-primary text-[0.8rem] sm:text-[0.85rem] shrink-0" />
        <h4 className="text-[0.82rem] sm:text-[0.9rem] font-medium text-lighter truncate">{name}</h4>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        <small className="hidden xs:inline text-[0.65rem] sm:text-[0.7rem] text-light bg-white/5 px-1.5 sm:px-2 py-0.5 rounded-full border border-white/10">{label}</small>
        <span className="text-[0.75rem] sm:text-[0.8rem] font-semibold text-primary min-w-[2rem] sm:min-w-[2.5rem] text-right">{level}%</span>
      </div>
    </div>
    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden relative">
      <div
        className="h-full rounded-full bg-gradient-primary relative transition-[width] duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ 
            width: animate ? `${level}%` : '0%',
            ...delayStyle 
        }}
      >
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-accent rounded-full shadow-[0_0_8px_var(--color-accent)] transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1.2s' }} />
      </div>
    </div>
  </article>
)

const Experience = () => {
  const [activeTab, setActiveTab] = useState('frontend')
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const currentSkills = activeTab === 'frontend' ? frontendSkills : otherSkills

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <h5 className="section-subtitle">What Skills I Have</h5>
      <h2 className="section-title">My Experience</h2>

      {/* Tab switcher */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-12">
        <button
          className={`w-full sm:w-auto max-w-[280px] px-8 py-2.5 rounded-full border border-white/10 bg-transparent text-light font-primary text-[0.9rem] font-medium cursor-pointer transition-all duration-500 tracking-wide hover:border-primary hover:text-primary hover:-translate-y-0.5 ${activeTab === 'frontend' ? 'bg-gradient-primary !border-transparent !text-white shadow-[0_6px_20px_rgba(91,141,238,0.35)] -translate-y-0.5' : ''}`}
          onClick={() => { setActiveTab('frontend'); setAnimated(false); setTimeout(() => setAnimated(true), 50) }}
        >
          Frontend Development
        </button>
        <button
          className={`w-full sm:w-auto max-w-[280px] px-8 py-2.5 rounded-full border border-white/10 bg-transparent text-light font-primary text-[0.9rem] font-medium cursor-pointer transition-all duration-500 tracking-wide hover:border-primary hover:text-primary hover:-translate-y-0.5 ${activeTab === 'other' ? 'bg-gradient-primary !border-transparent !text-white shadow-[0_6px_20px_rgba(91,141,238,0.35)] -translate-y-0.5' : ''}`}
          onClick={() => { setActiveTab('other'); setAnimated(false); setTimeout(() => setAnimated(true), 50) }}
        >
          Other Skills
        </button>
      </div>

      <div className="w-full max-w-[860px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-5 lg:gap-x-12 lg:gap-y-6">
          {currentSkills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              {...skill}
              animate={animated}
              delayStyle={{ transitionDelay: `${i * 0.07}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
