"use strict";

import {
  mostrarDatosPelicula,
  mostrarTitulos,
  traerDatosActores,
  mostrarCaracteristicasActor,
} from "./biblioteca/biblioteca.js";

window.onload = () => {
  const url = "https://swapi.py4e.com/api/films";
  const listadoPeliculas = document.querySelector(".listadoPeliculas");
  const divInformacion = document.querySelector(".divInformacion");
  const listadoActores = document.querySelector(".listadoActores");
  const caractActor = document.querySelector(".caractActor");
  const informacion = document.querySelector(".informacion");

  //hago una petición a la api.
  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      //llamo a una función para pintar los títulos de forma formateada.
      mostrarTitulos(datos.results, listadoPeliculas);
    });

    //al click de cada <li>.
  listadoPeliculas.addEventListener("click", (e) => {
    //hago un petición de una peli en concreto dependiendo del id del <li> seleccionado.
    fetch(e.target.id)
    .then((respuesta) => {
      return respuesta.json()
    })
    .then((datos) => {
      //llamo a una función para pintar los datos de esa peli y actores de forma formateada.
      mostrarDatosPelicula(datos, informacion);
      traerDatosActores(datos, listadoActores);
    })
  });

  listadoActores.addEventListener('click', (e) => {
    fetch(e.target.id)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      mostrarCaracteristicasActor(datos, caractActor);
    })
  });


};