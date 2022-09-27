"use strict";

let peliculas = [
    {
        titulo: "Interestellar",
        anyo: 2014,
        puntuacion: 10,
    },
    {
        titulo: "Gladiator",
        anyo: 2000,
        puntuacion: 10,
    },
];


function mostrarObjetosII(obj) {
    let objetoFormateado = "";
    for (let i in obj) {
        objetoFormateado = `Título ${i}: ${obj[i].titulo} (${typeof obj[i].titulo}) -- Año: ${obj[i].anyo} (${typeof obj[i].anyo}) -- Valoración: ${obj[i].puntuacion} (${typeof obj[i].puntuacion})`;
        console.log(objetoFormateado);
    }
}

mostrarObjetosII(peliculas);