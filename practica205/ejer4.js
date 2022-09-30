"use strict";

setTimeout(() => {
    let fechaFormateada = "";
    let date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth();
    let anyo = date.getFullYear();
    let hora = date.getHours();
    let formatoMes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    fechaFormateada = `Estamos a ${dia} de ${formatoMes[mes]} del ${anyo}, ${hora}`;
    console.log(fechaFormateada);
},3000);