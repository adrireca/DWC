"use strict";

function mostrarTitulos(objeto, donde) {
  let titulo = "";
  objeto.map((p, i, a) => {
    titulo += `<li class="titulo">${p.episode_id} - ${p.title}.</li>`;
  });
  donde.innerHTML = titulo;
}

function mostrarDatosPelicula(objeto, donde) {
    let pelicula = "";
    let divPelicula = document.createElement('div');
    divPelicula.classList.add('datosPelicula');
    objeto.map((p, i, a) => {
      pelicula = `<h2>${p.title}.</h2>
                <h3>${p.director}</h3>
                <h4>${p.producer}</h4>
                <time datetime='${p.release_date}'>${p.release_date}</time>
                <p>${p.opening_crawl}</p>`;
    });
    divPelicula.innerHTML += pelicula
    donde.appendChild(divPelicula);
  }

export { mostrarTitulos, mostrarDatosPelicula };