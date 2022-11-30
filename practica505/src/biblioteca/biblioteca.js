"use strict";

function coloresAleatorios(ventana) {
    let arrayLetras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    let letras = arrayLetras.join(""); //junto el array en un string.
    let color = '#';
    for(let i=0; i<6; i++){ //obtengo 6 elementos del array (cantidad de elementos que forma un color hexadecimal).
        color = color + letras[Math.floor(Math.random() * 16)]; //concateno los valores junto con la #.
    }
    ventana.body.style.background = color; //muestro el color en la pantalla.
}

export { coloresAleatorios };