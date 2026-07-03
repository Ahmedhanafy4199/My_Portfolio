import React, { useState, useEffect } from "react";
import CVB from "./CVB";
import HERO_IMG from "../../assets/hero_illustration.png";
import HeaderSocials from "./HeaderSocials";

const roles = [
  "Frontend Developer",
  "React Developer",
  "Vue Developer",
  "JavaScript Developer",
];

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
          );
        },
        isDeleting ? 55 : 100,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const duration = 2200;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setYears(parseFloat((2 * eased).toFixed(1)));
      setProjects(Math.floor(10 * eased));
      setCommits(Math.floor(500 * eased));
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="min-h-screen overflow-hidden relative flex items-center">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-40 bg-primary particle-${i + 1}`}
          />
        ))}

        <style>{`
      .particle-1 { top: 15%; left: 10%; animation: float 5s ease-in-out infinite; background: #5b8dee; }
      .particle-2 { top: 70%; left: 8%; animation: float 7s ease-in-out infinite 1s; background: #a78bfa; width: 6px; height: 6px; }
      .particle-3 { top: 30%; right: 10%; animation: float 6s ease-in-out infinite .5s; background: #a78bfa; }
      .particle-4 { top: 80%; right: 12%; animation: float 8s ease-in-out infinite 2s; background: #5b8dee; width: 3px; height: 3px; }
      .particle-5 { top: 50%; left: 3%; animation: float 9s ease-in-out infinite 1.5s; background: #a78bfa; width: 5px; height: 5px; opacity: .3; }
      .particle-6 { top: 20%; right: 5%; animation: float 4s ease-in-out infinite .8s; width: 3px; height: 3px; opacity: .3; }
    `}</style>
      </div>

      <div className="section-container relative flex flex-col items-center justify-center text-center gap-6 py-8">
        {/* Badge */}
        <span className="inline-block px-5 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-[0.82rem] text-primary tracking-wide animate-pulse-glow">
          👋 Available for work
        </span>

        {/* Heading */}
        <div className="flex flex-col items-center gap-5">
          <h5 className="text-base text-light font-normal tracking-widest">
            Hello, I'm
          </h5>

          <h1 className="text-[2.2rem] lg:text-[3.8rem] font-bold bg-gradient-to-br from-white via-primary to-accent bg-clip-text text-transparent tracking-tight leading-tight">
            Ahmed Hanafy
          </h1>

          <div className="text-[1.2rem] text-lighter font-normal min-h-[1.8rem] flex items-center justify-center gap-1">
            <span className="text-accent font-medium">{displayText}</span>
            <span className="text-primary animate-blink">|</span>
          </div>

          <CVB />

          <HeaderSocials />
        </div>

        {/* Image */}
        <div className="relative mt-4 flex items-center justify-center">
          <div className="absolute rounded-full border-2 border-transparent w-[110%] h-[110%] border-t-primary border-r-accent animate-spin-slow opacity-50" />

          <div className="absolute rounded-full border-2 border-transparent w-[105%] h-[105%] border-b-accent animate-spin-slow-reverse opacity-50" />

          <div className="w-56 h-56 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden bg-gradient-primary p-1 animate-float shadow-[0_25px_60px_rgba(91,141,238,0.3)]">
            <img
              src={HERO_IMG}
              alt="Ahmed Hanafy"
              className="w-full h-full object-cover rounded-full border-[3px] border-bg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[50px] px-6 py-4">
          <div className="flex flex-col items-center">
            <span className="text-[1.2rem] lg:text-[1.5rem] font-bold bg-gradient-primary bg-clip-text text-transparent">
              {years}+
            </span>
            <span className="text-[0.7rem] uppercase tracking-widest text-light">
              Years Exp.
            </span>
          </div>

          <div className="w-px h-8 bg-white/10" />

          <div className="flex flex-col items-center">
            <span className="text-[1.2rem] lg:text-[1.5rem] font-bold bg-gradient-primary bg-clip-text text-transparent">
              {projects}+
            </span>
            <span className="text-[0.7rem] uppercase tracking-widest text-light">
              Projects
            </span>
          </div>

          <div className="w-px h-8 bg-white/10" />

          <div className="flex flex-col items-center">
            <span className="text-[1.2rem] lg:text-[1.5rem] font-bold bg-gradient-primary bg-clip-text text-transparent">
              {commits}+
            </span>
            <span className="text-[0.7rem] uppercase tracking-widest text-light">
              Commits
            </span>
          </div>
        </div>

        {/* Scroll */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 mt-8 text-light tracking-widest text-sm"
        >
          <span>Scroll</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
