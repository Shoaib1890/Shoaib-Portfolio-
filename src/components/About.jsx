import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import profilePic from "../assets/myself.jpg";
import Tech from "./Tech";

gsap.registerPlugin(ScrollTrigger);

// Reusable GSAP hook
const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current, animation.from, {
        ...animation.to,
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [elementRef, animation, delay]);
};

// Service Card component with Tilt animation
const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 100, scale: 0.8 },
      to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    },
    index * 0.2
  );

  return (
    <Tilt className="w-full sm:w-[250px]">
      <div
        ref={cardRef}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useGsap(headingRef, {
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0, duration: 0.8 },
  });

  useGsap(contentRef, {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 1 },
  });

  return (
    <section className="w-full text-white mt-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef}>
          <p className={`${styles.sectionSubText}`}>ABOUT</p>
          <h5 className="text-[28px] sm:text-[32px] font-semibold">
            LEARN MORE ABOUT ME
          </h5>
        </div>

        {/* Profile + Info */}
        <div
          ref={contentRef}
          className="mt-10 flex flex-col lg:flex-row items-start gap-10"
        >
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={profilePic}
              alt="Mohammed Shoaib"
              className="rounded-xl object-cover w-[250px] h-[250px] shadow-2xl border-4 border-green-500"
            />
          </div>

          {/* Text Info */}
          <div className="w-full lg:w-2/3 space-y-4 text-[16px] text-secondary">
            <h3 className="text-[22px] font-semibold text-green-400">
              Software Developer
            </h3>
            <p>
              I'm a passionate developer skilled in JavaScript and TypeScript,
              with experience in frameworks like React, Next.js, and Node.js. At
              Switch iT, I worked on recruiter tools and scalable UIs.
            </p>
            <p>
              I enjoy solving real-world problems—from building a Campus
              Complaint Portal in Python & ML to driving programming initiatives
              on campus. I thrive in collaborative environments where I can
              build impactful software.
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mt-6">
              <p>
                <span className="text-green-400">🎂 Birthday:</span> 06 Aug 2003
              </p>
              <p>
                <span className="text-green-400">📍 City:</span> Hyderabad,
                India
              </p>
              <p>
                <span className="text-green-400">📞 Phone:</span> +91 9948128788
              </p>
              <p className="truncate">
                <span className="text-green-400">📧 Email:</span>{" "}
                <span className="inline-block max-w-[220px] truncate align-middle">
                  shoaibmohammed1890@gmail.com
                </span>
              </p>

              <p>
                <span className="text-green-400">🎓 Degree:</span> Bachelor of
                Technology
              </p>
              <p>
                <span className="text-green-400">💼 Freelance:</span> Available
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack / Skills */}
        <h3 className="text-[22px] font-semibold mt-24 mb-6 text-green-400 text-center lg:text-left">
          Tech Stack & Tools
        </h3>
        <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* Full Tech Component Below */}
        <Tech />
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
