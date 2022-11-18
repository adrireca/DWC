import React, { useState } from "react";
import "./css/lista_compra.css";

export const Lista_compra = () => {
  let listaCompraInicial = []; //array vacío por defecto.
  let avisoInicial = "No hay productos en la lista.";

  const [listaState, setLista] = useState(listaCompraInicial); //estado para la lista.
  let [rellenarCamposState, setRellenarCampos] = useState(avisoInicial); //estado para el aviso.

  //función donde recojo los datos del form.
  const recogerDatos = (e) => {
    e.preventDefault();

    //creo un objeto y almaceno los datos.
    let objeto = {
      id: new Date().getTime(),
      nombre: `${e.target.nombre.value}`,
      descripcion: `${e.target.descripcion.value}`,
      precio: `${e.target.precio.value}`,
      unidades: `${e.target.unidades.value}`,
    };

    rellenarCamposState = "Rellena todos los campos.";

    //si los inputs no están vacíos, actualizo el estado de la lista añadiendo un objeto al array.
    //Si están vacíos, solo actualizo el aviso.
    objeto.nombre.length >= 1 &&
    objeto.descripcion.length >= 1 &&
    objeto.precio.length >= 1 &&
    objeto.unidades.length >= 1
      ? setLista([...listaState, objeto]) || setRellenarCampos("")
      : setRellenarCampos(rellenarCamposState);
  };

  //elimino toda la lista entera.
  const eliminarTodo = () => {
    setLista([]);
    setRellenarCampos(avisoInicial);
  };

  //elimino un producto (no funciona > no me ha dado tiempo).
  const eliminarProducto = (nuevoProducto) => {
    const nuevosProductos = listaState.filter((producto) => {
      console.log(producto);
      console.log(nuevoProducto);
      return producto !== nuevoProducto;
    });
    setLista(nuevosProductos);
    // e.target.classList.add("eliminar");
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Lista de la compra</h1>
        <div className="row">
          <div className="divFormulario">
            <form onSubmit={recogerDatos}>
              <input name="nombre" className="conEstilo" type="text" placeholder="Nombre"/>
              <input name="descripcion" className="conEstilo" type="text" placeholder="Descripción"/>
              <input name="precio" className="conEstilo" type="text" placeholder="Precio"/>
              <input name="unidades" className="conEstilo" type="text" placeholder="Unidades"/>
              <button type="submit">Añadir</button>
            </form>
          </div>
          <div className="divResultado">
            <button type="button" onClick={eliminarTodo}>Eliminar todo</button>
            <p className="aviso">{rellenarCamposState}</p>
            {listaState.map((obj) => {
              return (
                <div onClick={eliminarProducto}>
                  <ul className="producto">
                  <li key={obj}>Nombre: {obj.nombre}</li>
                  <li key={obj}>Descripción: {obj.descripcion}</li>
                  <li key={obj}>Precio: {obj.precio}</li>
                  <li key={obj}>Uds: {obj.unidades}</li>
                </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
