"use strict";

import {
  mostrarDatosPelicula,
  mostrarTitulos,
  traerDatosActores,
  mostrarCaracteristicasActor,
  obtenerDatos,
  mostrarVehiculosActor,
  mostrarCaracteristicasVehiculos,
  borradoDivs
} from "./biblioteca/biblioteca.js";

window.onload = () => {
  const url = "https://swapi.py4e.com/api/films";
  const listadoPeliculas = document.querySelector(".listadoPeliculas");
  const listadoActores = document.querySelector(".listadoActores");
  const caracteristica = document.querySelector(".caracteristica");
  const informacion = document.querySelector(".informacion");
  const caractVehiculos = document.querySelector(".caractV");
  const listadoVehiculos = document.querySelector(".listadoVehiculos");

  //Petición para mostrar el listado de los episodios.
  const mostrarListadoPeliculas = async () => {
    let datos = await obtenerDatos(url);
    mostrarTitulos(datos.results, listadoPeliculas);
  };
  mostrarListadoPeliculas();

  //Petición para mostrar la información y 10 actores del episodio elegido.
  listadoPeliculas.addEventListener("click", async (e) => {
    let datos = await obtenerDatos(e.target.id);
    mostrarDatosPelicula(datos, informacion);
    traerDatosActores(datos, listadoActores);
    borradoDivs(caracteristica);
  });

  //Petición para mostrar las características del actor elegido.
  listadoActores.addEventListener('click', async (e) => {
    let datos = await obtenerDatos(e.target.id);
    mostrarCaracteristicasActor(datos, caracteristica);
    mostrarVehiculosActor(datos, listadoVehiculos);
  });

  //Petición para mostrar las características del vehiculo elegido.
  listadoVehiculos.addEventListener('click', async (e) => {
    let datos = await obtenerDatos(e.target.id);
    mostrarCaracteristicasVehiculos(datos, caractVehiculos);
  });

};