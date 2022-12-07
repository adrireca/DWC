import React from "react";
import "./css/ListadoPeliculas.css";

export const ListadoPeliculas = (props) => {
  return (
    <React.Fragment>
      <h2>Películas</h2>
      <ul>
        {/* Se imprime el listado de peliculas. */}
        {props.datos.length !== 0
          ? props.datos.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="pelicula"
                  onClick={() => {
                    props.funcion(v.url);
                  }}
                >
                  {v.title}
                </li>
              );
            })
          : "No se han detectado películas en esta API."}
      </ul>
    </React.Fragment>
  );
};
