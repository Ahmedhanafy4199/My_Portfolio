/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <section
      id="footer"
      className="bg-gradient-to-b from-transparent to-primary/5 border-t border-white/5 pt-12 pb-24 text-center mt-28"
    >
      <a
        href="#"
        className="text-[1.8rem] font-bold inline-block mb-6 bg-gradient-primary bg-clip-text text-transparent tracking-tight"
      >
        Ahmed
      </a>

      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-x-6 mx-auto mb-8 px-4">
        <li>
          <a href="#" className="text-[0.85rem] text-light font-normal transition-colors hover:text-primary">Home</a>
        </li>
        <li>
          <a href="#about" className="text-[0.85rem] text-light font-normal transition-colors hover:text-primary">About</a>
        </li>
        <li>
          <a href="#experience" className="text-[0.85rem] text-light font-normal transition-colors hover:text-primary">Experience</a>
        </li>
        <li>
          <a href="#timeline" className="text-[0.85rem] text-light font-normal transition-colors hover:text-primary">Timeline</a>
        </li>
        <li>
          <a href="#services" className="text-[0.85rem] text-light font-normal transition-colors hover:text-primary">Services</a>
        </li>
        <li>
          <a href="#portfolio" className="text-[0.85rem] text-light font-normal transition-colors hover:text-primary">Portfolio</a>
        </li>
        <li>
          <a href="#highlights" className="text-[0.85rem] text-light font-normal transition-colors hover:text-primary">Highlights</a>
        </li>
        <li>
          <a href="#contact" className="text-[0.85rem] text-light font-normal transition-colors hover:text-primary">Contact</a>
        </li>
      </ul>

      <div className="flex justify-center gap-3 mb-4">
        <a
          href="https://www.linkedin.com/in/ahmed-hanafy41/"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-light text-base transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-gradient-primary hover:border-transparent hover:text-white hover:-translate-y-1 hover:scale-110"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Ahmedhanafy4199"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-light text-base transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-gradient-primary hover:border-transparent hover:text-white hover:-translate-y-1 hover:scale-110"
        >
          <BsGithub />
        </a>
      </div>

      <div className="text-light text-[0.8rem] opacity-60">
        <small>&copy; {new Date().getFullYear()} Ahmed Hanafy. All rights reserved.</small>
      </div>
    </section>
  );
};

export default Footer;
