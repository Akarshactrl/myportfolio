import React from "react";
import "./projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>

      <div className="card">
  <h2>Cylinder InfoTrack System</h2>

  <p>
    Developed a system to track and manage cylinder information efficiently.
    The project focuses on storing, updating, and retrieving cylinder data
    for better monitoring and management.
  </p>

  <p><b>Features:</b></p>
  <ul>
    <li>Data storage and retrieval</li>
    <li>Real-time tracking of cylinder details</li>
    <li>User-friendly interface</li>
    <li>Improved data organization</li>
  </ul>

  <p><b>Tech Used:</b> Typescript,HTML and CSS for styling, SQL</p>
</div>

      <div className="card">
        <h2>JavaScript Internship Tasks</h2>
        <p>Worked on real-world logic programs:</p>
        <ul>
          <li>Student Report Generator</li>
          <li>Bank Account Simulator</li>
          <li>Password Strength Checker</li>
          <li>Electricity Bill Calculator</li>
          <li>shopping bill calculator</li>
          <li>Number Analyzer</li>
          <li>Object Property Counter</li>
          <li>Reverse a Number</li>
          <li>Simple Calculator Using Functions</li>
          <li>Dynamic Object Modifier</li>
        </ul>
      </div>

      <div className="card">
        <h2>Tic Tac Toe Game</h2>
        <p>Interactive game using JavaScript</p>
      </div>

      <div className="card">
        <h2>Calculator</h2>
        <p>Built using HTML, CSS, JavaScript</p>
      </div>

      <div className="card">
        <h2>Timetable</h2>
        <p>Designed using HTML & CSS</p>
      </div>

    </section>
  );
}

export default Projects;