import React, { useState } from "react";

export const Lista_compra = () => {
  let listaCompraInicial = {
    id: "",
    nombre: "",
    descripcion: "",
    precio: "",
    unidades: "",
  };

  const [listaState, setLista] = useState(listaCompraInicial);
  let [rellenarCamposState, setRellenarCampos] = useState(
    "No hay productos en la lista"
  );

  const recogerDatos = (e) => {
    e.preventDefault();
    let target = e.target;
    let nombre = target.nombre.value;
    let descripcion = target.descripcion.value;
    let precio = target.precio.value;
    let unidades = target.unidades.value;
    let listaState = {
      id: new Date().getTime(),
      nombre,
      descripcion,
      precio,
      unidades,
    };
    rellenarCamposState = "Rellena todos los campos";
    setLista(listaState);
    setRellenarCampos(rellenarCamposState);
  };

  // const cambiarDatos = (e) => {
  //   const { name, value } = e.target;
  //   setLista({ ...listaState, [name]: value });
  // };

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
        <div className="resultado">
          {listaState.nombre.length >= 1 &&
          listaState.descripcion.length >= 1 &&
          listaState.precio.length >= 1 &&
          listaState.unidades.length >= 1 ? (
            <ul>
              <li>{listaState.nombre}</li>
              <li>{listaState.descripcion}</li>
              <li>{listaState.precio}</li>
              <li>{listaState.unidades}</li>
            </ul>
          ) : (
            <p>{rellenarCamposState}</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
