"use strict";

// window.onload = temporizador;

let minutos = 1;
let segundos = 3;


function temporizador(min,seg) {
    let result = "";


    let id = setInterval(() => {

        /*
        for(let i=0; i<arguments.length; i++){

            
            if(isNaN(arguments[i]) || arguments[i] < 0 || arguments[i] > 59){
               console.log("ERROR. Introduce parámetros válidos");
            }else if(arguments[i] == 0){
                console.log("Final");
            }else if(arguments[1] == 0){
                arguments[0]--;
                arguments[1] = 59;
            }
            
        }*/       
        if(isNaN(min) || isNaN(seg) || seg < 0 || min < 0 || seg > 59 || min > 59){
            console.log("ERROR. Introduce parámetros válidos");
        }else if (seg == 0) {
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