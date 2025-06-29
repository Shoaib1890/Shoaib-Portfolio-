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
        <div
          key={tech.name}
          className="flex items-center justify-center aspect-square 
      bg-[#0f172a] rounded-lg border border-white 
      hover:border-green-400 hover:scale-110 
      transition-transform duration-300 ease-in-out 
      shadow-md hover:shadow-green-400/20 p-2"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center overflow-hidden">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
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
