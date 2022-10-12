//Almaceno document en d.
const d = window.document;

// Número de párrafos de la página.
const parrafos = d.querySelectorAll('p');
console.log(`Hay ${parrafos.length} párrafos en la página.`);


//Texto del segundo párrafo
console.log(`Texto del segundo párrafo -> ${parrafos[1].textContent}`);


//Número de enlaces de la página
const enlaces = d.querySelectorAll('a');
console.log(`Hay ${enlaces.length} enlaces en la página.`);


//Dirección del primer enlace.
const primerEnlace = d.querySelector('a').firstChild;
console.log(`Dirección del primer enlace -> ${primerEnlace.parentElement.href}`);


//Dirección del penúltimo enlace.
const penultimoEnlace = d.getElementById('cite_ref-5').firstChild.href;
console.log(`Dirección del penúltimo enlace -> ${penultimoEnlace}`);


// El texto lo inserto en el div con id "info".
const divInfo = d.getElementById('info');
const nuevosParrafos = d.createElement('p');
parrafos.forEach((p) => {
    divInfo.appendChild(p);
})