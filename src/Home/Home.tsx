import React from "react"
import NavBar from "../components/NavBar/NavBar"
import "../assets/Home.css"

const Home: React.FC<{}> = () => {

    return (
        <div>
            <NavBar />
            <div className="containerHoome">
                <div className="containerPacman">
                    <div className="eclipse" />
                    <div className="poligono" />
                </div>
                <p>
                    Hola a todos!
                    Soy Imanol Bracciale, desarrollador de páginas web, y estoy emocionado de compartir mi portafolio contigo hoy.
                    Gracias por ingresar a mi portafolio para conocer mi trabajo y experiencia.
                </p>
                <div className="Coins" />

                <p></p>

            </div>

        </div>)
}

export default Home