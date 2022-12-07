import React from 'react';

export const DatosActores = (props) => {

  return (
    <React.Fragment>
        <h2>Datos actores</h2>
        <p>Nombre: {props.datos.name}</p>
        <p>Género: {props.datos.gender}</p>
        <p>Altura: {props.datos.height}</p>
        <p>Peso: {props.datos.mass}</p>
        <p>Color de pelo: {props.datos.hair_color}</p>
        <p>Color de ojos: {props.datos.eye_color}</p>
    </React.Fragment>
  )
}
