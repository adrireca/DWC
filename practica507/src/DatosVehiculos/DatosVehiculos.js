import React from 'react';

export const DatosVehiculos = (props) => {
  return (
    <React.Fragment>
        <h2>Datos vehículos</h2>
        <p>Nombre: {props.datos.name}</p>
        <p>Modelo: {props.datos.model}</p>
        <p>Longitud: {props.datos.length}</p>
        <p>Capacidad: {props.datos.cargo_capacity}</p>
        <p>Velocidad máxima: {props.datos.max_atmosphering_speed}</p>
    </React.Fragment>
  )
}
