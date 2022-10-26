import React from 'react'
import "./css/portada.css";

export const Portada = (props) => {
  return (
    <React.Fragment>
        <div className='portada'>
            <img src={props.portada} alt="Imagen película."></img>
        </div>
    </React.Fragment>
  )
}
