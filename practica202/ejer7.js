"use strict";

let alumnado = {
    id: 1,
    nombre: "Adrián",
    apellidos: "Reyes Calero",
    aficiones: ["deporte","viajar","programar"],
    notas: {
        primera: 10,
        segunda: 10,
        tercera: 10,
    },
};

// Cálculo de la nota media
function calcularMedia(obj){
    let result = "";
    for(let i in obj){
        result = `La nota media es ${(obj.notas.primera + obj.notas.segunda + obj.notas.tercera)/3}`;
    }
    return result;
}

console.log(calcularMedia(alumnado));


//Mostrar aficiones
function imprimirAficiones(obj){
    let result = "";
    for(let i in obj){
        result = `Las aficiones del alumno son ${obj.aficiones}`;
    }
    return result;
}

console.log(imprimirAficiones(alumnado));


//Mostrar los datos completos del alumno
function imprimirInforme(obj){
    let result = "";
    console.log("Informe completo del alumno");
    for(let i in obj){
        result = `ID: ${obj.id}\nNombre: ${obj.nombre}\nApellidos: ${obj.apellidos}\nAficiones: ${obj.aficiones}\nNotas:\n1º Ev: ${obj.notas.primera}\n2º Ev: ${obj.notas.segunda}\n3º Ev: ${obj.notas.tercera}`;
    }
    return result;
}

console.log(imprimirInforme(alumnado));