"use strict";

let minutos = 2;
let segundos = 5;


function temporizador(min,seg) {
    let result = "";


    let id = setInterval(() => {

        //controlo los errores de datos de entrada.        
        if(isNaN(min) || isNaN(seg) || min < 0 || seg > 59 || min > 59){
            console.log("ERROR. Introduce parámetros válidos");
        }else if (seg < 0) {
            min--;
            seg = 59;
        }else if(min == 0 && seg == 0){
            min = 0;
            seg = 0;
            clearInterval(id);
        }
        else {
            console.log(`${min}:${seg}`);
            seg -= 1;
            result = seg;
        }
        
    }, 1000);

    return result;
}

temporizador(minutos,segundos);