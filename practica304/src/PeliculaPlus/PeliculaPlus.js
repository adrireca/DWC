import React from 'react';
import Peliculas from "../Ejercicio2.json";
import { Titulo } from '../Titulo/Titulo';
import { Resumen } from '../Resumen/Resumen';
import { Portada } from '../Portada/Portada';
import "./css/peliculaPlus.css";
import { Botones } from '../Botones/Botones';

export const PeliculaPlus = () => {
    const objetoPeliculas = Peliculas.peliculas;


  return (
    <React.Fragment>
        <h1>Listado de películas</h1>
        {/* Recorro el json de películas y asigno a cada componente su dato correspondiente mediante props. */}
        {objetoPeliculas.map((peli) => {
            return (
                <div key={peli.id}>
                    <Titulo nombre={peli.nombre}></Titulo>
                    <div className='main'>
                        <Portada portada={peli.cartelera}></Portada>
                        <Resumen resumen={peli.resumen}></Resumen>
                    </div>
                    <div className='divBotones'>
                        <Botones recaudacion={peli.recaudacion} actores={peli.actores}></Botones>
                    </div>
                </div>
            )
        })}
    </React.Fragment>
  )
}
