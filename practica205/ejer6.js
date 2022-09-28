"use strict";

let numero = 5;


function esPrimo(num){
    for(let i=2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
// console.log(esPrimo(numero));



function esPalindromo(){
    
}



function primosYpalindromos(){
    let numeros = [];
    for(let i=2; i<=100; i++){
        if(esPrimo(i)){
            numeros.push(i);
        }
    }
    return numeros;
}

console.log(primosYpalindromos());