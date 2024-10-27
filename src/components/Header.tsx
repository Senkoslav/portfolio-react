import React from "react";

const Header: React.FC = () => {
  return (
    <header id="home">
      <nav id="nav" aria-label="Main menu">
        <div className="logo">
          <h3>Syed <span>Yaroslav</span></h3>
        </div>

        <ul className="links">
          <li><a href="#home" className="link"><i className="fas fa-home"></i> Home</a></li>
          <li><a href="#about" className="link"><i className="fas fa-user"></i> About</a></li>
          <li><a href="#skills" className="link"><i className="fas fa-tools"></i> Skills</a></li>
          <li>
            <div className="color-toggle-container">
              <input type="checkbox" id="color-toggle-input" />
              <label htmlFor="color-toggle-input" className="color-toggle-label">
                <div className="color-toggle"></div>
              </label>
            </div>
          </li>
        </ul>

        <div className="hamburger-menu" id="hamburger-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
