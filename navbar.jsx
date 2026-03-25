import React from "react";
import "./navbar.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Navbar() {
  return (
    <div className="sidebar">
      <h2 className="logo">KESETTY AKARSHA</h2>

      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#qualification">QUALIFICATION</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#certifications">CERTIFICATIONS</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      {/* 🔥 SOCIAL + MAIL */}
      <div className="social-icons">

        <a href="https://www.linkedin.com/in/akarsha-kesetti-287bb6378/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Akarshactrl" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        {/* MAIL ICON */}
        <a href="mailto:akarshakesetti@gmail.com">
          <FaEnvelope />
        </a>

      </div>
    </div>
  );
}

export default Navbar;