"use strict";

/******* FUNCIONES *******/

/*** Declaración de funciones declaración */

/*
function doblar(num1) {
  var res = num1 * 2;
  return `El resultado es ${res}`;
}

console.log(doblar(151));
*/

/*** Parámetros predeterminados */

/* function saludar(persona = "Amigo") {
  return `¡Hola ${persona}!`;
}

console.log(saludar()); */

/*** Funciones como parámetro */

/* function alpha(num, fun) {
  return fun(num);
}

console.log(alpha(50, doblar)); */

/*** Hoisting en funciones */

//Existe pero no es recomedable utilizarlo.

/*** Funciones anónimas (expresión) */

/* const feo = function (num1, num2) {
  return num1 + num2;
};
console.log(typeof feo);
console.log(feo);
console.log(feo(5, 7)); */

//Se usan en la definición de métodos de los objetos.

//Otro uso de la funciones anónimas (como parámetros)

/* var beta = alpha(5, function (num) {
  return num * 2;
});

console.log(`El valor de beta es ${beta}`); */

/*** Constructor de funciones con funciones anónimas*/

/*** Funciones flecha (usadas como callbacks, no como métodos) */

/* function potencia(num) {
  return num ** 3;
} */

/*** El pseudoarray (objeto iterable) arguments */

function sumarB() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumarB(4, 5, 4, 7));

/*
var s = 1;
var idTimeout = setTimeout(() => {
  let idHola = setInterval(() => {
    if (s == 5) {
      clearInterval(idHola);
    }
    console.log("Hola");
    s++;
  }, 1000);
}, 5000);
let idAdion = setInterval("console.log('adiós');", 1000); */
