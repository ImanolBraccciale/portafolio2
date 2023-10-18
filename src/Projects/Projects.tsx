import React from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/Projects.css"
import Ball from "../components/Ball/Ball"

const Projects: React.FC = () => {

    return (
        <div>
            <Ball />
            <div className="containerHoome">
                <span className="Span1 collision-div" />
                <NavBar />
            </div>
        </div>
    )
}
export default Projects;
