"use strict";

// window.onload = temporizador;

// let min = 1;
let seg = 5;


function temporizador(segundos) {
    let result = "";
    setInterval(() => {
        if (segundos < 0 || segundos > 59) {
            result = "ERROR. Parámetros no válidos.";

        }
        else {
            console.log(segundos);
            segundos -= 1;
            result = segundos;
        }
    }, 1000);

    return result;
}

temporizador(seg);