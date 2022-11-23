"use strict";

//muestro los títulos.
function mostrarTitulos(objeto, donde) {
  let titulo = "";
  objeto.map((p, i, a) => {
    //le añado un id consecutivo que posteriormente utilizaré.
    titulo += `<li id="${p.url}" class="titulo">${p.episode_id} - ${
      p.title
    }.</li>`;
  });
  donde.innerHTML = titulo;
}

//muestro los datos del episodio seleccionado.
function mostrarDatosPelicula(objeto, donde) {
  // donde.classList.add("datosPelicula");
  let pelicula = `
              <h2 class='tituloEpisodio'>${objeto.title}.</h2>
              <h3>${objeto.director}</h3>
              <h4>${objeto.producer}</h4>
              <time datetime='${objeto.release_date}'>${objeto.release_date}</time>
              <p>${objeto.opening_crawl}</p>`;
  donde.innerHTML = pelicula;
}

//función donde pinto los actores del episodio seleccionado.
function traerDatosActores(objeto, donde) {
  let actores = "";

  //recorro el array de actores y obtengo solo 10.
  for(let i=0; i<10; i++){
    fetch(objeto.characters[i])
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        actores += `<li id='${datos.url}'>${datos.name}</li>`;
        donde.innerHTML = actores;
      });
  }

}


function mostrarCaracteristicasActor(obj, donde){
  let caractActor = `<p>Género: ${obj.gender}</p>
                    <p>Altura: ${obj.height}</p>
                    <p>Peso: ${obj.mass}</p>
                    <p>Color de pelo: ${obj.hair_color}</p>
                    <p>Color ojos: ${obj.eye_color}</p>
                    `;
  donde.innerHTML = caractActor;
}

export { mostrarTitulos, mostrarDatosPelicula, traerDatosActores, mostrarCaracteristicasActor };
