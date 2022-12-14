"use strict";

import {
  mostrarDatosPelicula,
  mostrarTitulos,
} from "../biblioteca/biblioteca.js";

window.onload = () => {
  const url = "https://swapi.py4e.com/api/films";
  const listadoPeliculas = document.querySelector(".listadoPeliculas");
  const divInformacion = document.querySelector(".divInformacion");

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
    let urlPelicula = `https://swapi.py4e.com/api/films/${e.target.id}/`;
    //hago un petición de una peli en concreto dependiendo del id del <li> seleccionado.
    fetch(urlPelicula)
    .then((respuesta) => {
      return respuesta.json()
    })
    .then((datos) => {
      //llamo a una función para pintar los datos de esa peli de forma formateada.
      mostrarDatosPelicula(datos, divInformacion);
    })
  });
};
