import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Qualification from "./components/qualification";
import Projects from "./components/projects";
import Certifications from "./components/certifications";
import Experience from "./components/experience";
import Resume from "./components/resume"; 
import Contacts from "./components/contacts";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <Certifications />
      <Experience />
      <Resume />
      <Contacts />
    </div>
  );
}

export default App;