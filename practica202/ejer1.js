"use strict";

function sumando(num1, num2){
    let result;
    if(isNaN(num1) || isNaN(num2)){
        console.log("ERROR. Introduce números");
    }else{
        result = num1 + num2;
    }
    return result;
}

console.log(sumando(2,3));