"use strict";

//Apunto a todos los párrafos y le añado la clase 'ocultar' con el evento click.
let parrafos = document.querySelectorAll('#parrafos p');
parrafos.forEach((p) => {
    p.addEventListener('click',() => {
        p.classList.add('ocultar');
    });
});


//Apunto a todos los párrafos y le añado la clase 'eliminar' con el evento mouseout.
parrafos.forEach((p) => {  
    p.addEventListener('mouseout',() => {
        p.classList.add('eliminar');
    });
});


////Apunto al botón y le añado la clase 'mostrar' con el evento click.
let boton = document.querySelector('.boton');
boton.addEventListener('click',() => {
    parrafos.forEach((p) => {
        p.classList.add('mostrar');
    })
})