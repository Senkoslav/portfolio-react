import React, { useEffect } from "react";
import Typed from "typed.js";

const Hero: React.FC = () => {
  useEffect(() => {
    const typed = new Typed(".animate", {
      strings: ["student.", "coder.", "anime-fan."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero">
      <h1 className="h1">Hi, I'm a <span className="animate"></span></h1>
      <p className="student" id="student">
        Full-time student with passion for management and development.
      </p>
      <div className="hero-btns">
        <a href="#about" className="about" id="about-btn">About me</a>
      </div>
    </div>
  );
};

export default Hero;
