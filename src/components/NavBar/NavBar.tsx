import React from "react";
import "../../assets/NavBar.css";
import { Link } from "react-router-dom";

const NavBar: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="navButtons">
        <Link to="/Skills" className="navLink">
          Skills
        </Link>
        <Link to="/Projects" className="navLink">
          Projects
        </Link>
        <Link to="/Contact" className="navLink">
          Contact
        </Link>
        <Link to="/About" className="navLink">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
