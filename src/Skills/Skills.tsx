import React, { useEffect, useState } from 'react';
import NavBar from "../components/NavBar/NavBar"
import "../assets/Skills.css"
import Eye from '../components/EyeBalls/EyesBalls';
const Skills: React.FC = () => {

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
                    <div className='containerEyes'>

                        <Eye id={1} />
                        <Eye id={6} />
                    </div>
                    <div>
                        <div className="pelota" />
                        <div className="pelota" />
                        <div className="pelota" />
                    </div>
                    <ul className='lista'>
                        <li>Express</li>
                        <li>Sequelize</li>
                        <li>PostgreSQL</li>
                        <li>React</li>
                        <li> .NET</li>
                    </ul>
                </div>

                <div className="ghost2">
                    <div className='containerEyes'>
                        <Eye id={2} />
                        <div style={{ width: '2vw' }} />
                        <Eye id={4} />

                    </div>
                    <div className="pelota2" />
                    <div className="pelota2" />
                    <div className="pelota2" />
                    <ul className='lista'>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Next.js</li>
                        <li>Bootstrap</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="ghost3">
                    <div className='containerEyes'>
                        <Eye id={3} />
                        <div style={{ width: '2vw' }} />
                        <Eye id={5} />

                    </div>
                    <div className="pelota3" />
                    <div className="pelota3" />
                    <div className="pelota3" />
                    <ul className='lista'>
                        <li>SCRUM</li>
                        <li>Github</li>
                        <li>Figma</li>
                        <li>Trello</li>
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;
