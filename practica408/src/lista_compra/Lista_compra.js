import React, { useState } from "react";

export const Lista_compra = () => {
  let listaCompraInicial = {
    id: "",
    nombre: "",
    descripcion: "",
    precio: "",
    unidades: "",
  };

  let contador = 0;
  let listaIndividual = [];

  const [lista, setLista] = useState(listaCompraInicial);

  const almacenarProducto = () => {
    listaIndividual[contador] = lista;
    contador++;
    console.log(listaIndividual);
  }

  const anyadirProducto = (e) => {
    const { name, value } = e.target;
    setLista({...lista, [name]: value});
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Lista de la compra</h1>
       
        <label htmlFor="id">Id:</label>
          <input
            name="id"
            className="conEstilo"
            type="text"
            placeholder="Escribe tu id."
            value={lista.id}
            onChange={anyadirProducto}
          />
          <label htmlFor="nombre">Nombre:</label>
          <input
            name="nombre"
            className="conEstilo"
            type="text"
            placeholder="Escribe tu nombre."
            value={lista.nombre}
            onChange={anyadirProducto}
          />
          {<button onClick={almacenarProducto}>Añadir</button> }
        

        <div className="resultado">
            {/* <p>{lista.id}</p>
            <p>{lista.nombre}</p> */}
        </div>
      </div>
    </React.Fragment>
  );
};
