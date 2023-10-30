import React from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/Projects.css"
import Ball from "../components/Ball/Ball"

const Projects: React.FC = () => {
    const redirigir = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    }
    return (
        <div>
            <Ball />
            <div className="b">
                <NavBar />
            </div>
            <div className="containerProje">
                <div className="Span1 collision-div" >
                    <div className="projectsImage" />
                    <h3 className="h3">Pokedex</h3>
                    <div className="Containertags">
                        <button className="pokeButton" onClick={() => { redirigir("https://github.com/ImanolBraccciale/Pi-Pokemon") }} />
                    </div>

                </div>
                <span className="Span2 collision-div" />
            </div>
        </div>
    )
}
export default Projects;
