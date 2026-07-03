import React from 'react'
import { FaFileAlt, FaMousePointer, FaCodeBranch } from 'react-icons/fa'

const Highlights = () => {
  const achievements = [
    {
      id: 1,
      icon: <FaFileAlt />,
      title: "Enterprise Document Pipelines",
      desc: "Developed advanced dynamic DOCX and PDF export pipelines using PHPWord and DomPDF. Implemented complex HTML-to-Word rendering logic supporting nested rich text, tables, and dynamically formatted sections based on real-time application data."
    },
    {
      id: 2,
      icon: <FaMousePointer />,
      title: "Interactive & Drag-and-Drop UIs",
      desc: "Engineered highly interactive drag-and-drop Kanban workflows utilizing Packery and Draggabilly with reactive state management. Integrated QuickChart APIs for embedding dynamic visual analytics directly into reports."
    },
    {
      id: 3,
      icon: <FaCodeBranch />,
      title: "Scalable Frontend Architecture",
      desc: "Architected scalable, data-driven dashboard interfaces utilizing Vue 3, React, Tailwind CSS, and ShadCN. Optimized rendering performance for large datasets and added LaTeX support for dynamic mathematical content rendering."
    }
  ]

  return (
    <section id="highlights" className="py-20 bg-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h5 className="text-light tracking-widest text-sm mb-2">My Impact at Zinad IT</h5>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">Technical Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <div 
              key={item.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-glass group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-light text-sm leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
