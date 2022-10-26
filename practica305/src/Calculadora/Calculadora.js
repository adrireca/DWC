import React from 'react';
// import { sumar, restar, multiplicar, dividir } from '../Bibliotecas/Calculadora';
import "./css/calculadora.css";
import { useRef } from "react";

export const Calculadora = () => {

  const referencia = useRef(null);
  // const [numOne, setNumero] = useState('');
  

  const introducirNumero = (e) => {

    console.log(e.target.id);
    referencia.current.value += e.target.id;
  }



  return (
    <React.Fragment>
        <div className='container'>
          <div className='grid'>
            <div className='celda display'>
              <input ref={referencia} type="text" placeholder='0'></input>
            </div>
            <div className='celda C'>
              <button type='button'>C</button>
            </div>
            <div className='celda'>
              <button type='button'>%</button>
            </div>
            <div className='celda'>
              <button type='button'>/</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="7">7</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="8">8</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="9">9</button>
            </div>
            <div className='celda'>
              <button type='button'>X</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="4">4</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="5">5</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="6">6</button>
            </div>
            <div className='celda'>
              <button type='button'>-</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="1">1</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="2">2</button>
            </div>
            <div className='celda'>
              <button onClick={introducirNumero} type='button' id="3">3</button>
            </div>
            <div className='celda'>
              <button type='button'>+</button>
            </div>
            <div className='celda cero'>
              <button type='button'>0</button>
            </div>
            <div className='celda'>
              <button type='button'>.</button>
            </div>
            <div className='celda'>
              <button type='button'>=</button>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}
