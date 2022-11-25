"use strict";

const obtenerDatos = (url) => {
  // Obtiene datos de una API y los transforma a JSON.
  return (
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        return datos;
      })
      // Si se produce un error se devuelve un mensaje.
      .catch(() => {
        return new Error("Ha habido un error.");
      })
  );
};

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
  let caracteristica = `<p>Nombre: ${obj.name}</p>
                    <p>Género: ${obj.gender}</p>
                    <p>Altura: ${obj.height}</p>
                    <p>Peso: ${obj.mass}</p>
                    <p>Color de pelo: ${obj.hair_color}</p>
                    <p>Color ojos: ${obj.eye_color}</p>
                    `;
  donde.innerHTML = caracteristica;
}

const mostrarVehiculosActor = async (obj, donde) => {
  let vehiculos = "";
  obj.vehicles.map(async (v) => {
    let datos = await obtenerDatos(v);
    vehiculos += `<li id="${datos.url}">${datos.name}</li>`;
    donde.innerHTML = vehiculos;
  });
}

const mostrarCaracteristicasVehiculos = async (obj, donde) => {
  let caracterisiticas = `<p>Nombre: ${obj.name}</p>
                          <p>Modelo: ${obj.model}</p>
                          <p>Longitud: ${obj.length}</p>
                          <p>Capacidad: ${obj.cargo_capacity}</p>
                          <p>Velocidad máxima: ${obj.max_atmosphering_speed}</p>
                          `;
  donde.innerHTML = caracterisiticas;
};

export {mostrarCaracteristicasVehiculos, mostrarVehiculosActor, obtenerDatos ,mostrarTitulos, mostrarDatosPelicula, traerDatosActores, mostrarCaracteristicasActor };
