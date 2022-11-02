"use strict";

let bola = document.querySelector('.divBola img');
bola.setAttribute("draggable",true); //añado el atributo draggable.
let papelera = document.querySelector('.papelera img');

//comenzar a arrastrar.
bola.addEventListener('dragstart', (e) => {
    e.target.src = 'imgs/ejercicio4_4.svg';
});


//reseto las acciones por defecto del navegador.
papelera.addEventListener('dragover', (e) => {
    e.preventDefault();
});


//soltar imagen
papelera.addEventListener('drop', (e) => {
    e.preventDefault();
    e.target.src = 'imgs/ejercicio4_2.svg';
});