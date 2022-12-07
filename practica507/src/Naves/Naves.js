import React from 'react';
import "./css/Naves.css";

export const Naves = (props) => {
  return (
    <React.Fragment>
        <h2>Naves</h2>
        <ul>
        {/* Se imprime el listado de naves. */}
        {props.length !== 0
          ? props.datos.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="nave"
                  onClick={() => {
                    props.funcion(v.value.url);
                  }}
                >
                  {v.value.name}
                </li>
              );
            })
          : "No se han detectado naves en esta API."}
      </ul>
    </React.Fragment>
  )
}
