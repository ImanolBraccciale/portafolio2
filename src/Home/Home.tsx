import React, { useState } from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/Home.css"

const Home: React.FC<{}> = () => {

    const [animationStarted, setAnimationStarted] = useState(false);
    const [visible, setVisible] = useState(false);
    
    const startAnimation = () => {
        setAnimationStarted(true);
        setVisible(true)
    };
 

    return (
        <div>
            <div className="containerHoome">
            <NavBar />
                <div className={`containerPacman ${animationStarted ? "animationStarted" : ""}`} onClick={startAnimation}>
                    <div className="pacman" />
                    <div className="pacman-mouth" />
                </div>
                <div className="coinContainer">

                    <div className={`coin ${animationStarted ? "invisible" : ""}`} />
                    <div className={`coin1 ${animationStarted ? "invisible" : ""}`}/>
                    <div className={`coin2 ${animationStarted ? "invisible" : ""}`}/>
                    <div className={`coin3 ${animationStarted ? "invisible" : ""}`}/>
                    <div className={`coin4 ${animationStarted ? "invisible" : ""}`}/>
 
                </div>
            </div>

        </div>)
}

export default Home