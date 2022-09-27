"use strict";

const alumnos = ["Pepe","María","Juan"];

//Constructor de objetos
function constructorObjetos(nombre,anyo,descripcion,alumnado){
    let curso = {
        nombre: nombre,
        anyo: anyo,
        descripcion: descripcion,
        alumnado: alumnado,
    };
    return curso;
}

console.log(constructorObjetos("2DAW",2022,"Ciclo formativo grados superior",alumnos));