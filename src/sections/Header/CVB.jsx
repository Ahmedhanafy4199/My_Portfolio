import React from 'react'
import CV from '../../assets/Ahmed_Hanafy_Frontend_Developer.pdf'

const CVB = () => {
  return (
    <div className="mt-7 flex gap-4 justify-center flex-wrap">
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CVB
