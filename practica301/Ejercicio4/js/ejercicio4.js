"use strict";

const d = window.document;

const primer = d.querySelector('.primer');
const segundo = d.querySelector('.segundo');

// console.log(primer);

function insertAfter(primerElemento, segundoElemento){
    if(segundoElemento.nextSibling){ 
        segundoElemento.parentNode.insertBefore(primerElemento,segundoElemento.nextSibling);
    } else { 
        segundoElemento.parentNode.appendChild(primerElemento); 
    }
    
}

insertAfter(primer,segundo);