import React, { useEffect, useRef } from "react";

const Ball: React.FC = () => {

  const RADIUS = 4;
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  const SPEED = 2;
  const numBalls = 400; 

  const balls = Array.from({ length: numBalls }, (_, index) => ({
    x: WIDTH / 2,
    y: HEIGHT / 2,
    delta: {
      x: Math.random() * SPEED * 2 - SPEED,
      y: Math.random() * SPEED * 2 - SPEED,
    },
  }));


  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const collisionDivs = document.querySelectorAll(".collision-div");
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found.");
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Canvas context not supported.");
      return;
    }

    const animateBalls = () => {
      // Limpia el canvas en cada fotograma para eliminar el fotograma anterior
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      // Recorre todas las pelotas
      balls.forEach((ball) => {
        const newx = ball.x + ball.delta.x;
        const newy = ball.y + ball.delta.y;

        if (WIDTH > 820) {
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
              ball.delta.x = -ball.delta.x;
            } else {
              ball.delta.y = -ball.delta.y;
            }
          }
        });
      }

        // Lógica de rebote en los bordes del canvas
        if (newx + RADIUS > WIDTH || newx - RADIUS < 0) {
          ball.delta.x = -ball.delta.x;
        }
        if (newy + RADIUS > HEIGHT || newy - RADIUS < 0) {
          ball.delta.y = -ball.delta.y;
        }

        ball.x = newx;
        ball.y = newy;

        // Dibuja la pelota en su nueva posición
        draw(ctx, ball);
      });

      // Solicita una nueva animación en el siguiente fotograma
      requestAnimationFrame(animateBalls);
    };

    // Función para dibujar una pelota en el contexto del canvas
    const draw = (ctx: CanvasRenderingContext2D, ball: { x: number, y: number, delta: { x: number, y: number } }) => {
      ctx.fillStyle = "pink";
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, RADIUS, 0, Math.PI * 2);
      ctx.fill();
    };

    // Inicia la animación llamando a la función animateBalls
    requestAnimationFrame(animateBalls);
  }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez

  return (
    <div>
      {/* Un único elemento <canvas> para todas las pelotas */}
      <canvas
        ref={canvasRef}
        className="canvas"
        style={{
        position:"fixed"
        }}
        width={WIDTH}
        height={HEIGHT}
      ></canvas>
    </div>
  );
};

export default Ball;