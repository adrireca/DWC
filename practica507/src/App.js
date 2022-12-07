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

function App() {
  const url = "https://swapi.py4e.com/api/films";
  const valorInicial = [];
  const valorInicial2 = {};
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

  const getDatosPelicula = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setDatosPelicula(datos);
      getActores(datos.characters);
    }
  };

  const getActores = async (origen) => {
    let promesas = origen.map(async (promesa) => {
      return obtenerDatos(promesa);
    });

    Promise.allSettled(promesas).then((elenco) => {
      setActores(elenco);
    });
  };

  const getDatosActores = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setDatosActores(datos);
      getVehiculos(datos.vehicles);
      getNaves(datos.starships);
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

  useEffect(() => {
    mostrarListadoPeliculas(url);
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="container">
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
