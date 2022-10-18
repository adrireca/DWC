//Almaceno document en d.
const d = window.document;

// Número de párrafos de la página.
const parrafos = d.querySelectorAll('p');
const result1 = `Hay ${parrafos.length} párrafos en la página.`;


//Texto del segundo párrafo
const parrafoSegundo = parrafos[1].textContent;
const result2 = `Texto del segundo párrafo -> ${parrafoSegundo}`;


//Número de enlaces de la página
const enlaces = d.querySelectorAll('a');
const result3 = `Hay ${enlaces.length} enlaces en la página.`;


//Dirección del primer enlace.
const primerEnlace = d.querySelector('a').firstChild;
const result4 = `Dirección del primer enlace -> ${primerEnlace.parentElement.href}`;


//Dirección del penúltimo enlace.
const penultimoEnlace = d.getElementById('cite_ref-5').firstChild.href;
const result5 = `Dirección del penúltimo enlace -> ${penultimoEnlace}`;


//Creo un objeto para almacenar todos los resultados anteriores.
const obj = {
    totalPárrafos: result1,
    segundoParrafo: result2,
    totalEnlaces: result3,
    primEnlace: result4,
    penulEnlace: result5,
};


// Recorro el objeto e inserto en el div con id "info" el resultado.
const divInfo = d.getElementById('info');
const hr = document.createElement('hr');
divInfo.append(hr);

for(i in obj){
    const p = document.createElement('p');
    p.append(obj[i]);
    divInfo.appendChild(p);
}
