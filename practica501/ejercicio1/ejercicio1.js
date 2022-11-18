"use strict";

import { mostrarDatosPelicula, mostrarTitulos } from "../biblioteca/biblioteca.js";

window.onload = () => {
  const url = "https://swapi.py4e.com/api/films";
  const listadoPeliculas = document.querySelector(".listadoPeliculas");
  const divInformacion = document.querySelector(".divInformacion");

  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      mostrarTitulos(datos.results, listadoPeliculas);
    });

  listadoPeliculas.addEventListener("click", (e) => {
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        mostrarDatosPelicula(datos.results, divInformacion);
      });
  });
};
