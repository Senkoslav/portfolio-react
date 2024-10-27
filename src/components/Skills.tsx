import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="header" id="header">
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="container lazy-background" id="container">
        <div className="languages">
          <p><i className="fas fa-code"></i></p>
          <h3>Languages</h3>
          <span>JS/TS <span className="iconify" data-icon="logos:javascript" data-inline="false"></span> <span className="iconify" data-icon="logos-typescript-icon" data-inline="false"></span></span>
          <br />
          <span>HTML <span className="iconify" data-icon="logos:html-5" data-inline="false"></span></span>
          <br />
          <span>CSS/SASS <span className="iconify" data-icon="logos:css-3" data-inline="false"></span> <span className="iconify" data-icon="logos:sass" data-inline="false"></span></span>
        </div>

        <div className="frameworks">
          <p><i className="fas fa-book-reader"></i></p>
          <h3>Frameworks/Libraries/Databases</h3>
          <span>React.js <span className="iconify" data-icon="logos:react" data-inline="false"></span></span>
          <br />
          <span>Node.js/Express.js <span className="iconify" data-icon="logos:nodejs-icon" data-inline="false"></span> <span className="iconify" data-icon="simple-icons:express" data-inline="false"></span></span>
          <br />
          <span>MongoDB <span className="iconify" data-icon="vscode-icons:file-type-mongo"></span></span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
