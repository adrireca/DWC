import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const Ejercicio1 = () => {
    //Dos estados, uno para la coordenada X y otro para la coordenada Y.
    let [coordenadaX, setCoordenadaX] = useState(0);
    let [coordenadaY, setCoordenadaY] = useState(0);

    //Función donde actualizo los estados.
    const mostrarCoordenadas = ((event) => {
        setCoordenadaX(event.screenX);
        setCoordenadaY(event.screenY);
    });

    //Dentro del hook, evento a la pantalla y llamo a una función.
    useEffect(() => {
        window.addEventListener("mousemove", mostrarCoordenadas);
    }, []);


  return (
    <React.Fragment>
        {/* Pinto las coordenadas. */}
        <div className='container'>
            <p> Coordenada X: {coordenadaX}</p>
            <p> Coordenada Y: {coordenadaY}</p>
        </div>
    </React.Fragment>
  )
}
