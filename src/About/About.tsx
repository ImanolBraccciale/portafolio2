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

                <div className="cloud" />
                <div className="cloud" style={{ marginLeft: "15vw" }} />
            </div>

            <div className="brick" />
            <div className="containerP">
                <div className="photoAbout" />
                <p className="p">I am Imanol Bracciale, passionate about computer science, games, and challenges.
My interest in programming arose from continuous self-study, which allowed me to understand that the only thing missing for learning is time, and the most important thing needed is effort.
I proudly find this latter aspect in my projects, which I invite you to observe.
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