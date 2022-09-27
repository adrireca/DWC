"use strict";

let cadena = "una cadena cani es como esta";

function imprimirCadena(cad){
    let result = "";

    for(let i=0; i<cad.length; i++){
        result += cad.charAt(i);
    }
    // result = cad.split('').join('');

    return result;
}

console.log(imprimirCadena(cadena));