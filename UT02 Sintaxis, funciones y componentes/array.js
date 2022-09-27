"use strict";

/***  Objeto inamovible */

const feos = ["Rodrigo", "Juan", "Artura", "Javier"];

/*** Recorrer un objeto (no se modifica pero hay que utilizar map). */

/* const feos2 = feos.map((feo) => {
  console.log(feo);
  return feo;
});

console.log(feos2); */

/*** Añadir un nuevo valor al objeto (uso de spread operator). */

/* const nuevoFeo = "Juan Carlos";
const feos3 = [...feos, nuevoFeo];

console.log(feos3); */

/*** Eliminar un elemento del objeto (filter). */

/* const feos4 = feos3.filter((feo) => {
  return feo !== nuevoFeo;
});

console.log(feos4); */

/***  Actualizar un elemento del objeto */

/* const nuevoValor = "Arturo";
const valorCambiar = "Artura";
const feos5 = feos.map((feo) => {
  if (feo === valorCambiar) {
    return nuevoValor;
  } else {
    return feo;
  }
});

console.log(feos5); */
