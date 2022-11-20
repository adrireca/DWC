"use strict";

//muestro los títulos.
function mostrarTitulos(objeto, donde) {
  let titulo = "";
  objeto.map((p, i, a) => {
    //le añado un id consecutivo que posteriormente utilizaré.
    titulo += `<li id=${i + 1} class="titulo">${p.episode_id} - ${p.title}.</li>`;
  });
  donde.innerHTML = titulo;
}

function mostrarDatosPelicula(objeto, donde) {
  let pelicula = "";
  let divPelicula = document.createElement("div");
  divPelicula.classList.add("datosPelicula");
  pelicula = `<h2>${objeto.title}.</h2>
              <h3>${objeto.director}</h3>
              <h4>${objeto.producer}</h4>
              <time datetime='${objeto.release_date}'>${objeto.release_date}</time>
              <p>${objeto.opening_crawl}</p>`;
  divPelicula.innerHTML += pelicula;
  donde.appendChild(divPelicula);
}

export { mostrarTitulos, mostrarDatosPelicula };
