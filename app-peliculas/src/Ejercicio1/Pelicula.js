import React from "react";
// import App from "../App";

function Pelicula(props) {
  return (
    <React.Fragment>
        {/* Muestro objeto película recogido del componente "App" */}
        <h1>Películas</h1>
        <div className="container">
          <p>
            <strong>{props.datos.titulo}</strong>
          </p>
          <p>{props.datos.direccion}</p>
          <p>
            <img src={props.datos.cartelera} alt="Interestellar"></img>
          </p>
          {/* Propiedad "resumen" pasado como hijo */}
          <p>{props.children}</p>
        </div>
    </React.Fragment>
  );
}

export default Pelicula;
