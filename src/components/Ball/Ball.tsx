import React, { useState, useEffect } from "react";

const Ball: React.FC = () => {
    //tamaño y velocidad de la pelota, junto con tamaño maximo de la ventana
  const RADIUS = 10;
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  const SPEED = 7;
//iniciara en el medio de la pantalla
  const [coord, setCoord] = useState({ x: WIDTH / 2, y: HEIGHT / 2 });
  //tendra diferentes velocidades
  const [delta, setDelta] = useState({
    x: Math.random() * SPEED * 2 - SPEED,
    y: Math.random() * SPEED * 2 - SPEED,
  });

  useEffect(() => {
    //se usara para trabar con la etiqueta canvas
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Canvas context not supported.");
      return;
    }
    //logica de rebote, dibujo de pelota y el rebote en divs
    const tick = () => {
        //en cada
      const newx = coord.x + delta.x;
      const newy = coord.y + delta.y;
    //idemtifica la etiqueta que tendra que colisionar      
    const collisionDivs = document.querySelectorAll(".collision-div");
      collisionDivs.forEach((collisionDiv) => {
        const rect = collisionDiv.getBoundingClientRect();
  
        if (
          newx + RADIUS > rect.left &&
          newx - RADIUS < rect.right &&
          newy + RADIUS > rect.top &&
          newy - RADIUS < rect.bottom
        ) {
          const overlapX = Math.min(
            Math.abs(newx + RADIUS - rect.left),
            Math.abs(newx - RADIUS - rect.right)
          );
          const overlapY = Math.min(
            Math.abs(newy + RADIUS - rect.top),
            Math.abs(newy - RADIUS - rect.bottom)
          );
  
          if (overlapX < overlapY) {
            delta.x = -delta.x;
          } else {
            delta.y = -delta.y;
          }
        }
      });
      //rebote en los bordes del navegador

      if (newx + RADIUS > WIDTH || newx - RADIUS < 0) {
        delta.x = -delta.x;
      }
      if (newy + RADIUS > HEIGHT || newy - RADIUS < 0) {
        delta.y = -delta.y;
      }

      setCoord({ x: newx, y: newy });
      //se dibuja la pe
      requestAnimationFrame(draw);
    };

    const draw = () => {
      ctx.fillStyle = "white";
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.beginPath();
      ctx.arc(coord.x, coord.y, RADIUS, 0, Math.PI * 2);
      ctx.fill();
    };

    requestAnimationFrame(tick);
  }, [coord, delta]);

  return (
   <div>

    <canvas
      id="canvas"
      style={{
        position: "fixed",
      }}
      width={WIDTH}
      height={HEIGHT}
      ></canvas>
    <canvas
      id="canvas"
      style={{
        position: "fixed",
      }}
      width={WIDTH}
      height={HEIGHT}
      ></canvas>
    </div>
  );
};

export default Ball;
