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
    matricular: ( function (estudiantes) {
        const cursoModificado = curso.alumnado.push(`${estudiantes.nombre} ${estudiantes.apellidos}`);
        return cursoModificado;
    }),
};

//inserto el objeto estudiantes dentro del array alumnado
curso.matricular(estudiantes);
console.log(curso);