"use strict";

let d = window.document;
let botonAnyadir = d.querySelector(".add"); //botón añadir tarea.
let botonAcabar = d.querySelectorAll("#pendientes .end"); //botón acabar tarea.
// let botonBorrar = d.querySelectorAll('#pendientes .del');
let textArea = d.querySelector("#tareas textarea"); //textarea.
let divPendientes = d.getElementById("pendientes"); //div tareas pendientes.
let divAcabadas = d.getElementById("acabadas"); //div tareas acabadas.

//función plantilla de la tarea a añadir.
function templateTareaAnyadir(texto) {
  let divTarea = d.createElement('div');
  divTarea.classList.add('tarea');
  let pTexto = d.createElement('p');
  pTexto.innerText = texto;
  divTarea.appendChild(pTexto);
  let pBotones = d.createElement('p');
  pBotones.classList.add('botones');
  divTarea.appendChild(pBotones);
  let btnBorrar = d.createElement('input');
  btnBorrar.classList.add('del');
  btnBorrar.type = "button";
  btnBorrar.value = 'Borrar';
  pBotones.appendChild(btnBorrar);
  let btnAcabar = d.createElement('input');
  btnAcabar.classList.add('end');
  btnAcabar.type = "button";
  btnAcabar.value = 'Acabar';
  pBotones.append(btnAcabar);

  btnBorrar.onclick = borrarTarea;
  btnAcabar.onclick = acabarTarea;
  // btnBorrar.addEventListener("click",borrarTarea,false);
  // btnAcabar.addEventListener("click",acabarTarea,false);

  
  return divTarea;
}

//función plantilla de la tarea acabada.
// function templateTareaAcabada(texto) {
//   let tarea = `<div class="acabada">
//                             <p>${texto}</p>
//                             <p class="botones">
//                               <input type="button" value="Archivar" class="del" />
//                               <input type="button" value="Volver" class="end" />
//                             </p>
//                           </div>`;
//   return tarea;
// }

//función añadir tarea.
botonAnyadir.onclick = anyadirTarea;

function anyadirTarea(){
  if (textArea.value !== "") {
    //añade la tarea solo si ésta tiene contenido.
    divPendientes.appendChild(templateTareaAnyadir(textArea.value));
    textArea.value = ""; //limpio el textarea.
    textArea.focus(); //foco en el textarea.
  }
}

//función acabar tarea.
function acabarTarea(tarea){
  let divTarea = tarea.target.parentElement.parentElement;
  divTarea.style.visibilty = 'hidden';
  divTarea.classList.add('acabada');
  divTarea.lastChild.firstChild.value = "Archivar";
  divTarea.lastChild.firstChild.nextSibling.value = "Volver";
  divAcabadas.appendChild(divTarea);
  let btnVolver = divTarea.lastChild.firstChild.nextSibling;
  btnVolver.onclick = volverTarea;
  // btnVolver.addEventListener('click',volverTarea,false);
}

//función tarea acabada de vuelta a pendientes.
function volverTarea(tarea){
  let divTarea = tarea.target.parentElement.parentElement;
  divTarea.classList.remove('acabada');
  divTarea.classList.add('tarea');
  divTarea.lastChild.firstChild.value = "Borrar";
  divTarea.lastChild.firstChild.nextSibling.value = "Acabar";
  divPendientes.appendChild(divTarea);
  // let btnArchivar = divTarea.lastChild.firstChild;
  // console.log(btnArchivar);
  // btnArchivar.addEventListener('click',archivarTarea,false);
}

//función archivar tarea.
function archivarTarea(tarea){
  console.log(tarea.target);
}


//función eliminar tarea.
function borrarTarea(tarea){
  tarea.target.parentElement.parentElement.remove();
}