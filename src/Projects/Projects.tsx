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

               
            <div className="b">
                <NavBar />
            </div>
            <Ball></Ball>
            <div className="containerProje profundidad">
   

                    <div className="Span2 collision-div" >
                        <div  className="projectsImage1" />
                        <h3 className="h3">Ferreteria</h3>
                        <div className="Containertags">
                            <button className="pokeButton" onClick={() => { redirigir("https://github.com/ImanolBraccciale/Pi-Pokemon") }} />
    
                            <button className="web" onClick={() => { redirigir("https://pf-ferreteria.vercel.app") }} />
                        </div>


                    </div>
                    <div className="Span2 collision-div" >
                        <div className="projectsImage" />
                        <h3 className="h3">Pokedex</h3>
                        <div className="Containertags">
                            <button className="pokeButton" onClick={() => { redirigir("https://github.com/ImanolBraccciale/Pi-Pokemon") }} />
                            <button className="web" onClick={() => { redirigir("https://pokemon-rho-ruddy.vercel.app") }} />
                        </div>

                    </div>
                </div>
           
        </div>
    )
}
export default Projects;
