import React from "react";
import { SectionWrapper } from "../hoc";

const certificates = [
  {
    title: "UI/UX Hackathon",
    event: "Inter IIIT Hackathon by IIITDM Kancheepuram",
    position: "🥇 Secured 1st Position | 24-Hour National Sprint",
    imageUrl: "/Certificate_Hackathon/UI-UX Hackathon.png",
    certificateLink: "https://drive.google.com/file/d/1sGnmCW9PnPFpZpJ1to2a4owXh2wckNxH/view?usp=sharing",
  },
  {
    title: "Data Analytics Hackathon",
    event: "Inter IIIT Hackathon by IIITDM Kancheepuram",
    position: "🥈 Secured 2nd Position | 24-Hour National Sprint",
    imageUrl: "/Certificate_Hackathon/Data Analytics Hackathon.png",
    certificateLink: "https://drive.google.com/file/d/1yEm-RtCYs0YmypHroGSy__jpioVA51BD/view?usp=sharing",
  },
  {
    title: "GenAI Hackathon",
    event: "Inter IIIT Hackathon by IIITDM Kancheepuram",
    imageUrl: "/Certificate_Hackathon/GenAI Hackathon.png",
    certificateLink: "https://drive.google.com/file/d/1rXn3viiIUYg3cIE9G_xVcGGiCrbAYBL9/view?usp=sharing",
  },
  // {
  //   title: "Flipkart Grid 6.0",
  //   event: "National-level Hiring Challenge by Flipkart",
  //   imageUrl: "/Certificate_Hackathon/flipkart.png",
  //   certificateLink: "https://drive.google.com/file/d/11zTsAAu1x3y1ES_oBM7k_NMz9XP2Z34q/view?usp=sharing",
  // },
  // {
  //   title: "TATA Challenge",
  //   event: "Hiring Hackathon by TATA",
  //   imageUrl: "/Certificate_Hackathon/TATA certificate.jpg",
  //   certificateLink: "https://drive.google.com/file/d/1eFDzaZhfHW4BO95c3GgtYspPzj7g4Sdu/view?usp=sharing",
  // },
  {
    title: "Graph Theory",
    event: "Graphs Mastery Program – AlgoUniversity",
    imageUrl: "/Certificate_Hackathon/GraphCamp certificate.png",
    certificateLink: "https://drive.google.com/file/d/15gp3u9w6mfntDaBmskZ_X2R0-gfLgBNW/view?usp=sharing",
  },
];



const CertificateCard = ({ cert }) => (
  <div className="relative group overflow-hidden rounded-md shadow-lg bg-black border border-gray-700">
 
    

    {/* Image */}
    <img
      src={cert.imageUrl}
      alt={cert.title}
      className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
    />

    {/* Corner lines */}
    <div className="absolute z-20 top-4 left-4 w-0 h-[2px] bg-white group-hover:w-16 transition-all duration-500" />
    <div className="absolute z-20 top-4 left-4 h-0 w-[2px] bg-white group-hover:h-16 transition-all duration-500" />
    <div className="absolute z-20 bottom-4 right-4 w-0 h-[2px] bg-white group-hover:w-16 transition-all duration-500" />
    <div className="absolute z-20 bottom-4 right-4 h-0 w-[2px] bg-white group-hover:h-16 transition-all duration-500" />

    {/* Overlay */}
    <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white text-center px-4">
      {cert.position && (
        <p className="text-yellow-400 text-base md:text-lg font-extrabold mb-1">{cert.position}</p>
      )}
      <h3 className="text-lg font-semibold">{cert.title}</h3>
      <p className="text-xs md:text-sm italic mb-3 text-gray-300">{cert.event}</p>
      {cert.certificateLink && (
        <a
          href={cert.certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-300 hover:underline"
        >
          🎓 View Certificate
        </a>
      )}
    </div>
  </div>
);


const CertificateSection = () => {
  return (
    <div className="w-full text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm tracking-widest text-green-400 uppercase mb-2">
          Certifications
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          CERTIFICATES & ACHIEVEMENTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(CertificateSection, "certificates");
