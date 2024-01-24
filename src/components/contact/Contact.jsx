import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinBoxFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ab0vvu3', 'template_4l6afs9', form.current, 'DIkTHrHdP_WW-wKcK');
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get To Touch </h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>ahmedhanafy289</h5>
            <a href='mailto:ahmedhanafy289@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <RiLinkedinBoxFill className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Ahmed_Hanafy</h5>
            <a href=' https://www.linkedin.com/in/ahmed-hanafy41/' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>01122*****9</h5>
            <a href='https://api.whatsapp.com/send?phone=01122646249' target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/*-------------------- End of Contact Option -------------------*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name'/>
          <input type='email' name='email' placeholder='Your Email'/>
          <textarea name='message' rows='7' placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section >
  )
}

export default Contact