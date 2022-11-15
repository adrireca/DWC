import React, { useState } from 'react'
import { generarNumeroAleatorio } from "../biblioteca/biblioteca.js";
import "./css/ejercicio1.css";

export const Ejercicio1 = () => {
  let aleatorioInicial = [];
  let [aleatorios, setAleatorio] = useState(aleatorioInicial);

  //genero número aleatorio.
  const generarAleatorio = () => {
    let aleatorio = generarNumeroAleatorio(1,100);
    let existe = false;
    for(let i=0; i<aleatorios.length; i++){
      //si existe en el array aleatorios genero un nuevo número.
      if(aleatorios[i] === aleatorio){
        aleatorio = generarNumeroAleatorio(1,100);
        existe = true;
        break;
      }
    }
    //si no existe lo almaceno en aleatorios y actualizo el estado.
    if(!existe){
      setAleatorio([...aleatorios, aleatorio]);
    }
  };

  //elimino toda la lista de aleatorios.
  const eliminarAleatorios = () => {
    aleatorios = [];
    setAleatorio(aleatorios);
  }

  //elimino el aleatorio especifico clicado añadiendo una clase (display='none').
  const eliminarAleatorio = (e) => {
    e.target.classList.add('eliminar');
  }

  return (
    <React.Fragment>
        <button onClick={generarAleatorio}>Generar</button>
        <button onClick={eliminarAleatorios}>Eliminar</button>

        <p>
          {aleatorios.map((al) => {
            return <li onClick={eliminarAleatorio} key={al}>{al}</li>;
          })}
        </p>
    </React.Fragment>
  )
}
