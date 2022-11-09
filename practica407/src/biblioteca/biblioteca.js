"use strict";

function generarNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

export { generarNumeroAleatorio };