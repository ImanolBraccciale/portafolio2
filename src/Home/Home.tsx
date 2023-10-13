import React from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/Home.css"
 
const Home: React.FC<{}> = ()=>{
    
    return(
    <div>
        <NavBar/>
        <div className="containerHoome">
        <div className="containerPacman">
            <div className="eclipse"/>
            <div className="poligono"/>
        </div>
        <div className="coinContainer">
     
  
            <p></p>
            <p></p>
        </div>
     </div>
     </div>)
}

export default Home