import React, { useEffect, useState } from 'react';
import NavBar from "../components/NavBar/NavBar"
import "../assets/Skills.css"
import Eye from '../components/EyeBalls/EyesBalls';

const Skills: React.FC = () => {
    return (
        <div >
            <div className="containerSkills">
 

            <NavBar />
                <div className="containerGhost">
                    <div className="ghost-container">
                        <h3>Backend</h3>
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
                                
                                <li>Nest.js</li>
                                <li>Node.js</li>
                                <li>C#</li>
                                <li>.NET</li>
                          
                                
                                <li>.NET</li>
                            </ul>
                        </div>
                    </div>

                    <div className="containerGhost">
                        <div className="ghost-container">
                            <h3>Fronted</h3>
                            <div className="ghost2">
                                <div className='containerEyes'>
                                    <Eye id={2} />
                            
                                    <Eye id={4} />
                                </div>
                                <ul className='lista'>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Next.js</li>
                                    <li>Bootstrap</li>
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                    
                                </ul>
                                <div>

                                    <div className="pelota2" />
                                    <div className="pelota2" />
                                    <div className="pelota2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="containerGhost">
                        <div className="ghost-container">
                            <h3>Data base & ORM</h3>
                            <div className="ghost3">
                                <div className='containerEyes'>
                                    <Eye id={3} />
                           
                                    <Eye id={5} />
                                </div>
                                <div>

                                    <div className="pelota3" />
                                    <div className="pelota3" />
                                    <div className="pelota3" />
                                </div>
                                <ul className='lista'>
                                <li>Express</li>
                                <li>MongoDb</li>
                                <li>PostgreSQL</li>
                                <li>Sequelize</li>
                                <li>Prisma</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
