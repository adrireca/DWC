import React from 'react';

export const Actores = (props) => {
  return (
    <React.Fragment>
        <h2>Actores</h2>
        <ul>
        {/* Se imprime el listado de actores. */}
        {props.length !== 0
          ? props.datos.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="actor"
                  onClick={() => {
                    props.funcion(v.value.url);
                  }}
                >
                  {v.value.name}
                </li>
              );
            })
          : "No se han detectado actores en esta API."}
      </ul>
    </React.Fragment>
  )
}