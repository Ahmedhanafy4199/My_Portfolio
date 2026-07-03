import React, { useEffect, useRef } from "react";
import { FaAward, FaCode } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import Me from "../../assets/AhmedC-72.JPG";

const About = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.2 },
    );
    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding">
      <h5 className="section-subtitle">Get To Know</h5>
      <h2 className="section-title">About Me</h2>

      <div className="section-container grid grid-cols-1 lg:grid-cols-[38%_55%] gap-12 lg:gap-[7%] items-center">
        {/* Image */}
        <div className="relative reveal-left">
          <div className="relative w-[75%] md:w-[55%] lg:w-[85%] mx-auto lg:mx-0  rounded-[2rem] overflow-hidden group">
            <img
              src={Me}
              alt="Ahmed Hanafy"
              className="w-full h-full object-cover rounded-[2rem] transition-transform duration-500 ease-out brightness-95 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/15 to-accent/10 z-10 pointer-events-none" />
            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-primary to-accent -z-10 opacity-40 blur-[1px]" />
          </div>
        </div>

        {/* Content */}
        <div className="text-left reveal-right">
          <div className="grid grid-cols-3 gap-3 mb-7 sm:gap-2">
            <a href="#highlights">
              <article
                className="bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-6 text-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(91,141,238,0.15)] cursor-pointer reveal sm:px-2 sm:py-4"
                ref={(el) => (cardsRef.current[0] = el)}
              >
                <FaAward className="text-primary text-[1.4rem] lg:text-[1.8rem] mb-2 mx-auto block" />
                <h5 className="text-[0.85rem] font-semibold text-lighter mb-1">
                  Experience
                </h5>
                <small className="text-[0.72rem] text-light">2+ Years</small>
              </article>
            </a>

            <a href="#portfolio">
              <article
                className="bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-6 text-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(91,141,238,0.15)] cursor-pointer reveal sm:px-2 sm:py-4"
                ref={(el) => (cardsRef.current[1] = el)}
                style={{ transitionDelay: "0.1s" }}
              >
                <VscFolderLibrary className="text-primary text-[1.4rem] lg:text-[1.8rem] mb-2 mx-auto block" />
                <h5 className="text-[0.85rem] font-semibold text-lighter mb-1">
                  Projects
                </h5>
                <small className="text-[0.72rem] text-light">10+ Completed</small>
              </article>
            </a>

            <a href="#experience">
              <article
                className="bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-6 text-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(91,141,238,0.15)] cursor-pointer reveal sm:px-2 sm:py-4"
                ref={(el) => (cardsRef.current[2] = el)}
                style={{ transitionDelay: "0.2s" }}
              >
                <FaCode className="text-primary text-[1.4rem] lg:text-[1.8rem] mb-2 mx-auto block" />
                <h5 className="text-[0.85rem] font-semibold text-lighter mb-1">
                  Technologies
                </h5>
                <small className="text-[0.72rem] text-light">15+ Mastered</small>
              </article>
            </a>
          </div>

          <p className="text-light text-[0.95rem] leading-[1.8]">
            I'm a passionate{" "}
            <strong className="text-white font-semibold">
              Frontend Developer
            </strong>{" "}
            with <strong className="text-white font-semibold">2+ years</strong>{" "}
            of experience building modern, high-performance web applications
            using{" "}
            <strong className="text-white font-semibold">
              React.js and Vue.js
            </strong>
            , I focus on creating responsive, scalable, and pixel-perfect user
            experiences with clean code, reusable components, and strong
            attention to performance, SEO, and accessibility.
          </p>
          <p className="text-light text-[0.95rem] leading-[1.8] mt-3">
            From e-commerce platforms to interactive dashboards, I build
            solutions that deliver real business value.
          </p>
          <a href="#contact" className="btn btn-primary mt-6">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
