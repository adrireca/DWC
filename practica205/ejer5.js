"use strict";

/*
Crea una función que reciba una letra mayúscula como parámetro y calcule cuantos DNI
de tres cifras (del 48357001 al 48357999) tienen esa letra. Tras esto mostrará el listado de
todos los DNI que tienen esa letra por la consola debidamente formateados de una sola
vez sin usar un array.
*/

const imprimirDni = (letra) => {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let resto = dni % 23;

    console.log(letras[resto]);

}

imprimirDni('D');