import React, { useState, useEffect } from "react";

const Ball: React.FC = () => {
  const RADIUS = 10;
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  const SPEED = 7;
  const numBalls = 12; // Cantidad de pelotas
  const balls = Array.from({ length: numBalls }, (_, index) => ({
    x: WIDTH / 2,
    y: HEIGHT / 2,
    delta: {
      x: Math.random() * SPEED * 2 - SPEED,
      y: Math.random() * SPEED * 2 - SPEED,
    },
  }));

  useEffect(() => {
    const canvasElements = document.querySelectorAll(".canvas");
    const collisionDivs = document.querySelectorAll(".collision-div");

    const animateBalls = () => {
      canvasElements.forEach((canvas, index) => {
        if (canvas instanceof HTMLCanvasElement) {
          const ctx = canvas.getContext("2d");

          if (!ctx) {
            console.error("Canvas context not supported.");
            return;
          }

          const ball = balls[index];

          const newx = ball.x + ball.delta.x;
          const newy = ball.y + ball.delta.y;

          // Lógica de colisión con elementos "collision-div"
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

          if (newx + RADIUS > WIDTH || newx - RADIUS < 0) {
            ball.delta.x = -ball.delta.x;
          }
          if (newy + RADIUS > HEIGHT || newy - RADIUS < 0) {
            ball.delta.y = -ball.delta.y;
          }

          ball.x = newx;
          ball.y = newy;

          draw(ctx, ball);
        }
      });

      requestAnimationFrame(animateBalls);
    };

    const draw = (ctx: CanvasRenderingContext2D, ball: { x: number, y: number, delta: { x: number, y: number } }) => {
      ctx.fillStyle = "green";
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, RADIUS, 0, Math.PI * 2);
      ctx.fill();
    };

    requestAnimationFrame(animateBalls);
  }, []);

  return (
    <div>
      {Array.from({ length: numBalls }, (_, index) => (
        <canvas
          key={index}
          className="canvas"
          style={{
            position: "fixed",
      
          }}
          width={WIDTH}
          height={HEIGHT}
        ></canvas>
        )  )}
    </div>
  );
};

export default Ball;
