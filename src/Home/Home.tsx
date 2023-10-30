import React, { useState } from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/Home.css"

const Home: React.FC<{}> = () => {

    const [animationStarted, setAnimationStarted] = useState(false);
    const startAnimation = () => {
        setAnimationStarted(true);

    };


    const style = {
        span1: {
            animation: "moveBackground 9s linear infinite",
            left: 10 + "%",

        },
        span5: {
            animation: "moveBackground 4.8s linear infinite",
            left: 24 + "%"
        },
        span4: {
            animation: "moveBackground 11s linear infinite",
            left: 58 + "%"
        },
        span3: {
            animation: "moveBackground 7.3s linear infinite",
            left: 79 + "%"
        },
        span2: {
            animation: "moveBackground 6s linear infinite",
        }
    }

    return (
        <div className="containerHoome">
            <div className="p">
            <NavBar />

            </div>
            <div className="pez">

                <span style={style.span1} />

                <span style={style.span2} />
                <span style={style.span3} />
                <span style={style.span4} />
                <span style={style.span5} />


            </div>
            <div className="column">
                <div className="texto">

                    <h1 className="tittleHome">WELCOME <br/>
                    TO MY 
                    <br/>PORTFOLIO</h1>
                    <p className="p1">
                        Soy Imanol Bracciale, desarrollador web.<br />
                        A través de este portafolio, te invito a explorar mi trabajo,
                        conocer mis logros y descubrir cómo mis habilidades
                        y pasión se traducen en resultados tangibles.<br />
                    </p>

                </div>
                 
            </div>
            <div className="game">

                    <div className={`containerPacman ${animationStarted ? "animationStarted" : ""}`} onClick={startAnimation}>
                        <div className="pacman" />
                        <div className="pacman-mouth" />
                    </div>
                    <div className="coinContainer">

                        <div className={`coin ${animationStarted ? "invisible" : ""}`} />
                        <div className={`coin1 ${animationStarted ? "invisible" : ""}`} />
                        <div className={`coin2 ${animationStarted ? "invisible" : ""}`} />
                        <div className={`coin3 ${animationStarted ? "invisible" : ""}`} />
                        <div className={`coin4 ${animationStarted ? "invisible" : ""}`} />

                    </div>


                </div>
        </div>)
}

export default Home