import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap, FaCode, FaRocket, FaStar } from "react-icons/fa";

const milestones = [
  {
    id: 1,
    year: "2022",
    title: "Started the Journey",
    company: "Self-Learning",
    description:
      "Dived deep into HTML, CSS & JavaScript fundamentals. Built first static projects and fell in love with frontend development.",
    icon: <FaCode />,
    type: "learning",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    year: "2022 – 2023",
    title: "Route Academy Training",
    company: "Route IT Academy",
    description:
      "Completed a comprehensive Full Stack Web Development diploma with hands-on projects, focusing on frontend development with React.js and backend development using Node.js, Express.js, MongoDB, RESTful APIs, Git, and modern JavaScript.",
    icon: <FaGraduationCap />,
    type: "education",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JavaScript (ES6+)",
      "Bootstrap",
      "Sass",
      "jQuery",
      "Git",
    ],
  },
  {
    id: 3,
    year: "2023",
    title: "Mastered React Ecosystem",
    company: "Projects & Practice",
    description:
      "Built multiple production-ready React applications including an E-Commerce platform and Gym website. Adopted Redux Toolkit for state management.",
    icon: <BsBriefcaseFill />,
    type: "milestone",
    tags: ["React", "Redux", "Axios", "REST API"],
  },
  {
    id: 4,
    year: "2024 – Present",
    title: "Frontend Developer",
    company: "Professional Experience",
    description:
      "Developing enterprise-grade web applications using React.js, and Vue.js. Building scalable component-based architectures, interactive dashboards, and automated document generation systems while optimizing performance, improving code quality, and collaborating with cross-functional teams to deliver production-ready solutions.",
    icon: <FaRocket />,
    type: "current",
    tags: [
      "React.js",
      "Vue.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "Redux",
      "PHPWord",
      "DomPDF",
    ],
  },
];

const Timeline = () => {
  const getIconColor = (type) => {
    switch (type) {
      case "learning":
        return "bg-gradient-to-br from-[#3b82f6] to-[#60a5fa]";
      case "education":
        return "bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa]";
      case "milestone":
        return "bg-gradient-to-br from-[#10b981] to-[#34d399]";
      case "work":
        return "bg-gradient-to-br from-[#f59e0b] to-[#fcd34d]";
      case "current":
        return "bg-gradient-to-br from-[#ec4899] to-[#f472b6] animate-pulse-glow";
      default:
        return "bg-gradient-primary";
    }
  };

  return (
    <section id="timeline" className="section-padding">
      <h5 className="section-subtitle">My Journey</h5>
      <h2 className="section-title">Work Timeline</h2>

      <div className="section-container relative py-4 lg:py-12">
        {/* Center line */}
        <div className="absolute left-[22px] lg:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

        <div className="flex flex-col gap-8 lg:gap-12">
          {milestones.map((item, index) => (
            <div
              key={item.id}
              className="relative grid grid-cols-1 lg:grid-cols-2 items-center"
            >
              {/* Left Side */}
              {index % 2 === 0 ? (
                <>
                  <div className="lg:pr-16 pl-16 lg:pl-0">
                    <div className="glass-card w-full p-5 lg:p-6 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[0.78rem] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
                          {item.year}
                        </span>

                        {item.type === "current" && (
                          <span className="text-[0.7rem] font-semibold text-white bg-gradient-to-br from-[#ec4899] to-[#f472b6] px-3 py-1 rounded-full tracking-wider animate-pulse-glow">
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="text-[1.05rem] font-semibold text-white mb-1">
                        {item.title}
                      </h3>

                      <p className="text-[0.82rem] text-accent font-medium mb-3">
                        {item.company}
                      </p>

                      <p className="text-[0.88rem] text-light leading-[1.65] mb-4 text-justify">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.7rem] px-2.5 py-1 rounded-full bg-[rgba(167,139,250,0.1)] border border-[rgba(167,139,250,0.2)] text-accent font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div />
                </>
              ) : (
                <>
                  <div />

                  <div className="lg:pl-16 pl-16">
                    <div className="glass-card w-full p-5 lg:p-6 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[0.78rem] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
                          {item.year}
                        </span>

                        {item.type === "current" && (
                          <span className="text-[0.7rem] font-semibold text-white bg-gradient-to-br from-[#ec4899] to-[#f472b6] px-3 py-1 rounded-full tracking-wider animate-pulse-glow">
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="text-[1.05rem] font-semibold text-white mb-1">
                        {item.title}
                      </h3>

                      <p className="text-[0.82rem] text-accent font-medium mb-3">
                        {item.company}
                      </p>

                      <p className="text-[0.88rem] text-light leading-[1.65] mb-4 text-justify">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.7rem] px-2.5 py-1 rounded-full bg-[rgba(167,139,250,0.1)] border border-[rgba(167,139,250,0.2)] text-accent font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Timeline Node */}
              <div
                className={`absolute left-[22px] lg:left-1/2 lg:-translate-x-1/2 w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-white text-[0.85rem] lg:text-base z-20 border-2 border-bg shadow-[0_0_0_3px_rgba(91,141,238,0.3)] transition-transform duration-500 hover:scale-125 ${getIconColor(
                  item.type,
                )}`}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
