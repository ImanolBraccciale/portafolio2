import React, { useEffect, useState } from 'react';
import "../../assets/eye.css"

const Eye: React.FC<{ id: number }> = ({ id }) => {
    const [irisX, setIrisX] = useState<number>(0);
    const [irisY, setIrisY] = useState<number>(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            //caca eye e iris sera omdeémdoemte por su id
            const eye = document.querySelector(`.eyes-${id}`) as HTMLElement;
            const iris = document.querySelector(`.iris-${id}`) as HTMLElement;

            if (eye && iris) {
                //saco las dimensiones del contenedor ojo
                const boundingBox = eye.getBoundingClientRect();
                //para posicionar las bolas en el medio
                const eyeCenterX = boundingBox.left + boundingBox.width / 2;
                const eyeCenterY = boundingBox.top + boundingBox.height / 2;

                const deltaX = event.clientX - eyeCenterX;
                const deltaY = event.clientY - eyeCenterY;
                    //retorna el angulo entre el nouse y el centro del iris
                const angle = Math.atan2(deltaY, deltaX);
                const maxRadius = Math.min(boundingBox.width / 2, boundingBox.height / 2);
                //se utiliza pitagoras para sacar la distancia entre dos puntos con su hipotenusa y el maxradius
                //hace que no se pase el iris
                const radius = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxRadius);

                const irisSize = boundingBox.width * 0.2;

            
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
