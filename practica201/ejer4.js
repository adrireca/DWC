"use strict";

function factura(nombreProducto="Producto genérico", precio=100, impuesto=21){
    let result;

    if(isNaN(precio) || isNaN(impuesto)){
        result = "ERROR. Parámetros no válidos";
    }else{
        result = `Nombre del producto: ${nombreProducto} -- Precio con impuestos: ${precio+(precio*(impuesto/100))}€`;
    }
    return result;
    
}

console.log(factura("SSD",200,21));