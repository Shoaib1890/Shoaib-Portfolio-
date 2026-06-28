import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  programmingLanguages,
  webDevSkills,
  databaseSkills,
  tools,
  otherSkills,
} from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechCategory = ({ title, items }) => (
  <div className="mb-14 w-full">
    <h2 className="text-[14px] font-medium text-[#aaaaaa] uppercase tracking-wider leading-[1px] mb-5 font-poppins">
      {title}
    </h2>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
      {items.map((tech) => (
        <a
          href={tech.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          key={tech.name}
          className="flex items-center justify-center aspect-square 
      bg-[#0f172a] rounded-lg border border-white 
      hover:border-green-400 hover:scale-110 
      transition-all duration-300 ease-in-out 
      shadow-md hover:shadow-green-400/20 p-2 group relative cursor-pointer"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center overflow-hidden">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Custom Tooltip */}
          <div className="pointer-events-none absolute bottom-full mb-3 flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
            <span className="relative z-30 px-3 py-1.5 text-[11px] text-white bg-slate-900 border border-green-400 rounded-md shadow-xl font-medium tracking-wide whitespace-nowrap font-poppins">
              {tech.name}
            </span>
            <div className="w-2 h-2 -mt-1 rotate-45 bg-slate-900 border-r border-b border-green-400"></div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const OtherSkills = ({ title, items }) => (
  <div className="mb-12 w-full">
    <h2 className="text-[14px] font-medium text-[#aaaaaa] uppercase tracking-wider leading-[1px] mb-5 font-poppins">
      {title}
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 max-w-5xl">
      {items.map((skill) => (
        <div
          key={skill}
          className="border border-white rounded-lg bg-[#0f172a] 
           text-white text-sm sm:text-base 
           px-5 py-3 min-h-[48px] flex items-center justify-center
           hover:border-green-400 hover:scale-110 
      transition-transform duration-300 ease-in-out 
      shadow-md hover:shadow-green-400/20 p-2"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icons-wrapper",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".tech-icons-wrapper",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full py-16 mt-20 text-left">
      <div className="tech-icons-wrapper max-w-screen-xl mx-auto">
        <TechCategory
          title="Programming Languages"
          items={programmingLanguages}
        />
        <TechCategory title="Web Development" items={webDevSkills} />
        <TechCategory title="Databases" items={databaseSkills} />
        <TechCategory title="Developer Tools" items={tools} />
        <OtherSkills title="Other Skills" items={otherSkills} />
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
