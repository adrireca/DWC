"use strict";

let datosDiscos = [];
let mensajeConfirmacion = "";
let divDatos = document.querySelector('.divDatos');

function almacenarDatosDiscos(){
    let nombre = document.getElementById('nombre').value;
    let grupo = document.getElementById('grupo').value;
    let anyo = document.getElementById('anyo').value;

    let tipo = document.getElementsByName('musica');
    let valorRadio = "";
    for(let i=0; i<tipo.length; i++){
        if(tipo[i].checked){
            valorRadio = tipo[i].value;
        }
    }

    let localizacion = document.getElementById('localizacion').value;

    let prestado = document.getElementsByName('prestado');
    let valorPrestado = "";
    for(let i=0; i<prestado.length; i++){
        if(prestado[i].checked){
            valorPrestado = prestado[i].value;
        }
    }

    let nuevoDisco = {
        nombre: nombre,
        grupo: grupo,
        anyo: anyo,
        tipo: valorRadio,
        localizacion: localizacion,
        prestado: valorPrestado,
    };

    datosDiscos.push(nuevoDisco);
}

let guardar = document.getElementById('btn');
guardar.addEventListener('click', guardarDatosDiscos, false);
function guardarDatosDiscos(){
    mensajeConfirmacion = `<p id="mensaje">Disco guardado</p>`;
    divDatos.innerHTML = mensajeConfirmacion;
    return almacenarDatosDiscos();
}


let mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', mostrarDiscos, false);
function mostrarDiscos(){
    let discos = datosDiscos;
    let result = "";
    let ul = document.createElement('ul');
    for(let i in discos){
        result = `<li>Nombre: ${discos[i].nombre}</li>
                    <li>Grupo: ${discos[i].grupo}</li>
                    <li>Año: ${discos[i].anyo}</li>
                    <li>Tipo: ${discos[i].tipo}</li>
                    <li>Localización: ${discos[i].localizacion}</li>
                    <li>Prestado: ${discos[i].prestado}</li>
                    <br>`;
            ul.innerHTML += result;
            divDatos.append(ul);
            let mensaje = document.getElementById('mensaje');
            mensaje.innerHTML = "";
    }
    
    console.log(datosDiscos);
}