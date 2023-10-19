import React from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/Skills.css"
import Ball from "../components/Ball/Ball"
function Skills() {

    return (
        <div className="containerHoome">
            <NavBar />
            <div className="containerTittleSkills">
                <h3>Backend</h3>
                <h3>Fronted</h3>
                <h3>Tools</h3>
            </div>

            <div className="containerGhost">
                <div className="ghost1">

                    <div className="eyes">
                        <div />
                    </div>
                    <div className="eyesL">
                        <div />
                    </div>
                    <div>
                        <div className="pelota" />
                        <div className="pelota" />
                        <div className="pelota" />
                    </div>
                </div>

                <div className="ghost2">
                    <div className="eyes">
                        <div />
                    </div>
                    <div className="eyesL">
                        <div />
                    </div>
                    <div className="pelota2" />
                    <div className="pelota2" />
                    <div className="pelota2" />
                </div>
                <div className="ghost3">
                    <div className="eyes">
                        <div />
                    </div>
                    <div className="eyesL">
                        <div />
                    </div>
                    <div className="pelota3" />
                    <div className="pelota3" />
                    <div className="pelota3" />
                </div>
            </div>
        </div>
    )
}
export default Skills