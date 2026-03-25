import React from "react";
import "./contacts.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contacts() {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>

      <p>Email: akarshakesetti@gmail.com</p>

      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/akarsha-kesetti-287bb6378/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Akarshactrl" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Contacts;