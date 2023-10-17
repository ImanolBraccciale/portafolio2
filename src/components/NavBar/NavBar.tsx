import React from "react";
import "../../assets/NavBar.css";
import { Link } from "react-router-dom";

const NavBar: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="navButtons">
        <Link to="/Skills" className="navLink  collision-div"  >
          Skills
        </Link>
        <Link to="/Projects" className="navLink collision-div"  >
          Projects
        </Link>
        <Link to="/Contact" className="navLink collision-div" >
          Contact
        </Link>
        <Link to="/About" className="navLink collision-div"  >
          About Me
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
