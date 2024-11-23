import React from "react";
import Navbar from "./Navbar";
import ThemeToggle from "./DarkModeToggle";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import Contact from "./contact";
import Footer from "./Footer";
import Skill from "./skill";
import "./App.css";
import video1 from "./LOGO0001-0120.mp4"; // First video file
import video2 from "./Overlay.mp4"; // Second video file

const App = () => {
  return (
    <div className="app">
      {/* First Background Video */}
      {/* <div className="video-layer video-layer1">
        <video autoPlay loop muted playsInline>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* Second Background Video */}
      <div className="video-layer video-layer2">
        <video autoPlay loop muted playsInline>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content">
        <Navbar />
        <ThemeToggle />
        <div className="landing-container" id="home">
          <h1 className="landing-title">Satyajeet Desai</h1>
          <h2 className="landing-subtitle">
            A Passionate Web Developer | Explorer of the Coding World
          </h2>
          <p className="landing-description">
            I create innovative web applications, solve complex problems, and
            continuously evolve my skills to embrace new technologies in the
            ever-evolving tech landscape.
          </p>
        </div>
        <AboutMe />
        <Skill />
        <h1 id="Project">Projects</h1>
        <ProjectList />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
