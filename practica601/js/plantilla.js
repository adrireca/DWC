"use strict";

// const header = () => {

// };

const productos = (doc) => {
  return ` <div class="divProducto">
                <img src="${doc.data().imagen}" />
                <h3>${doc.data().nombre}</h3>
                <h3>${doc.data().precio}€</h3>
                <p>Peso: ${doc.data().peso}</p>
                <p>${doc.data().descripcion}</p>
            </div>
        `;
};

export { productos };
