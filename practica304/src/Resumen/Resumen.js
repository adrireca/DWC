import React from 'react';
import "./css/resumen.css";

export const Resumen = (props) => {
  return (
    <React.Fragment>
      <p className='resumen'>{props.resumen}</p>
    </React.Fragment>
  )
}
