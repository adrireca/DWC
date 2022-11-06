"use strict";

let divResultado = document.getElementById("resultado");
let textArea = document.getElementById("textArea");
let seleccion = document.getElementById("selectAprobar");

let btnParrafo = document.getElementById("btnParrafo").addEventListener("click", () => {
    let parrafo = document.createElement("p");
    parrafo.innerText = textArea.value;
    divResultado.append(parrafo);
    let indice = seleccion.options.selectedIndex;
    if (indice == 0) {
      parrafo.setAttribute("class", "formato1");
    } else if (indice == 1) {
      parrafo.setAttribute("class", "formato2");
    } else if (indice == 2) {
      parrafo.setAttribute("class", "formato3");
    }
  });
