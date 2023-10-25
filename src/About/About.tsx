import React from "react"
import NavBar from "../components/NavBar/NavBar"
 import "../assets/About.css"


 const  About: React.FC<{}> = () => {
    const redirigir = (url:string) => {
        window.open(  url, "_blank", "noopener,noreferrer");
      }
    return(
        <div className="containerAbout">
            <NavBar/>
            <div className="cloud" style={{ marginLeft: "5vw" }}/>
            <div className="cloud" style={{ marginLeft: "15vw" }}/>
            <div className="cloud" style={{ marginLeft: "75vw" }}/>
            <div className="brick"/>
            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magni enim exercitationem sit itaque, nobis eligendi qui cupiditate, culpa 
            totam debitis ipsam dolor placeat excepturi nihil minus voluptas similique 
            suscipit hic!</p>
            <div className="containerButton">

             <button className="button linkedin" onClick={()=>{redirigir("https://www.linkedin.com/in/imanol-bracciale-2a5625206/")}} ></button>
             <button className="button" onClick={()=>{redirigir("https://github.com/ImanolBraccciale")}} >Github</button>
            </div>
        
           
            
        </div>
    )
    }
export default About