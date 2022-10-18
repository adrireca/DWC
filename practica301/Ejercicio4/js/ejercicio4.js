"use strict";

const d = window.document;

//Identifico los párrafos.
const primer = d.querySelector('.primer');
const segundo = d.querySelector('.segundo');


function insertAfter(primerElemento, segundoElemento){
    if(segundoElemento.nextSibling){ 
        segundoElemento.parentNode.insertBefore(primerElemento,segundoElemento.nextSibling);
    } else { 
        segundoElemento.parentNode.appendChild(primerElemento); 
    }
    
}

insertAfter(primer,segundo);


/*
NOTA: te adjunto dos posibles soluciones porque no entendía muy bien el enunciado, es decir,
no sé muy bien si tengo que cambiar el orden de dos elementos ya pintados en el html, crear uno e insertarlo después de otro elemento ya existente...
En el caso de que fuera algo parecido a la solución 4_1, no sabía como añadir el segundo parámetro en la función (elementoExistente).
*/