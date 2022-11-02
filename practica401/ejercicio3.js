"use strict";

let divCoordenadas = document.querySelector('.coordenadas');
let pantalla = window.document;

//con el evento mousemove muestro las coordenadas dinámicamente.
pantalla.addEventListener('mousemove', (event) => {
    let coordenadas = `Coordenada x: ${event.screenX}<br>Coordenada y: ${event.screenY}`;
    divCoordenadas.innerHTML = coordenadas;
});