import React from "react";
import "./resume.css";
import resume from "../assets/resume.pdf";

function Resume() {
  return (
    <section id="resume" className="resume">
      <h1>My Resume</h1>

      <p>
        You can view or download my resume to know more about my education,
        skills, and experience.
      </p>

      <div className="resume-buttons">

        {/* View Resume */}
        <a href={resume} target="_blank" rel="noreferrer">
          <button className="btn">View Resume</button>
        </a>

        {/* Download Resume */}
        <a href={resume} download>
          <button className="btn download">Download Resume</button>
        </a>

      </div>
    </section>
  );
}

export default Resume;