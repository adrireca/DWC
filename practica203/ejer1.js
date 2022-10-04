"use strict";

function dibujarCruz(num){
    return Array(num)
        .fill('#'.repeat(num))
        .join('\n');
}

console.log(dibujarCruz(21));