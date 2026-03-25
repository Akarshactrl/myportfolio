import React from "react";
import "./qualification.css";

function Qualification() {
  return (
    <section id="qualification" className="qualification">
      <h1>Qualification</h1>

      <h2>Sandip University - CSE (AIML)</h2>

      <div className="gpa-container">

        <div className="gpa-card">
          <h3>1st Sem</h3>
          <p>GPA: 9.5</p>
        </div>

        <div className="gpa-card">
          <h3>2nd Sem</h3>
          <p>GPA: 8.9</p>
        </div>

        <div className="gpa-card">
          <h3>3rd Sem</h3>
          <p>GPA: 9.04</p>
        </div>

      </div>
    </section>
  );
}

export default Qualification;