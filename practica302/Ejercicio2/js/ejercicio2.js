"use strict";

function generaTabla() {
  //Array bidimensional
  let array = new Array(2);
  array[0] = new Array(100);
  array[1] = new Array(100);
  let fila = 0;
  let tabla = "<table border='0'>";

  // Genero tabla 100x100.
  for (let i = 0; i < 100; i++) {
    tabla += "<tr>";
    if (i > 0) {
      fila += 10;
    }
    for (let j = 0; j < 100; j++) {
      array[0][1] = fila + (j + 1); //Relleno con números consecutivos.
      if(esPrimo(array[0][1])){
        //Si es primo añado la clase 'primo'.
        tabla += `<td class='celda primo'>${array[0][1]}</td>`;
      }else{
        tabla += `<td class='celda'>${array[0][1]}</td>`;
      }
    }
    tabla += "</tr>";
  }

  tabla += "</table>";
  //Inserto en el div 'tabla' la tabla generada.
  document.getElementById("tabla").innerHTML = tabla;
}


//Función rescatada para saber si el número es primo.
function esPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


//Al cargar la página llamo a la función generarTabla.
window.addEventListener("load", generaTabla, false);


//NOTA: no he sabido darle la funcionalidad que pedías para el botón.