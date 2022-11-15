import React, { useState } from "react";

export const Lista_compra = () => {
  let listaCompraInicial = {
    id: "",
    nombre: "",
    descripcion: "",
    precio: "",
    unidades: "",
  };

  const [lista, setLista] = useState(listaCompraInicial);

//   const anyadirProducto = () => {
//     setLista({...lista, nombre});
//   };

  const anyadirProducto = (e) => {
    const { name, value } = e.target;
    setLista({...lista, [name]: value});
    console.log(lista);
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
          {<button onClick={anyadirProducto}>Añadir</button> }
        

        <div className="resultado">
            {/* <p>{lista.id}</p>
            <p>{lista.nombre}</p> */}
        </div>
      </div>
    </React.Fragment>
  );
};
