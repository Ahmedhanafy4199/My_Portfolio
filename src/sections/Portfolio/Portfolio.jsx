import React, { useState } from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-Commerce App',
    description: 'Full-featured online store with cart, filters, and product management.',
    category: 'react',
    tags: ['React', 'Redux', 'Axios', 'CSS'],
    github: 'https://github.com/Ahmedhanafy4199/E-Commerce',
    demo: 'https://e-commerce-react-brown.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Memory Game',
    description: 'Interactive card-matching memory game with smooth flip animations.',
    category: 'javascript',
    tags: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Ahmedhanafy4199/Memory_game/tree/main/memoryGame',
    demo: 'https://65b11b30e4305b984b5bbf11--neon-clafoutis-495394.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Design Agency Site',
    description: 'Modern agency website with parallax effects and polished UI.',
    category: 'html',
    tags: ['HTML', 'CSS', 'Animations'],
    github: 'https://github.com/Ahmedhanafy4199/Designing_Site',
    demo: 'https://65b11eefff42120095aa675c--tranquil-boba-920fbe.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'CRUD System',
    description: 'Dynamic CRUD app with regex validation, local storage, and search.',
    category: 'javascript',
    tags: ['JavaScript', 'Regex', 'LocalStorage'],
    github: 'https://github.com/Ahmedhanafy4199/Crud-system',
    demo: 'https://65b14aaf6638ca32e44e29c4--fantastic-gumdrop-1e0bee.netlify.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Restaurant Website',
    description: 'Animated restaurant site with smooth transitions and responsive layout.',
    category: 'html',
    tags: ['HTML', 'CSS', 'Animations'],
    github: 'https://github.com/Ahmedhanafy4199/Rosa/tree/main/Rosa%20resturant',
    demo: 'https://65b14eb5ff421227e6aa6c35--jade-pixie-db762c.netlify.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Gym Website',
    description: 'High-performance gym landing page built with React and custom components.',
    category: 'react',
    tags: ['React', 'CSS', 'Responsive'],
    github: 'https://github.com/Ahmedhanafy4199/Gym/tree/main/src',
    demo: 'https://responsive-gym-react.vercel.app/',
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'React', value: 'react' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'HTML / CSS', value: 'html' },
]

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? data
    : data.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="section-padding">
      <h5 className="section-subtitle">My Recent Work</h5>
      <h2 className="section-title">Portfolio</h2>

      {/* Filter buttons */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`px-5 py-2 rounded-full border border-white/10 bg-transparent text-light font-primary text-[0.85rem] font-medium cursor-pointer transition-all duration-500 tracking-wide hover:border-primary hover:text-primary hover:-translate-y-0.5 ${activeFilter === f.value ? 'bg-gradient-primary !border-transparent !text-white shadow-[0_5px_18px_rgba(91,141,238,0.4)] -translate-y-0.5' : ''}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(({ id, image, title, description, tags, github, demo }) => (
          <article key={id} className="bg-[rgba(255,255,255,0.03)] border border-white/5 rounded-3xl overflow-hidden transition-all duration-400 hover:border-[rgba(91,141,238,0.35)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3),_0_0_0_1px_rgba(91,141,238,0.1)] hover:-translate-y-1.5 group">
            {/* Image with hover overlay */}
            <div className="relative overflow-hidden h-[200px] sm:h-[180px] lg:h-[200px]">
              <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[rgba(10,10,26,0.88)] backdrop-blur-[4px] flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <div className="text-center p-6 translate-y-2.5 transition-transform duration-400 group-hover:translate-y-0">
                  <p className="text-[0.88rem] text-lighter leading-[1.6] mb-5">{description}</p>
                  <div className="flex gap-3 justify-center">
                    <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.8rem] font-medium border border-white/30 text-white transition-all font-primary hover:bg-white/15">
                      <BsGithub /> Code
                    </a>
                    <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.8rem] font-medium text-white transition-all font-primary bg-gradient-primary border-none hover:shadow-[0_5px_15px_rgba(91,141,238,0.4)] hover:-translate-y-[1px]">
                      <BsBoxArrowUpRight /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="p-5 pt-5 pb-6">
              <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {tags.map((tag) => (
                  <span key={tag} className="text-[0.7rem] font-medium px-2.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary tracking-wide">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={github} className="btn text-[0.82rem] px-4 py-2" target="_blank" rel="noreferrer">
                  <BsGithub /> Github
                </a>
                <a href={demo} className="btn btn-primary text-[0.82rem] px-4 py-2" target="_blank" rel="noreferrer">
                  <BsBoxArrowUpRight /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
