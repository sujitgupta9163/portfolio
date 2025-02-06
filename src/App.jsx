import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact ";
// import ResumeUpload from "./components/ResumeUpload ";
import Resume from "./components/Resume";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact/>
      {/* <ResumeUpload/> */}
      <Resume/>
    </div>
  );
};

export default App;