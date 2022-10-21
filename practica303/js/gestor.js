"use strict";

let d = window.document;
let botonAnyadir = d.querySelector(".add"); //botón añadir tarea.
let botonAcabar = d.querySelectorAll("#pendientes .end"); //botón acabar tarea.
let botonBorrar = d.querySelectorAll('#pendientes .del');
let textArea = d.querySelector("#tareas textarea"); //textarea.
let divPendientes = d.getElementById("pendientes"); //div tareas pendientes.
let divAcabadas = d.getElementById("acabadas"); //div tareas acabadas.

//función plantilla de la tarea a añadir.
function templateTareaAnyadir(texto) {
  let tarea = `<div class="tarea">
                            <p>${texto}</p>
                            <p class="botones">
                                <input type="button" value="Borrar" class="del" />
                                <input type="button" value="Acabar" class="end" />
                            </p>
                        </div>`;
  return tarea;
}

//función plantilla de la tarea acabada.
function templateTareaAcabada(texto) {
  let tarea = `<div class="acabada">
                            <p>${texto}</p>
                            <p class="botones">
                              <input type="button" value="Archivar" class="del" />
                              <input type="button" value="Volver" class="end" />
                            </p>
                          </div>`;
  return tarea;
}

//función añadir tarea.
botonAnyadir.addEventListener("click", () => {
  if (textArea.value !== "") {
    //añade la tarea solo si ésta tiene contenido.
    divPendientes.innerHTML += templateTareaAnyadir(textArea.value);
    textArea.value = ""; //limpio el textarea.
    textArea.focus(); //foco en el textarea.
  }
});

//función acabar tarea.
botonAcabar.forEach((btn) => {
  btn.addEventListener('click', () => {
    divAcabadas.innerHTML += templateTareaAcabada(textArea.value);
  });
});


//función eliminar tarea.
botonBorrar.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.parentElement.parentElement.remove();
  });
});
