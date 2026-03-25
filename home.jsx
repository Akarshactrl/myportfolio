import React from "react";
import "./home.css";
import profile from "../assets/profile.jpg.jpeg";

function Home() {
  return (
    <section id="home" className="home">

      <div className="home-text">
        <h1>Hi, I'm <span>Akarsha</span></h1>
        <h2>Full Stack Developer | AIML Student</h2>

        <p>
          I build modern, responsive web applications and enjoy solving
          real-world problems using JavaScript and Python.
        </p>
      </div>

      <img src={profile} alt="profile" className="profile-img" />

    </section>
  );
}

export default Home;