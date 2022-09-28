"use strict";

// window.onload = temporizador;

let minutos = 1;
let segundos = 5;


function temporizador(seg) {
    let result = "";
    setInterval(() => {
        if (seg < 0 || seg > 59) {
            result = "ERROR. Parámetros no válidos.";
        }
        else {
            console.log(seg);
            seg -= 1;
            result = seg;
        }
    }, 1000);

    return result;
}

temporizador(segundos);