const elemento = "<p>Nuevo elemento.</p>";

function insertAfter(nuevoElemento) {
    const elementoExistente = document.getElementById("elementoExistente");
    
    elementoExistente.insertAdjacentHTML("afterend", nuevoElemento);
  }


insertAfter(elemento);