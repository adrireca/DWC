"use strict";

let d = window.document;
let botonAnyadir = d.querySelector(".add"); //botón añadir tarea.
let botonAcabar = d.querySelector(".end"); //botón acabar tarea.
let textArea = d.querySelector("#tareas textarea"); //textarea.
let divPendientes = d.getElementById("pendientes"); //div tareas pendientes.
let divAcabadas = d.getElementById('acabadas'); //div tareas acabadas.

//función plantilla de la tarea.
function templateTarea(texto) {
  let tarea = `<div class="tarea">
                            <p>${texto}</p>
                            <p class="botones">
                                <input type="button" value="Borrar" class="del" />
                                <input type="button" value="Acabar" class="end" />
                            </p>
                        </div>`;
    return tarea;
}

//función añadir tarea.
botonAnyadir.addEventListener("click", () => {
  divPendientes.innerHTML += templateTarea(textArea.value);
  textArea.value = "";
  textArea.focus();
});

//función acabar tarea.
botonAcabar.addEventListener("click", () => {
  divAcabadas.innerHTML += templateTarea(textArea.value);
});
