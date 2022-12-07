import React from 'react';

export const Vehiculos = (props) => {
  return (
    <React.Fragment>
        <h2>Vehiculos</h2>
        <ul>
        {/* Se imprime el listado de vehículos. */}
        {props.length !== 0
          ? props.datos.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="vehiculo"
                  onClick={() => {
                    props.funcion(v.value.url);
                  }}
                >
                  {v.value.name}
                </li>
              );
            })
          : "No se han detectado vehículos en esta API."}
      </ul>
    </React.Fragment>
  )
}
