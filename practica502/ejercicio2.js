"use strict";

window.onload = () => {
  const divAnimal = document.querySelector(".divAnimal");
  const btnMostrarAnimal = document.querySelector(".btnMostrarAnimal");
  const divCaractAnimal = document.querySelector('.divCaractAnimal');

  //al evento click del botón hago una petición a la api.
  btnMostrarAnimal.addEventListener("click", (e) => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        //llamo a dos funciones a las cuales les paso los datos de la api y cuya función es de pintar esos datos.
        mostrarAnimal(datos, divAnimal);
        mostrarCaracteristicas(datos, divCaractAnimal);
      });
  });

  //pinto el nombre y la imagen del animal.
  function mostrarAnimal(obj, donde) {
    let animal = `<h2 class='text-center mb-4 text-uppercase'>${obj.name}</h2>
                <img class='imagen' src='${obj.image_link}' alt='Imagen no disponible'/>
                `;
    donde.innerHTML = animal;
  }

  //muestro sus características.
  function mostrarCaracteristicas(obj, donde){
    let caracteristicas = `<h2 class='text-center mb-4 text-uppercase'>Características</h2>
                            <p><span>Tipo:</span> ${obj.animal_type}</p>
                            <p><span>Dieta:</span> ${obj.diet}</p>
                            <p><span>Tiempo activo:</span> ${obj.active_time}</p>
                            <p><span>Hábitat:</span> ${obj.habitat}</p>
                            <p><span>rango geográfico:</span> ${obj.geo_range}</p>
                        `;
    donde.innerHTML = caracteristicas;
  }

};
