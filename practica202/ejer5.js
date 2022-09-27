"use strict";

let curso = {
    nombre: "2DAW",
    anyo: 2022,
    descripcion: "Ciclo formativo de grado superior",
    alumnado: ["Pepe", "María", "Juan"],
};

function mostrarObjetos(obj) {
    let cursoFormateado = "";
    for (let i in obj) {
        cursoFormateado = `${i}: ${obj[i]}`;
        console.log(cursoFormateado);
    }
}

mostrarObjetos(curso);