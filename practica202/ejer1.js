"use strict";

function sumando(){
    let result = "";
    let suma = 0;
    let args = Array.prototype.slice.call(arguments);

    for(let i=0; i<arguments.length; i++){
        if(isNaN(args[i])){
            result = "ERROR. Introduce números";
        }else if(arguments.length < 2){
            result = "Introduce como mínimo 2 parámetros"
        }else{
            suma += args[i];
            result = `La suma total es ${suma}`;
        }
    }
    return result;

}

console.log(sumando(3));
console.log(sumando(3,2,"fgdg"));
console.log(sumando(3,2));