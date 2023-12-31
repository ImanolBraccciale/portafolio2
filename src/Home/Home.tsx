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
            left: 69 + "%"
        }
    }

    return (
        <div className="containerHoome">

            <NavBar />

            <div className="pez">
                <span style={style.span1} />
                <span style={style.span2} />
                <span style={style.span3} />
                <span style={style.span4} />
                <span style={style.span5} />
            </div>
            <div className="column">
                <div className="texto">

                    <h1 className="tittleHome">WELCOME <br />
                        TO MY
                        <br />PORTFOLIO</h1>
                    <p className="p1">
                        I am Imanol Bracciale, a web developer.<br />
                        Through this portfolio, I invite you to explore my work,
                        discover my achievements, and see how my skills
                        and passion translate into tangible results.<br />
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