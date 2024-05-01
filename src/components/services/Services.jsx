import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
        <article className='service'>
          <div className="servicr_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Creating visually appealing interfaces that users interact with.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Involves creating wireframes,and user flows to optimize usability, accessibility.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>designing layouts, typography, color schemes, icons, and other graphical elements.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Designing interfaces that adapt seamlessly to different screen sizes and devices.</p>
            </li>
            
          </ul>
        </article>
        {/*End ui/ux */}
        <article className='service'>
          <div className="servicr_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Optimizing website performance to reduce loading times.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Enhance user experience, and improve search engine rankings.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Ensuring a seamless user experience across desktops, tablets, and smartphones.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Creating online stores to facilitate the buying and selling of products and services.</p>
            </li>
           
          </ul>
        </article>
        {/*end web development */}

        <article className='service'>
          <div className="servicr_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Crafting high-quality written content tailored to the target audience and the purpose of the content.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Include articles, website copy, product descriptions,and social media posts.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Reviewing and editing written content to ensure accuracy.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p> Developing a content strategy aligned with business objectives.</p>
            </li>
           
          </ul>
        </article>
        {/*end of content creation */}
      </div>
    </section>
  )
}

export default Services