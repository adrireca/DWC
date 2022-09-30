"use strict";

//imprimir dni
const imprimirDni = (letra) => {
    let inicio = 48357001;
    let final = 48357999;
    let resto = 0;
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    for(let i=inicio; i<final; i++){
        resto = i % 23;
        
        //Muestro el dni si coincide la letra del array que recorro con la letra que introduzco por parámetro.
        if(letras[resto] === letra){
            console.log(`${i}${letra}`);
        }
    }
    

}

imprimirDni('D');