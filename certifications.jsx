import React from "react";
import "./certifications.css";
import cert1 from "../assets/cert1.jpg.jpeg";
import cert2 from "../assets/cert2.jpg.jpeg";
import cert3 from "../assets/cert3.jpg.jpeg";
import cert4 from "../assets/cert4.jpg.jpeg";   
import cert5 from "../assets/cert5.jpg.jpeg";
import cert6 from "../assets/cert6.jpg.jpeg";
import cert7 from "../assets/cert7.jpg.jpeg";
import cert8 from "../assets/cert8.jpg.jpeg";
import cert9 from "../assets/cert9.jpg.jpeg";
import cert10 from "../assets/cert10.jpg.jpeg";

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h1>Certifications</h1>

      {/* Professional Description */}
      <p style={{marginBottom: "20px"}}>
        I have actively participated in multiple workshops and certification 
        programs to enhance my knowledge in AI tools and technologies. These 
        experiences helped me gain both practical and theoretical understanding, 
        which I have applied in my projects to build effective solutions.
      </p>

      <div className="cert-container">
        <img src={cert1} alt="cert1" />
        <img src={cert2} alt="cert2" />
        <img src={cert3} alt="cert3" />
        <img src={cert4} alt="cert4" />
        <img src={cert5} alt="cert5" />
        <img src={cert6} alt="cert6" />
        <img src={cert7} alt="cert7" />
        <img src={cert8} alt="cert8" />
        <img src={cert9} alt="cert9" />
        <img src={cert10} alt="cert10" />
      </div>
    </section>
  );
}

export default Certifications;