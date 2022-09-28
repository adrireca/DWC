"use strict";

var limite = 100000;
let numero = 55;
console.log(numero);


//Compruebo si es primo.
function esPrimo(num){
    for(let i=2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(`Primo -> ${esPrimo(numero)}`);



//compruebo si es capicua
function esCapicua(num){
    let numInvertido = parseInt(num.toString().split("").reverse().join(""));
    return numInvertido === num ? true : false;
}
console.log(`Capicua -> ${esCapicua(numero)}`);



//relleno en array
function primosYcapicuas(){
    let numeros = [];
    for(let i=2; i<=limite; i++){
        if(esPrimo(i) && esCapicua(i)){
            numeros.push(i);
        }
    }
    return numeros;
}

console.log(primosYcapicuas());