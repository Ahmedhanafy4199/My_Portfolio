import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-3 absolute left-0 bottom-24 after:content-[''] after:w-[1px] after:h-10 after:bg-gradient-to-b after:from-primary after:to-transparent">
        <a href='https://www.linkedin.com/in/ahmed-hanafy41/' target="_blank" rel="noreferrer" className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-light text-base transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:shadow-primary"><BsLinkedin/></a>
        <a href='https://github.com/Ahmedhanafy4199' target="_blank" rel="noreferrer" className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-light text-base transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:shadow-primary"><BsGithub/></a>
        {/* <a href='https://dribbble.com/Ahmed_Hanafy/shots' target="_blank" rel="noreferrer" className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-light text-base transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:shadow-primary"><FiDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials
