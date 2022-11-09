import React, { useState } from 'react'
import { generarNumeroAleatorio } from "../biblioteca/biblioteca.js";

export const Ejercicio1 = () => {
  let aleatorioInicial = [];
  let [aleatorios, setAleatorio] = useState(aleatorioInicial);

  const generarAleatorio = () => {
    let aleatorio = generarNumeroAleatorio(1,100);
    // console.log(aleatorio);
    setAleatorio([...aleatorios, aleatorio]);
  };

  const eliminarAleatorios = () => {

  }

  return (
    <React.Fragment>
        <button onClick={generarAleatorio}>Generar</button>
        <button onClick={eliminarAleatorios}>Eliminar</button>

        <p>
          {aleatorios.map((al) => {
            return <li key={al}>{al}</li>;
          })}
        </p>
    </React.Fragment>
  )
}
