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
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/*end of content creation */}
      </div>
    </section>
  )
}

export default Services