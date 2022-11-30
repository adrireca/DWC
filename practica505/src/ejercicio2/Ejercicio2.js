import React, { useEffect } from 'react';
import { coloresAleatorios } from '../biblioteca/biblioteca';

export const Ejercicio2 = () => {

    //Llamo a la función de la biblioteca.
    const cambiarColor = ((e) => {
        coloresAleatorios(e.target);
    });

    // Dentro del hook, evento a la pantalla y llamo a una función.
    useEffect(() => {
        window.addEventListener('click', cambiarColor);
    }, []);

  return (
    <React.Fragment>
        
    </React.Fragment>
  )
}
