"use strict";

//objeto a insertar
var estudiantes = {
    nombre: "Alfonso",
    apellidos: "Pérez Muñoz",
};


let curso = {
    nombre: "2DAW",
    anyo: 2022,
    descripcion: "Ciclo formativo de grado superior",
    alumnado: ["Pepe", "María", "Juan"],
    matricular: ((estudiantes) => {
        const cursoModificado = Object.assign(curso.alumnado,estudiantes);
        return cursoModificado;
    }),
};

//inserto el objeto estudiantes dentro del array alumnado
curso.matricular(estudiantes);
console.log(curso);