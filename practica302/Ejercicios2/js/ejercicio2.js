"use strict";

function generaTabla() {
  var tabla = '<table border="0">';
  for (let i = 0; i < 10; i++) {
    tabla += "<tr>";
    for (let j = 1; j < 10; j++) {
      tabla += `<td><input type="text" size="1">${i}${j}</td>`;
    }
    tabla += "</tr>";
  }
  tabla += "</table>";
  document.getElementById("tabla").innerHTML = tabla;
}



function generaNumerosPrimos() {
  console.log("funciona");
}



window.addEventListener("load",generaTabla,false);
