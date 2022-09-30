"use strict";

//Constructor de objetos
function constructorObjetos(nombre,apellidos,telefono,email,codigoPostal){
    let curso = {
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        email: email,
        codigoPostal: codigoPostal,
        getServidor: function () {
            let arroba = '@';
            let i = curso.email.indexOf(arroba); //obtengo el índice del @.
            let servidor = curso.email.substring(i+1); //Corto y muestro el string a partir de la posición siguiente al @.
            console.log(servidor);
        }
    };
    return curso;
}

let obj1 = constructorObjetos('Pep','Guardiola','671671671','guardiola@iespacomolla.es','03610');
obj1.getServidor();