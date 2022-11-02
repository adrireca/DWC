"use strict";

let btnComenzar = document.querySelector('.btnComenzar');
let btnParar = document.querySelector('.btnParar');
let divSaludar = document.querySelector('.divSaludar');
let id;

//al click en el botón comenzar inicio un interval / 2s.
btnComenzar.addEventListener('click', () => {
    id = setInterval(() => {
        //en un div añado un h1 junto con un texto, ambos creados dinámicamente.
        let h1 = document.createElement('h1');
        h1.innerHTML = '¡Hola Feo!';
        divSaludar.append(h1);
    },2000);
});

//paro el interval con el click del botón parar.
btnParar.addEventListener('click', () => {
    clearInterval(id);
});