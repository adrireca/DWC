import React from "react";

function Pelicula(props) {
  

  return (
    <React.Fragment>
        <div className="pelicula">
          <p><strong>{props.titulo}</strong></p>
          <p>{props.direccion}</p>
          <p><img alt="Interestellar" src={props.cartelera}></img></p>
          <p>{props.children}</p>
        </div>
    </React.Fragment>
  );
}

export default Pelicula;
