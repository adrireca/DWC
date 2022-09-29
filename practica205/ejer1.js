"use strict";

let cadena = "Una Cadena cani es como esta";

//función imprimir cadena formateada
function imprimirCadena(cad){
    let result = [];

    for(let i=0; i<cad.length; i++){

        //compruebo si es par o impar
        if(i % 2 === 0){
            result[i] = cad[i].toUpperCase();
        }else {
            result[i] = cad[i].toLowerCase();
        }

        //remplazo letras
        if(cad[i] === "C"){
            result[i] = "K";
        }else if(cad[i] === "c"){
            result[i] = "k";
        }


    }

    //uno el array
    result = result.join('');

    //inserto varias h al final de la frase
    let h = 'H';
    result += h.repeat(3);

    return result;
}

console.log(imprimirCadena(cadena));