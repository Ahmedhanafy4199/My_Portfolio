import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


/*-------By Using Map Function------------*/
const data =[
  {
    id:1,
    Image:IMG1,
    title:'E-Commerce website using React.js',
    github:'https://github.com/Ahmedhanafy4199/E-Commerce',
    demo:'https://e-commerce-react-brown.vercel.app/',
  },
  {
    id:2,
    Image:IMG2,
    title:'Memory Game using JS',
    github:'https://github.com/Ahmedhanafy4199/Memory_game/tree/main/memoryGame',
    demo:'https://65b11b30e4305b984b5bbf11--neon-clafoutis-495394.netlify.app/',
  },
  {
    id:3,
    Image:IMG3,
    title:' Designing website',
    github:'https://github.com/Ahmedhanafy4199/Designing_Site',
    demo:'https://65b11eefff42120095aa675c--tranquil-boba-920fbe.netlify.app/',
  },
  {
    id:4,
    Image:IMG4,
    title:'Crud System using JS && Regular Expression',
    github:'https://github.com/Ahmedhanafy4199/Crud-system',
    demo:'https://65b14aaf6638ca32e44e29c4--fantastic-gumdrop-1e0bee.netlify.app/',
  },
  {
    id:5,
    Image:IMG5,
    title:'Resturant website with Animations',
    github:'https://github.com/Ahmedhanafy4199/Rosa/tree/main/Rosa%20resturant',
    demo:'https://65b14eb5ff421227e6aa6c35--jade-pixie-db762c.netlify.app/',
  },
  {
    id:6,
    Image:IMG6,
    title:' Gym Website using React.js',
    github:'https://github.com/Ahmedhanafy4199/Gym/tree/main/src',
    demo:'https://responsive-gym-react.vercel.app/',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
             {
             data.map(({id,Image,title,github,demo}) => {
               return(
                <article key={id} className="portfolio_item">
                   <div className="portfolio_item-image">
                       <img src={Image} alt={title}/>
                   </div>
                   <h3>{title}</h3>
                   <div className="portfolio_item-btns">
                        <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
                </article>
               )
             })}
        </div>
    </section>
  )
}

export default Portfolio