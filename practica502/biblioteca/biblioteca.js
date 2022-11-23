"use strict";

//muestro los títulos.
function mostrarTitulos(objeto, donde) {
  let titulo = "";
  objeto.map((p, i, a) => {
    //le añado un id consecutivo que posteriormente utilizaré.
    titulo += `<li id=${i + 1} class="titulo">${p.episode_id} - ${
      p.title
    }.</li>`;
  });
  donde.innerHTML = titulo;
}

//muestro los datos del episodio seleccionado.
function mostrarDatosPelicula(objeto, donde) {
  let pelicula = "";
  let divPelicula = document.createElement("div");
  divPelicula.classList.add("datosPelicula");
  pelicula = `<h2 class='tituloInformacion'>Información</h2>
              <h2 class='tituloEpisodio'>${objeto.title}.</h2>
              <h3>${objeto.director}</h3>
              <h4>${objeto.producer}</h4>
              <time datetime='${objeto.release_date}'>${objeto.release_date}</time>
              <p>${objeto.opening_crawl}</p>`;
  divPelicula.innerHTML = pelicula;
  donde.appendChild(divPelicula);
}

//función donde pinto los actores del episodio seleccionado.
function traerDatosActores(objeto, donde) {
  let ul = document.createElement("ul");
  let h2 = document.createElement("h2");
  h2.innerText = 'Actores';
  //recorro el array de actores.
  objeto.characters.map((urlActor) => {
    fetch(urlActor)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        console.log(datos);
        //en un <ul> meto el nombre de todos los actores de forma formateada (en <li>).
        ul.innerHTML += mostrarNombreActores(datos);
         
      });
  });
  donde.appendChild(h2);
  donde.appendChild(ul);
}

//devuelvo el nombre de cada actor de forma formateada.
function mostrarNombreActores(objeto){
  let actores = `<li>${objeto.name}</li>`;
  return actores;
}

export { mostrarTitulos, mostrarDatosPelicula, traerDatosActores };
