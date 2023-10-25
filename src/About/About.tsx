import React from "react"
import NavBar from "../components/NavBar/NavBar"
 import "../assets/About.css"

 const  About: React.FC<{}> = () => {
    
    return(
        <div className="containerAbout">
            <NavBar/>
            <div className="cloud" style={{ marginLeft: "5vw" }}/>
            <div className="cloud" style={{ marginLeft: "15vw" }}/>
            <div className="cloud" style={{ marginLeft: "75vw" }}/>
            <div className="brick"/>
        </div>
    )
    }
export default About