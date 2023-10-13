import React from "react";
import "../../assets/NavBar.css"

import { Link } from "react-router-dom";
const NavBar:  React.FC<{}>= ()=>{
    return(
      <div className="container">
        <div className="navButtons">

        <button>
            <Link to="/Skills" >Skills</Link>
        </button>
     
        <button>
            <Link to="/Projects" >Projects</Link>
        </button>
        <button>
            <Link to="/Contact" >Contact</Link>
        </button>
        </div>
     </div>
    )
}

export default NavBar