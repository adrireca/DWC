import React, { useRef } from 'react';
import "./css/Botones.css";

export const Botones = (props) => {
  //constantes para utilizar con useRef.
    const importeRecaudacion = useRef(null);
    const listadoActores = useRef(null);

    //función donde añado en el DOM la recaudación mediante props.
    const mostrarRecaudacion = (e) => {
      importeRecaudacion.current.innerHTML = props.recaudacion;
      //intercambio clases css para mostrar y ocultar el contenido.
      if(e.target.nextSibling.nextSibling.classList.value === 'oculto'){
        e.target.nextSibling.nextSibling.classList.add('mostrar');
      }else{
        e.target.nextSibling.nextSibling.classList.value = 'oculto';
      }
    };

    //función donde añado en el DOM los actores mediante props.
    const listarActores = (e) => {
      listadoActores.current.innerHTML = props.actores;
      //intercambio clases css para mostrar y ocultar el contenido.
      if(e.target.nextSibling.nextSibling.classList.value === 'oculto'){
        e.target.nextSibling.nextSibling.classList.add('mostrar');
      }else{
        e.target.nextSibling.nextSibling.classList.value = 'oculto';
      }
    };

  return (
    <React.Fragment>
        <div className='divActoresRecaudacion'>
          <div>
            {/*botón para mostrar actores.*/}
            <button onClick={listarActores} type='button'>Elenco</button>
            <h4>Actores</h4>
            <p className='oculto' ref={listadoActores}></p>
          </div>
          <div>
            {/*botón para mostrar recaudación.*/}
            <button onClick={mostrarRecaudacion} type='button'>Taquilla</button>
            <h4>Recaudación</h4>
            <p className='oculto' ref={importeRecaudacion}></p>     
          </div>  
        </div>
    </React.Fragment>
  )
}
