"use strict";

import { generarNumeroAleatorio } from "./biblioteca/biblioteca.js";

let divCheckbox = document.getElementById('divCheckbox');
let check = document.getElementsByName("aleatorios");
let e_fieldset = document.createElement('fieldset');


function generarCheckbox(){
    for(let i=0; i<10; i++){
        let numAleatorio = generarNumeroAleatorio(100,1000);
        let t_checkbox = `
                        <input type="checkbox" id="${i}" name="aleatorios" value="${numAleatorio}" />
                        <label for="preguntaAS">${numAleatorio}</label>
                    `;
        e_fieldset.innerHTML += t_checkbox;
    }
    divCheckbox.append(e_fieldset);
}

let marcarPares = document.getElementById('pares').addEventListener('click', () => {
    for (let i = 0; i < check.length; i++) {
        if(check[i].value %2 === 0){
            check[i].checked = true;
        }
    }
});

let desmarcarTodos = document.getElementById('desmarcar').addEventListener('click', () => {
    for (let i = 0; i < check.length; i++) {
        check[i].checked = false;
    }
});




window.addEventListener('load', generarCheckbox, false);