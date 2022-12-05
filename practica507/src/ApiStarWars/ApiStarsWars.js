import React, { useEffect, useState } from 'react';
import { obtenerDatos } from '../Biblioteca/Biblioteca';
import { ListadoPeliculas } from '../ListadoPeliculas/ListadoPeliculas';
import { DatosPelicula } from '../DatosPelicula/DatosPelicula';
import { Actores } from '../Actores/Actores';

export const ApiStarsWars = () => {
  const url = "https://swapi.py4e.com/api/films";
  const valorInicial = [];
  const peliculaInicial = {};
  const actoresInicial = [];
  const [peliculas, setPeliculas] = useState(valorInicial);
  const [datosPelicula, setDatosPelicula] = useState(peliculaInicial);
  const [actores, setActores] = useState(actoresInicial);

  //Petición para mostrar el listado de los episodios.
  const mostrarListadoPeliculas = async (origen) => {
    let datos = await obtenerDatos(origen);
    setPeliculas(datos.results);
    
  };

  const getDatosPelicula = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setDatosPelicula(datos);
      getActores(datos.characters);
    }
  };

  const getActores = async (origen) => {
    for(let i=0; i<10; i++){
      let datos = await obtenerDatos(origen[i]);
      console.log(datos);
      setActores(datos);
    }
  };

  useEffect(() => {
    mostrarListadoPeliculas(url);
  }, []);

  return (
    <React.Fragment>
      <div className='wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='listadoPeliculas'>
              <ListadoPeliculas datos={peliculas} funcion={getDatosPelicula}/>
            </div>
            <div className='datosPelicula'>
            {Object.keys(datosPelicula).length !== 0 ? (
              <DatosPelicula datos={datosPelicula}/>
            ) : (
              "No se ha seleccionado ninguna película de la lista."
            )}
            </div>
            <div className='divActores'>
              <Actores datos={actores} funcion={getActores}/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
