import React, { useEffect, useState } from 'react';
import "../../assets/eye.css"

const Eye: React.FC<{ id: number }> = ({ id }) => {
    const [irisX, setIrisX] = useState<number>(0);
    const [irisY, setIrisY] = useState<number>(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const eye = document.querySelector(`.eyes-${id}`) as HTMLElement;
            const iris = document.querySelector(`.iris-${id}`) as HTMLElement;
            if (eye && iris) {
                const boundingBox = eye.getBoundingClientRect();
                const eyeCenterX = boundingBox.left + boundingBox.width / 2;
                const eyeCenterY = boundingBox.top + boundingBox.height / 2;

                const deltaX = event.clientX - eyeCenterX;
                const deltaY = event.clientY - eyeCenterY;

                const angle = Math.atan2(deltaY, deltaX);
                const maxRadius = Math.min(boundingBox.width / 2, boundingBox.height / 2);
                const radius = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxRadius);

                const irisSize = boundingBox.width * 0.2;

                // Calcula la posición del iris dentro del ojo
                const newX = Math.cos(angle) * (radius - irisSize * 0.5);
                const newY = Math.sin(angle) * (radius - irisSize * 0.5);

                setIrisX(newX);
                setIrisY(newY);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [id]);

    return (
        <div>
            <div className={`eyes eyes-${id}`}>
                <div className={`iris iris-${id}`} style={{ transform: `translate(${irisX}px, ${irisY}px)` }} />
            </div>

        </div>
    );
}

export default Eye;
