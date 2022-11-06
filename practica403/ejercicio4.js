"use strict";

//se ejecuta el contenido al cargar la página
window.onload = () => {
  let provincias = document.getElementById("provincia");
  let valorDefecto = document.querySelector('.valorDefecto');
  valorDefecto.setAttribute('selected','true'); //valor por defecto
  let pueblos = document.getElementById("poblacion");
  let boton = document.getElementById("enviar");
  let poblacion = document.getElementById("poblacion");
  let mensajeConfirmacion = "";
  let divConfirmacion = document.querySelector('.confirmacion');

  provincias.addEventListener(
    "change",
    (e) => {
      //almaceno el índice de cada opción del select.
      let index = provincias.options.selectedIndex;

      //si el valor del option es Alicante
      if (provincias.options[index].value == "Alicante") {
        pueblos.innerHTML = `<option value="noPueblo">Selecciona una poblacion</option>
            <option value="Alicante">Alicante</option>
            <option value="Elche">Elche</option>
            <option value="Petrer">Petrer</option>`;
        //si el valor del option es Valencia
      } else if (provincias.options[index].value == "Valencia") {
        pueblos.innerHTML = `<option value="noPueblo">Selecciona una poblacion</option>
            <option value="Valencia">Valencia</option>
            <option value="Xativa">Xativa</option>
            <option value="Torrent">Torrent</option>`;
        //si el valor del option es Castellón.
      } else if (provincias.options[index].value == "Castellon") {
        pueblos.innerHTML = `<option value="noPueblo">Selecciona una poblacion</option>
            <option value="Castellon">Castellón</option>
            <option value="Oropesa">Oropesa</option>
            <option value="Vinaroz">Vinaroz</option>`;
      }
    },
    false
  );

  boton.addEventListener("click", (e) => {
      var indexProvincia = provincias.options.selectedIndex;
      if (
        provincias.options[indexProvincia].value == "noPueblo" ||
        poblacion.value == "noPueblo"
      ) {
        mensajeConfirmacion = `<p>No seleccionado</p>`;
      } else {
        mensajeConfirmacion = `<p>Selección correcta</p>`;
      }
      divConfirmacion.innerHTML = mensajeConfirmacion;
    },
    false
  );
};
