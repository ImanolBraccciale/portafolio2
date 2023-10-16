import React from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/Projects.css"
import Ball from "../components/Ball/Ball"
const Projects: React.FC = () => {

    return (
        <div className="containerHoome">
            <Ball/>

            <span className="Span1" id="collision-div"/>
            <NavBar />
            
        </div>
    )
}
export default Projects;
            // <span className="Span1">
            // </span>
            // <span className="Span2">
            // </span>