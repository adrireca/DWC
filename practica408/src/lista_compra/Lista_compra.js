import React, { useState } from "react";

export const Lista_compra = () => {
  let listaCompraInicial = [];

  const [listaState, setLista] = useState(listaCompraInicial);
  let [rellenarCamposState, setRellenarCampos] = useState(
    "No hay productos en la lista"
  );

  const recogerDatos = (e) => {
    e.preventDefault();

    let objeto = {
      id: new Date().getTime(),
      nombre: `${e.target.nombre.value}`,
      descripcion: `${e.target.descripcion.value}`,
      precio: `${e.target.precio.value}`,
      unidades: `${e.target.unidades.value}`,
    };

    rellenarCamposState = "Rellena todos los campos";

    objeto.nombre.length >= 1 &&
    objeto.descripcion.length >= 1 &&
    objeto.precio.length >= 1 &&
    objeto.unidades.length >= 1
      ? setLista([...listaState, objeto])
      : setRellenarCampos(rellenarCamposState);
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Lista de la compra</h1>
        <form onSubmit={recogerDatos}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            name="nombre"
            className="conEstilo"
            type="text"
            placeholder="Escribe tu nombre."
          />
          <label htmlFor="descripcion">Descripción:</label>
          <input
            name="descripcion"
            className="conEstilo"
            type="text"
            placeholder="Escribe tu descripción."
          />
          <label htmlFor="precio">Precio:</label>
          <input
            name="precio"
            className="conEstilo"
            type="text"
            placeholder="Escribe el precio."
          />
          <label htmlFor="unidades">Precio:</label>
          <input
            name="unidades"
            className="conEstilo"
            type="text"
            placeholder="Escribe las unidades."
          />
          <button type="submit">Añadir</button>
        </form>
        <p>{rellenarCamposState}</p>
        <div className="resultado">
          {listaState.map((obj) => {
            return (
              <ul>
                <li key={obj}>{obj.nombre}</li>
                <li key={obj}>{obj.descripcion}</li>
                <li key={obj}>{obj.precio}</li>
                <li key={obj}>{obj.unidades}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
