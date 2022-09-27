"use strict";


//Calculo tabla multiplicar
function multiplicar(cociente){
    let result= "";
    for(let i=0; i<=10; i++){
        let multiplicacion = cociente*i;
        result += `${cociente} x ${i} = ${multiplicacion}\n`;
    }
    return result;
}


//Imprimir tabla multiplicar
function tablas(numVeces,m1){
    let result="";
    let cociente = numVeces;
    for(let i=1; i<numVeces; i++){
        result += `${m1(cociente)}\n`;
        cociente--;
    }
    return result;
}



// console.log(multiplicar(6));
console.log(tablas(8,multiplicar));