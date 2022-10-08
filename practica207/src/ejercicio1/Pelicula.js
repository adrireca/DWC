import React from "react";

function Pelicula(props) {
  

  return (
    <React.Fragment>
      {/* Componente película. */}
        <div className="pelicula">
        <h1>Película destacada</h1>
          <h2>{props.titulo}</h2>
          <h4>{props.direccion}</h4>
          <img alt="Interestellar" src={props.cartelera}></img>
          <p className="resumen">{props.children}</p>
        </div>
    </React.Fragment>
  );
}

export default Pelicula;
