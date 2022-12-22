"use strict";

const productos = (doc) => {
  return ` <div class="divProducto">
                <img src="${doc.data().imagen}" alt="Imagen no disponible."/>
                <h3 class="tituloProducto">${doc.data().nombre}</h3>
                <h3 class="precioProducto">${doc.data().precio}€</h3>
                <p class="pesoProducto">Peso: ${doc.data().peso} kg</p>
                <p class="descripcionProducto">${doc.data().descripcion}</p>
                <div class="btnProductos">
                  <button id="${doc.id}" class="btnEditar btn mb-2" type="button">Editar</button>
                  <button id="${doc.id}" class="btnEliminar btn" type="button">Eliminar</button>
                </div>
            </div>
        `;
};

const cuadroResumen = (totalProductos, media) => {
  return `<p>${totalProductos} productos.</p>
          <p>Precio medio: ${media}€</p>
        `;
};

const borrar = (objetoDOM) => {
  setTimeout(() => {
    objetoDOM.innerHTML = "";
  }, 5000);
};

export { productos, borrar, cuadroResumen };
