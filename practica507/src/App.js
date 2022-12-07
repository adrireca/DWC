import React, { useEffect, useState } from "react";
import { obtenerDatos } from "./Biblioteca/Biblioteca";
import { ListadoPeliculas } from "./ListadoPeliculas/ListadoPeliculas";
import { DatosPelicula } from "./DatosPelicula/DatosPelicula";
import { Actores } from "./Actores/Actores";
import { DatosActores } from "./DatosActores/DatosActores";
import { Vehiculos } from "./Vehiculos/Vehiculos";
import { DatosVehiculos } from "./DatosVehiculos/DatosVehiculos";
import { Naves } from "./Naves/Naves";
import { DatosNaves } from "./DatosNaves/DatosNaves";
import "./App.css";

function App() {
  const url = "https://swapi.py4e.com/api/films";
  //Valor inicial de los estados.
  const valorInicial = [];
  const valorInicial2 = {};
  //Declaro un estado por cada componente.
  const [peliculas, setPeliculas] = useState(valorInicial);
  const [datosPelicula, setDatosPelicula] = useState(valorInicial2);
  const [actores, setActores] = useState(valorInicial);
  const [datosActores, setDatosActores] = useState(valorInicial2);
  const [vehiculos, setVehiculos] = useState(valorInicial);
  const [datosVehiculos, setDatosVehiculos] = useState(valorInicial2);
  const [naves, setNaves] = useState(valorInicial);
  const [datosNaves, setDatosNaves] = useState(valorInicial2);

  //Petición para mostrar el listado de los episodios.
  const mostrarListadoPeliculas = async (origen) => {
    let datos = await obtenerDatos(origen);
    setPeliculas(datos.results);
  };

  //Obtengo los datos de la peli seleccionada y, a su vez, llamo una función.
  const getDatosPelicula = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setDatosPelicula(datos);
      getActores(datos.characters);
      //Al obtener los datos de los actores, limpio los datos que no se deben mostrar.
      setDatosActores(valorInicial2);
      setVehiculos(valorInicial);
      setDatosVehiculos(valorInicial2);
      setNaves(valorInicial);
      setDatosNaves(valorInicial2);
    }
  };

  //Obtengo el nombre de los actores de la peli seleccionada.
  const getActores = async (origen) => {
    //Array de promesas sin cosumir.
    let promesas = origen.map(async (promesa) => {
      return obtenerDatos(promesa);
    });

    //Consumo el array de promesas y actualizo su estado.
    Promise.allSettled(promesas).then((elenco) => {
      setActores(elenco);
    });
  };

  //A partir de ahora, mismo procedimiento que los pasos anteriores
  //para obtener los datos de los actores, vehículos, datos vehículos, naves y datos naves.

  const getDatosActores = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setDatosActores(datos);
      getVehiculos(datos.vehicles);
      getNaves(datos.starships);
      //Al obtener los datos de los actores, limpio los datos que no se deben mostrar.
      setDatosVehiculos(valorInicial2);
      setDatosNaves(valorInicial2);
    }
  };

  const getVehiculos = async (origen) => {
    let promesas = origen.map(async (promesa) => {
      return obtenerDatos(promesa);
    });

    Promise.allSettled(promesas).then((vehiculos) => {
      setVehiculos(vehiculos);
    });
  };

  const getDatosVehiculos = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setDatosVehiculos(datos);
    }
  };

  const getNaves = async (origen) => {
    let promesas = origen.map(async (promesa) => {
      return obtenerDatos(promesa);
    });

    Promise.allSettled(promesas).then((naves) => {
      setNaves(naves);
    });
  };

  const getDatosNaves = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setDatosNaves(datos);
    }
  };

  //Nada más ejecutar la app pinto el listado de pelis.
  useEffect(() => {
    mostrarListadoPeliculas(url);
  }, []);

  return (
    <React.Fragment>
      {/* Estructura de la app donde llamo a los componentes y actualizo sus estado pasándoselos por parámetro. */}
      <div className="wrapper">
        <div className="container">
        <h1>API Star Wars</h1>
          <div className="row">
            <div className="listadoPeliculas">
              <ListadoPeliculas datos={peliculas} funcion={getDatosPelicula} />
            </div>
            <div className="datosPelicula">
              {Object.keys(datosPelicula).length !== 0 ? (
                <DatosPelicula datos={datosPelicula} />
              ) : (
                "No se ha seleccionado ninguna película de la lista."
              )}
            </div>
            <div className="divActores">
              <Actores datos={actores} funcion={getDatosActores} />
            </div>
            <div className="divDatosActores">
              {Object.keys(datosActores).length !== 0 ? (
                <DatosActores datos={datosActores} />
              ) : (
                "No se ha seleccionado ningún actor de la lista."
              )}
            </div>
          </div>
          <div className="row">
            <div className="divVehiculos">
              <Vehiculos datos={vehiculos} funcion={getDatosVehiculos} />
            </div>
            <div className="divDatosVehiculos">
              {Object.keys(datosVehiculos).length !== 0 ? (
                <DatosVehiculos datos={datosVehiculos} />
              ) : (
                "No se ha seleccionado ningún vehículo de la lista."
              )}
            </div>
            <div className="divNaves">
              <Naves datos={naves} funcion={getDatosNaves} />
            </div>
            <div className="divDatosNaves">
              {Object.keys(datosNaves).length !== 0 ? (
                <DatosNaves datos={datosNaves} />
              ) : (
                "No se ha seleccionado ninguna nave de la lista."
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
