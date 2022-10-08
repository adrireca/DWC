import React from "react";

function Pelicula(props) {
  

  return (
    <React.Fragment>
      {/* Componente película. */}
        <div className="pelicula">
          <h1>Película</h1>
          <p><strong>{props.titulo}</strong></p>
          <p>{props.direccion}</p>
          <p><img alt="Interestellar" src={props.cartelera}></img></p>
          <p>{props.children}</p> {/* Paso resumen como children. */}
        </div>
    </React.Fragment>
  );
}

export default Pelicula;
