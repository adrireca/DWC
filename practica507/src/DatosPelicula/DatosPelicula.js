import React from 'react';
import "./css/DatosPelicula.css";

export const DatosPelicula = (props) => {

  return (
    <React.Fragment>
        <h2>Datos Pelicula</h2>
        <h2>{props.datos.title}</h2>
        <h3>{props.datos.director}</h3>
        <h4>{props.datos.producer}</h4>
        <time dateTime='{props.datos.release_date}'>{props.datos.release_date}</time>
        <p>{props.datos.opening_crawl}</p>
    </React.Fragment>
  )
}
