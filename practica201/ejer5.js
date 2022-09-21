"use strict";

//FACTURAS
let arrayFacturas = [48,124,268];
let valorFacturas = `Facturas -> `;

for (let factura of arrayFacturas) {
   valorFacturas += ` ${factura}€`;
}

console.log(valorFacturas);


//PROPINAS
let propina1 = (48*0.2).toFixed(2);
let propina2 = (124*0.15).toFixed(2);
let propina3 = (268*0.1).toFixed(2);
let valorPropinas = `Propinas -> `;
let arrayPropinas = [propina1,propina2,propina3];

for (let propina of arrayPropinas) {
    valorPropinas += ` ${propina}€`;
}

console.log(valorPropinas);


//CANTIDAD TOTAL
let total1 = (48 + (48*0.2)).toFixed(2);
let total2 = (124 + (124*0.15)).toFixed(2);
let total3 = (268 + (268*0.1)).toFixed(2);
let valorTotal = `Valor total -> `;
let arrayTotal = [total1,total2,total3];

for (let total of arrayTotal) {
    valorTotal += ` ${total}€`;
}

console.log(valorTotal);