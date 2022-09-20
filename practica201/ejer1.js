"use strict";

let masaJuan = 70;
let masaMarcos = 75;
let alturaJuan = 1.70;
let alturaMarcos = 1.75;

let imcMayor = true;
let imcJuan = (masaJuan / Math.pow(alturaJuan,2));
let imcMarcos = (masaMarcos / Math.pow(alturaMarcos,2));
let resultado;

// console.log(imcJuan);
// console.log(imcMarcos);

resultado = `¿Tiene Marcos un IMC mayor que el de Juan? ${imcMayor}`;

if(imcMarcos > imcJuan){
    console.log(resultado);
}else{
    console.log(resultado);
}