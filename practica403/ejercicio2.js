"use strict";

let divResultado = document.getElementById('resultado');
let textArea = document.getElementById('textArea');
let seleccion = document.getElementById("selectAprobar");

let btnParrafo = document.getElementById('btnParrafo').addEventListener('click', () => {
    let parrafo = document.createElement('p');
    parrafo.innerText = textArea.value;
    divResultado.append(parrafo);
    let arrayOpciones = seleccion.options;
    // console.log(arrayOpciones);
    for(let e of arrayOpciones){
        if(e.value == 1){
            console.log('ok');
        }
    };
});

//   seleccion.addEventListener("change", (e) => {
//     let sel = e.target.selectedIndex;
//     console.log(`El valor de la opción seleccionada es ${e.target.options[sel].value} y el texto asociado es ${e.target.options[sel].text}`);
//     //e.target.selectedIndex = 0; // Se cambia el índice seleccionado.
//     },
//     false
//   );