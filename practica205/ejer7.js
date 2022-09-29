"use strict";

let arrayDni = [];

const id = setInterval(() => {
  dni = prompt("Introduce un número de DNI sin la letra:");
  if (dni === "-1") {
    clearInterval(id);
  }
}, 3000);

