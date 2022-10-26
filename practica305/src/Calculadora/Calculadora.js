import React, { useState } from 'react';
// import { sumar, restar, multiplicar, dividir } from '../Bibliotecas/Calculadora';
import { cal } from '../Bibliotecas/utils';
import "./css/calculadora.css";
import { useRef } from "react";

export const Calculadora = () => {

  // const referencia = useRef();
  // const [numOne, setNumero] = useState('');
  

  // const introducirNumero = event => {

  //   referencia.current.focus();
  //   console.log(referencia.current.value);
  //   // setNumero(numInicial => numInicial + event.target.value);
  //   // let valor = parseFloat(referencia.current.value);
  //   // referencia.current.value += valor;
  // }

  const [numberOne, setNumberOne] = useState('');
  const referencia = useRef();

  // const introducirNumero = event => {
  //   referencia.current.focus();
  //   setNumberOne(prevNum => prevNum + event.target.value);
  // };

  const clearInputDisplay = () => {
    setNumberOne('');
  };

  const calculate = () => {
    // event.preventDefault();
    let result = cal(numberOne);
    setNumberOne(result);
  };

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
              <button onClick={() => introducirNumero()} type='button' value={7}>7</button>
            </div>
            <div className='celda'>
              <button onClick={() => introducirNumero()} type='button' value={8}>8</button>
            </div>
            <div className='celda'>
              <button onClick={() => introducirNumero()} type='button' value={9}>9</button>
            </div>
            <div className='celda'>
              <button type='button'>X</button>
            </div>
            <div className='celda'>
              <button onClick={() => introducirNumero()} type='button' value={4}>4</button>
            </div>
            <div className='celda'>
              <button onClick={() => introducirNumero()} type='button' value={5}>5</button>
            </div>
            <div className='celda'>
              <button onClick={() => introducirNumero()} type='button' value={6}>6</button>
            </div>
            <div className='celda'>
              <button type='button'>-</button>
            </div>
            <div className='celda'>
              <button onClick={() => introducirNumero()} type='button' value={1}>1</button>
            </div>
            <div className='celda'>
              <button onClick={() => introducirNumero()} type='button' value={2}>2</button>
            </div>
            <div className='celda'>
              <button onClick={() => introducirNumero(event)} type='button' value={3}>3</button>
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
