import React from "react";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container-about">
        <div className="about-me" id="about-me">
          <h2><span>About</span> Me</h2>
          <p>
            Hi. I am an aspiring front-end developer specializing in creating modern and functional websites. I have deep knowledge of HTML, CSS, JS, and TS. I can work with databases like MongoDB and server technologies such as Node.js and Express. I am always striving for professional growth and improvement of my skills, constantly learning new technologies. I pay great attention to details and aim to make each project user-friendly and attractive.
          </p>
        </div>
        <div className="student-img">
          <img
            src="../src/assets/hello.svg"
            height="250px"
            width="350px"
            alt="guy with laptop on a desk"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
