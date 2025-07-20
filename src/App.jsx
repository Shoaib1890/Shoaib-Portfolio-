import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Resume,
  Project,
  Certificates,
} from "./components";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Navbar on all pages */}
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Tech />} />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/projects"
            element={
              <div className="bg-primary min-h-screen">
                <Project />
              </div>
            }
          />
          <Route
            path="/certificates"
            element={
              <div className="bg-primary min-h-screen">
                <Certificates />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            }
          />
        </Routes>

        {/* Uncomment if Footer needed */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
