"use strict";

function multiplo2(numeroVeces, multiplicado){

    let i=0;
    let result = 0;

    while(i<numeroVeces){
        result += multiplicado*2;
        console.log(result);
        i++;
    }
    return result;
}

multiplo2(4,6);