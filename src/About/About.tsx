import React from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/About.css"


const About: React.FC<{}> = () => {
    const redirigir = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    }
    return (
        <div className="containerAbout">
            <NavBar />
            <div>

                <div className="cloud"  />
                <div className="cloud" style={{ marginLeft: "15vw" }} />
            </div>

            <div className="brick" />
            <div className="containerP">
            <div className="photoAbout" />
                <p className="p">Soy imanol bracciale, un apasionado de la informatica, los juegos y desafios.
                    Mi interes por la programación surgió con un continuo estudio autodidacta que me permitió entender
                    que para el aprendizaje lo unico que falta es el tiempo y lo que ams se encesita es esfuerzo.
                    Esto ultimo lo encuentro orgullosamente en mis proyectos que te invito a observar.
                </p>
                
            </div>
            <div className="containerButton">

                <button className="button linkedin" onClick={() => { redirigir("https://www.linkedin.com/in/imanol-bracciale-2a5625206/") }} ></button>
                <button className="button gitHUB" onClick={() => { redirigir("https://github.com/ImanolBraccciale") }} ></button>
            </div>



        </div>
    )
}
export default About