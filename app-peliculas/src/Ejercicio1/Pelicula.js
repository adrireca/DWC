import React from "react";

function Pelicula(props) {

    return (
      <React.Fragment>
          <p><strong>{props.datos.titulo}</strong></p>
          <p>{props.datos.direccion}</p>
          <p><img src={props.datos.cartelera} alt="Interestellar"></img></p>
          <p>{props.datos.resumen}</p>
          <p>{props.children}</p>

      </React.Fragment>
    );
  }
  
  export default Pelicula;