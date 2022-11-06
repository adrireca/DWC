"use strict";

let d = window.document;
let botonAnyadir = d.querySelector(".add"); //botón añadir tarea.
let botonAcabar = d.querySelectorAll("#pendientes .end"); //botón acabar tarea.
let textArea = d.querySelector("#tareas textarea"); //textarea.
let divPendientes = d.getElementById("pendientes"); //div tareas pendientes.
let divAcabadas = d.getElementById("acabadas"); //div tareas acabadas.
let btnMostrar = d.querySelector('.sho'); //botón mostrar.
let tareaArrastrable;


//elimino las tareas por defecto.
divPendientes.children[1].remove();
divPendientes.children[1].remove();
divAcabadas.children[1].remove();


//evento click llamo a funciones.
botonAnyadir.onclick = anyadirTarea;
btnMostrar.onclick = mostrarTareasArchivadas;
  

//función plantilla de la tarea a añadir.
function templateTareaAnyadir(texto) {
  let divTarea = d.createElement('div');
  divTarea.classList.add('tarea');

  let templateTarea = `
                    <p>${texto}</p>
                    <p class="botones">
                        <input onclick="borrarTarea(this)" type="button" value="Borrar" class="del" />
                        <input onclick="acabarTarea(this)" type="button" value="Acabar" class="end" />
                    </p>
                  `;
  divTarea.innerHTML = templateTarea;
  
  return divTarea;
}


//función añadir tarea.
function anyadirTarea(e){
  let texto = e.target.parentElement.firstElementChild.value;
  let textArea = e.target.parentElement.firstElementChild;
  let divTarea = templateTareaAnyadir(texto);

  //
  divTarea.setAttribute("draggable",true);

  if (texto !== "") {
    //añade la tarea solo si ésta tiene contenido.
    divPendientes.append(divTarea);
    textArea.value = ""; //limpio el textarea.
    textArea.focus(); //foco en el textarea.
  }

}



//función acabar tarea.
function acabarTarea(e){
  let divTarea = e.parentElement.parentElement;
  let texto = divTarea.firstElementChild.innerHTML;
  divTarea.style.visibilty = 'hidden';
  divTarea.classList.add('acabada');
  let templateTarea = `
                    <p>${texto}</p>
                    <p class="botones">
                        <input onclick="archivarTarea(this)" type="button" value="Archivar" class="del" />
                        <input onclick="volverTarea(this)" type="button" value="Volver" class="end" />
                    </p>
                  `;
  divTarea.innerHTML = templateTarea;
  divAcabadas.append(divTarea);

}



//función tarea acabada de vuelta a pendientes.
function volverTarea(e){
  let divTarea = e.parentElement.parentElement;
  let texto = divTarea.firstElementChild.innerHTML;
  divTarea.classList.add('tarea');
  divTarea.classList.remove('acabada');
  let divBotones = `
                    <p>${texto}</p>
                    <p class="botones">
                        <input onclick="borrarTarea(this)" type="button" value="Borrar" class="del" />
                        <input onclick="acabarTarea(this)" type="button" value="Acabar" class="end" />
                    </p>
                  `;
  divTarea.innerHTML = divBotones;
  divPendientes.append(divTarea);

}


//función archivar tarea.
function archivarTarea(tarea){
  let divTarea = tarea.parentElement.parentElement;
  divTarea.classList.add('oculto');
  divTarea.classList.remove('acabada');

}


//muestro las tareas archivadas.
function mostrarTareasArchivadas(){
  let oculto = d.querySelectorAll('.oculto');
  //recorro todos los elementos con clase 'oculto'.
  oculto.forEach((tarea) => {
    tarea.classList.remove("oculto"); //elimino oculto.
    tarea.classList.add("acabada"); //añado acabada.
  });
}


//función eliminar tarea.
function borrarTarea(tarea){
  tarea.parentElement.parentElement.remove();
}


//tarea arrastrable.
document.addEventListener('dragstart', (e) => {
  tareaArrastrable = e.target;
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();
});

document.addEventListener('drop', (e) => {
  e.preventDefault();
  //si entra en el div acabadas, le añado la clase acabada.
  if(e.target.id === 'acabadas'){
    tareaArrastrable.classList = 'acabada';
    let textoDinamico = tareaArrastrable.innerText;
    tareaArrastrable.innerHTML = `
                            <p>${textoDinamico}</p>
                            <p class="botones">
                                <input onclick="archivarTarea(this)" type="button" value="Archivar" class="del" />
                                <input onclick="volverTarea(this)" type="button" value="Volver" class="end" />
                            </p>
                                `;
    divAcabadas.style.opacity = "1";
    //si entra en el div pendientes, le añado la clase tarea.
  }else if(e.target.id === 'pendientes'){
    tareaArrastrable.classList = 'tarea';
    let textoDinamico = tareaArrastrable.innerText;
    tareaArrastrable.innerHTML = `
                            <p>${textoDinamico}</p>
                            <p class="botones">
                              <input onclick="borrarTarea(this)" type="button" value="Borrar" class="del" />
                              <input onclick="acabarTarea(this)" type="button" value="Acabar" class="end" />
                            </p>
                                `;
    divPendientes.style.opacity = "1";
  }
  e.target.appendChild(tareaArrastrable);
});

//estilos al arrastrar la tarea en los contenedores.
divAcabadas.addEventListener("dragenter", (e) => {
  e.preventDefault();
  e.target.style.opacity = ".5";
});

divAcabadas.addEventListener("dragleave", (e) => {
  e.preventDefault();
  e.target.style.opacity = "1";
});

divPendientes.addEventListener("dragenter", (e) => {
  e.preventDefault();
  e.target.style.opacity = ".5";
});

divPendientes.addEventListener("dragleave", (e) => {
  e.preventDefault();
  e.target.style.opacity = "1";
});