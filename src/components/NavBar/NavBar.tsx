import React, { useState } from "react";
import "../../assets/NavBar.css";
import { Link } from "react-router-dom";

const NavBar: React.FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`  ${isMenuOpen ? "container menu-open" : "container"}`}>
        <div className="navButtons">
          <Link to="/" className="navLink collision-div">
            Home
          </Link>
          <Link to="/Skills" className="navLink collision-div">
            Skills
          </Link>
          <Link to="/Projects" className="navLink collision-div">
            Projects
          </Link>
          <Link to="/About" className="navLink collision-div">
            About
          </Link>
        </div>
      </div>
      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavBar;
