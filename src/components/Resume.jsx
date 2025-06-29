import React from "react";

const Resume = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-10 py-12 text-white pt-24">
      <h2 className="text-3xl font-bold mb-4">CHECK MY RESUME</h2>
      <a
        href="/Shoaib.pdf" // Put your actual resume path here
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black mb-8"
      >
        Download Resume
      </a>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Summary */}
          <div>
            <h3 className="text-xl font-bold mb-3">Summary</h3>
            <div className="relative pl-6">
              {/* Green dot */}
              <span className="absolute left-0 top-1 w-3 h-3 bg-green-500 rounded-full z-10"></span>
              {/* Gray vertical line */}
              <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gray-600"></div>

              <div>
                <p className="text-green-400 font-semibold">MOHAMMED SHOAIB</p>
                <p className="italic pt-4">
                  Passionate software developer with 3+ years of personal
                  project experience and hands-on internship exposure in
                  real-world web development.
                </p>
                <ul className="mt-4 list-disc list-inside text-sm mt-1 space-y-1">
                  <li>Hyderabad, Telangana, India</li>
                  <li>+91 9948128788</li>
                  <li>shoaibmohammed1890@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold mb-3">Education</h3>
            <div className="relative pl-6">
              {/* Green dot */}
              <span className="absolute left-0 top-1 w-3 h-3 bg-green-500 rounded-full z-10"></span>

              {/* Gray vertical line */}
              <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gray-600"></div>

              {/* Content */}
              <div>
                <p className="text-green-400 font-semibold">
                  BACHELOR OF TECHNOLOGY
                </p>
                <span className="inline-block bg-gray-700 text-sm mt-2 px-4 py-1 mt-1">
                  2022 - 2026
                </span>
                <p className="italic mt-3">
                  Indian Institute of Information Technology, Design and
                  Manufacturing Kancheepuram, Chennai, India
                </p>
                <p className="mt-4 text-sm">
                  I am currently pursuing a Bachelor of Technology degree in the
                  Mechanical Engineering branch.
                </p>
              </div>
            </div>
          </div>

          {/* Club Activities */}
          <div>
            <h3 className="text-xl font-bold mb-3">Club Activities</h3>
            <div className="space-y-8">
              {/* Placement Head */}
              <div className="relative pl-6">
                <span className="absolute left-0 top-1 w-3 h-3 bg-green-500 rounded-full z-10"></span>
                <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gray-600"></div>

                <div>
                  <p className="text-green-400 font-semibold">
                    PLACEMENT HEAD - MECHANICAL Dept
                  </p>
                  <span className="inline-block bg-gray-700 text-sm mt-2 px-2 py-1">
                    2025 - Present
                  </span>
                  <p className="italic mt-3">
                    Placement Cell IIITDM Kancheepuram
                  </p>
                  <p className="text-sm mt-3">
                    I currently serve as the Placement Head for the Mechanical
                    Department at IIITDM Kancheepuram, where I lead outreach
                    initiatives, coordinate with companies, and facilitate
                    placement opportunities for students through strategic
                    planning and communication.
                  </p>
                </div>
              </div>

              {/* Core in CS Club */}
              <div className="relative pl-6">
                <span className="absolute left-0 top-1 w-3 h-3 bg-green-500 rounded-full z-10"></span>
                <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gray-600"></div>

                <div>
                  <p className="text-green-400 font-semibold">
                    CORE IN CS CLUB
                  </p>
                  <span className="inline-block bg-gray-700 text-sm mt-2 px-2 py-1">
                    2024 - 2025
                  </span>
                  <p className="italic mt-3">CS Club IIITDM Kancheepuram</p>
                  <p className="text-sm mt-3">
                    I served as the Core member of the Competitive Programming
                    Division within the CS Club at IIITDM Kancheepuram where I
                    led a team and orchestrated multiple Competitive Programming
                    events and actively engaged in a substantial number of them.
                  </p>
                </div>
              </div>

              {/* Joint Secretary */}
              <div className="relative pl-6">
                <span className="absolute left-0 top-1 w-3 h-3 bg-green-500 rounded-full z-10"></span>
                <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gray-600"></div>

                <div>
                  <p className="text-green-400 font-semibold">
                    JOINT SECRETARY
                  </p>
                  <span className="inline-block bg-gray-700 text-sm mt-2 px-2 py-1">
                    2024 - 2025
                  </span>
                  <p className="italic mt-3">
                    Hostel Affairs - IIITDM Kancheepuram
                  </p>
                  <p className="text-sm mt-3">
                    I served as the Joint Secretary of Hostel Affairs at IIITDM
                    Kancheepuram, where I represented student concerns in the
                    Student Affairs Council, coordinated hostel-related
                    activities, and contributed to policies improving student
                    life and residential experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Professional Experience */}
          <div>
            <h3 className="text-xl font-bold mb-3">Professional Experience</h3>
            <div className="relative pl-6">
              {/* Green dot */}
              <span className="absolute left-0 top-1 w-3 h-3 bg-green-500 rounded-full z-10"></span>

              {/* Gray vertical line */}
              <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gray-600"></div>

              {/* Content */}
              <div>
                <p className="text-green-400 font-semibold">
                  SDE INTERN AT SwitchiT
                </p>
                <span className="inline-block bg-gray-700 text-sm mt-2 px-2 py-1">
                  May 2025 - Present
                </span>
                <p className="italic mt-1">Bangalore, Karnataka, India</p>

                <ul className="list-disc list-outside pl-5 text-sm mt-4 space-y-2">
                  <li>
                    <span className="block">
                      Built the complete frontend of a recruiter hiring platform
                      using Next.js, TypeScript, and Tailwind CSS.
                    </span>
                  </li>
                  <li>
                    <span className="block">
                      Designed responsive UI components including candidate
                      cards, job listings, filters, and modals.
                    </span>
                  </li>
                  <li>
                    <span className="block">
                      Integrated APIs and managed async state using Redux
                      Toolkit Query for smooth user interactions.
                    </span>
                  </li>
                  <li>
                    <span className="block">
                      Ensured mobile responsiveness and cross-browser
                      compatibility across the platform.
                    </span>
                  </li>
                  <li>
                    <span className="block">
                      Collaborated with backend and design teams to align
                      features with user experience goals.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* projects section */}
          <div>
            <h3 className="text-xl font-bold mb-3">Projects</h3>
            <div className="space-y-8">
              {/* Project 1: Campus Complaint Resolution Portal */}
              <div className="relative pl-6">
                {/* Green dot */}
                <span className="absolute left-0 top-1 w-3 h-3 bg-green-500 rounded-full z-10"></span>
                {/* Gray vertical line */}
                <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gray-600"></div>

                <div>
                  <p className="text-green-400 font-semibold">
                    Campus Complaint Resolution Portal
                  </p>
                  <span className="mt-2 inline-block bg-gray-700 text-sm px-2 py-1 rounded">
                    Python · Streamlit · ML
                  </span>
                  <ul className="mt-2 list-disc list-outside pl-5 text-sm space-y-1">
                    <li>
                      Built a tool to guide students to the right campus contact
                      using NLP-based classification.
                    </li>
                    <li>
                      Used TF-IDF + KNN with Streamlit UI and Pandas for data
                      handling and display.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project 2: Currency Converter */}
              <div className="relative pl-6">
                {/* Green dot */}
                <span className="absolute left-0 top-1 w-3 h-3 bg-green-500 rounded-full z-10"></span>
                {/* Gray vertical line */}
                <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gray-600"></div>

                <div>
                  <p className="text-green-400 font-semibold">
                    Currency Converter
                  </p>
                  <span className="mt-2 inline-block bg-gray-700 text-sm px-2 py-1 rounded">
                    HTML · CSS · JavaScript
                  </span>
                  <ul className="mt-2 list-disc list-outside pl-5 text-sm space-y-1">
                    <li>
                      Developed a real-time currency converter using Fetch API
                      and open exchange rates.
                    </li>
                    <li>
                      Focused on responsive UI and intuitive interaction design.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
