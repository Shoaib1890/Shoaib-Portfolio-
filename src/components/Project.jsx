import React from "react";
import { SectionWrapper } from "../hoc";

const projects = [
  {
    title: "Recruiter Tool",
    techStack: "MERN STACK | WEB DEVELOPMENT",
    imageUrl: "/Project_Images/swithiT.png",
    liveLink: null,
    githubLink: null,
    note: "Confidential company project – links not shared.",
  },
  {
    title: "Campus Resolution Portal",
    techStack: "MACHINE LEARNING",
    imageUrl: "/Project_Images/Campus_Portal.png",
    liveLink:
      "https://campus-resolution-app-vmrpq3jasndrr3qztfh2fs.streamlit.app/",
    githubLink: "https://github.com/Shoaib1890/Campus-Resolution-Portal.git",
  },
  {
    title: "Smart Portfolio Insights",
    techStack: "MERN STACK | WEB DEVELOPMENT",
    imageUrl: "/Project_Images/SmartPortfolio.png",
    liveLink: "https://alpha-stock-whisperer-india.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/alpha-stock-whisperer-india.git",
  },
  {
    title: "Campus Connect",
    techStack: "UI/UX | WEB DEVELOPMENT",
    imageUrl: "/Project_Images/campusconnect.png",
    liveLink: "https://campus-hub-refined.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/campus-hub-refined.git",
    award: "🏆 Winner – UI/UX Hackathon (IIITDM, 24hr Sprint)"

  },
  {
    title: "Mess Crowd Analysis & Prediction",
    techStack: "PYTHON | DATA ANALYTICS",
    imageUrl: "/Project_Images/Mess_crowd_predictor.png",
    liveLink:
      "https://colab.research.google.com/drive/110h6zZprBdHq0jxZZpZUOXtTm8oLzZy-?usp=sharing", // <-- use your copied link
    githubLink: "https://github.com/Shoaib1890/Mess-crowd-analysis-hackathon",
    award: "🥈 Runner-up – Data Analysis Hackathon (Among IIITs)"
  },
  {
    title: "Job Application Tracker",
    techStack: "REACT | WEB DEVELOPMENT",
    imageUrl: "/Project_Images/jobapplication.png",
    liveLink: "https://job-application-tracker-three-lake.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/genesis-makers-space.git",
  },
  {
    title: "Todo App",
    techStack: "REACT | WEB DEVELOPMENT",
    imageUrl: "/Project_Images/TodoApp.png",
    liveLink: "https://todo-list1-roan.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/Todo-List1.git",
  },
  {
    title: "Currency Convertor",
    techStack: "JAVASCRIPT | WEB DEVELOPMENT",
    imageUrl: "/Project_Images/CurrencyConvertor.png",
    liveLink: "https://currency-convertor-tan-kappa.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/Currency-Convertor.git",
  },
  {
    title: "Notes Web App",
    techStack: "MERN STACK | WEB DEVELOPMENT",
    imageUrl: "/Project_Images/Notes_web_app.png",
    liveLink: "https://notes-web-app-5fl5.onrender.com",
    githubLink: "https://github.com/Shoaib1890/Notes_web_app.git",
  },
  {
    title: "Amazon Clone",
    techStack: "JAVASCRIPT | WEB DEVELOPMENT",
    imageUrl: "/Project_Images/Amazon.png",
    liveLink: "https://clone-amazon-in-gg1o.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/Clone-Amazon.in.git",
  },
  {
    title: "Tic Tac Toe",
    techStack: "JAVASCRIPT | WEB DEVELOPMENT",
    imageUrl: "/Project_Images/TicTacToe.png",
    liveLink: "https://tic-tac-toe-kohl-omega-36.vercel.app/",
    githubLink: "https://github.com/Shoaib1890/Tic-Tac-Toe.git",
  },
];

const ProjectCard = ({ project }) => (
  <div className="relative group overflow-hidden rounded-md shadow-lg bg-black border border-gray-700">
    {/* Project Image */}
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
    />

    {/* Corner lines ABOVE everything */}
    {/* Top-left */}
    <div className="absolute z-20 top-4 left-4 w-0 h-[2px] bg-white group-hover:w-16 transition-all duration-500" />
    <div className="absolute z-20 top-4 left-4 h-0 w-[2px] bg-white group-hover:h-16 transition-all duration-500" />
    {/* Bottom-right */}
    <div className="absolute z-20 bottom-4 right-4 w-0 h-[2px] bg-white group-hover:w-16 transition-all duration-500" />
    <div className="absolute z-20 bottom-4 right-4 h-0 w-[2px] bg-white group-hover:h-16 transition-all duration-500" />

    {/* Overlay */}
    <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white text-center px-4">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-sm mb-2">{project.techStack}</p>
      {project.award && (
        <p className="text-xs text-green-300 font-medium mt-1 mb-2">
          {project.award}
        </p>
      )}
      <div className="flex space-x-4">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            🔗 Live
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            💻 Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectSection = () => {
  return (
    <div className="w-full text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm tracking-widest text-green-400 uppercase mb-2">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">MY WORKS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectSection, "projects");
