"use strict";

let mediaJuan = (89 + 120 + 103) / 3;
let mediaMiguel = (116 + 94 + 123) / 3;
let mediaMaria = (97 + 134 + 105) / 3;

//cambio de puntuaciones
// let mediaJuan = (129 + 120 + 103) / 3;
// let mediaMiguel = (116 + 94 + 123) / 3;


console.log(mediaJuan);
console.log(mediaMiguel);
console.log(mediaMaria);


//primera comprobación
if(mediaJuan > mediaMiguel){
    console.log(`Juan tiene mejor media con una puntuación de ${mediaJuan}`);
}else if(mediaMiguel > mediaJuan){
    console.log(`Miguel tiene mejor media con una puntuación de ${mediaMiguel}`);
}else{
    console.log(`Miguel y Juan tienen la misma media con una puntuación de ${mediaMiguel}`);
}


//segunda comprobación con María
if(mediaJuan > mediaMiguel && mediaJuan > mediaMaria){
    console.log(`Juan tiene mejor media con una puntuación de ${mediaJuan}`);
}else if(mediaMiguel > mediaJuan && mediaMiguel > mediaMaria){
    console.log(`Miguel tiene mejor media con una puntuación de ${mediaMiguel}`);
}else if(mediaMaria > mediaJuan && mediaMaria > mediaMiguel){
    console.log(`María tiene mejor media con una puntuación de ${mediaMaria}`);
}else{
    console.log(`Miguel, Juan y María tienen la misma media con una puntuación de ${mediaMiguel}`);
}