import React from "react";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      items: [
        "Building modern, responsive web applications using React.js, and Vue.js.",
        "Developing reusable, scalable, and maintainable component-based architectures.",
        "Integrating REST APIs and managing application state with Redux and Context API.",
        "Automating DOCX and PDF report generation using PHPWord and DomPDF with customizable templates.",
        "Implementing contact forms with EmailJS for seamless email communication without a backend.",
      ],
    },
    {
      title: "UI Implementation",
      items: [
        "Converting Figma and design systems into pixel-perfect, responsive web interfaces.",
        "Developing fully custom UI pages and reusable components without relying on pre-built templates.",
        "Building interactive dashboards, Kanban boards, and drag-and-drop interfaces.",
        "Creating accessible, mobile-first layouts using Tailwind CSS and modern CSS.",
      ],
    },
    {
      title: "Performance & Optimization",
      items: [
        "Optimizing frontend performance and minimizing unnecessary re-renders.",
        "Refactoring legacy code to improve scalability, maintainability, and code quality.",
        "Generating dynamic charts and analytics integrations for data-driven applications.",
        "Collaborating with cross-functional teams to deliver scalable, production-ready features.",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding">
      <h5 className="section-subtitle">What I Offer</h5>
      <h2 className="section-title">Services</h2>

      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="glass-card h-fit overflow-hidden flex flex-col group"
          >
            <div className="bg-gradient-primary px-8 py-7 relative overflow-hidden">
              <div className="absolute -top-[50%] -right-[20%] w-[100px] h-[100px] bg-white/10 rounded-full" />
              <h3 className="text-white text-base font-semibold text-center relative z-10 tracking-wide">
                {service.title}
              </h3>
            </div>

            <ul className="p-7 flex flex-col gap-3">
              {service.items.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <BsCheck className="text-primary text-[1.1rem] mt-[2px] shrink-0" />
                  <p className="text-[0.88rem] text-light leading-[1.65] text-justify">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
