import React from "react";
import {
  sumar,
  restar,
  multiplicar,
  dividir,
  modulo
} from "../Bibliotecas/Calculadora";
import "./css/calculadora.css";
import { useRef } from "react";

export const Calculadora = () => {
  const referencia = useRef(null);
  let cifra = "";
  let acumulado = 0;
  let sumando = false;
  let restando = false;
  let multiplicando = false;
  let dividiendo = false;
  let restoModulo = false;
  let primOperacion = true;

  //Recoger número.
  const introducirNumero = (e) => {
    referencia.current.value = e.target.id;
    cifra = referencia.current.value; //cifra del display
  };

  //operación sumar.
  const suma = () => {
    if (primOperacion === false) {
      if (restando) {
        acumulado = restar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      } else if (multiplicando) {
        acumulado = multiplicar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      } else if (dividiendo) {
        acumulado = dividir(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }else{
        acumulado = sumar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }
    } else {
      acumulado = parseFloat(cifra);
      primOperacion = false;
    }
    //reseteo.
    cifra = "";
    sumando = true;
    restando = false;
    multiplicando = false;
    dividiendo = false;
    restoModulo = false;
    primOperacion = false;
  };

  //operación restar.
  const resta = () => {
    if (primOperacion === false) {
      //si no es la primera operación.
      if (sumando) {
        //guardo el acumulado + la cifra del display si la última operación ha sido restar.
        acumulado = sumar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      } else if (multiplicando) {
        acumulado = multiplicar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      } else if (restando) {
        acumulado = restar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }else if(dividiendo){
        acumulado = dividir(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }
    } else {
      //si es la pirmera operación.
      acumulado = parseFloat(cifra);
      primOperacion = false;
    }
    cifra = "";
    sumando = false;
    restando = true;
    multiplicando = false;
    dividiendo = false;
    restoModulo = false;
    primOperacion = false;
  };


  //operación multiplicar.
  const multiplica = () => {
    if (primOperacion === false) {
      if (sumando) {
        acumulado = sumar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      } else if (restando) {
        acumulado = restar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      } else if (multiplicando) {
        acumulado = multiplicar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }else if(dividiendo){
        acumulado = dividir(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }
    } else {
      //si es la pirmera operación.
      acumulado = parseFloat(cifra);
      primOperacion = false;
    }
    cifra = "";
    sumando = false;
    restando = false;
    multiplicando = true;
    dividiendo = false;
    restoModulo = false;
    primOperacion = false;
  };


  //operación dividir.
  const divide = () => {
    if (primOperacion === false) {
      if (sumando) {
        acumulado = sumar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      } else if (restando) {
        acumulado = restar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      } else if (multiplicando) {
        acumulado = multiplicar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }else {
        acumulado = dividir(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }
    } else {
      //si es la pirmera operación.
      acumulado = parseFloat(cifra);
      primOperacion = false;
    }
    cifra = "";
    sumando = false;
    restando = false;
    multiplicando = false;
    dividiendo = true;
    restoModulo = false;
    primOperacion = false;
  };


  const f_modulo = () => {
    if (primOperacion === false) {
      if (sumando) {
        acumulado = sumar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      } else if (restando) {
        acumulado = restar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      } else if (multiplicando) {
        acumulado = multiplicar(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }else if(dividiendo){
        acumulado = dividir(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }else if(restoModulo){
        acumulado = modulo(acumulado, parseFloat(cifra));
        referencia.current.value = acumulado;
      }
    } else {
      //si es la pirmera operación.
      acumulado = parseFloat(cifra);
      primOperacion = false;
    }
    cifra = "";
    sumando = false;
    restando = false;
    multiplicando = false;
    dividiendo = false;
    restoModulo = true;
    primOperacion = false;
  };


  //Borra display.
  const borrarDisplay = () => {
    referencia.current.value = "";

    //reseteo.
    cifra = 0;
    acumulado = 0;
  };

  const resultado = () => {
    if (sumando) {
      referencia.current.value = sumar(acumulado, parseFloat(cifra));
    } else if (restando) {
      referencia.current.value = restar(acumulado, parseFloat(cifra));
    } else if (multiplicando) {
      referencia.current.value = multiplicar(acumulado, parseFloat(cifra));
    }else if(dividiendo){
      referencia.current.value = dividir(acumulado, parseFloat(cifra));
    }else if(restoModulo){
      referencia.current.value = modulo(acumulado, parseFloat(cifra));
    }
    //almaceno en acumulado lo que en ese momento se encuentra en el display.
    acumulado = parseFloat(referencia.current.value);
    cifra = 0; //reseteo cifra.
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="grid">
          <div className="celda display">
            <input ref={referencia} type="text" placeholder="0"></input>
          </div>
          <div className="celda C">
            <button onClick={borrarDisplay} type="button">
              C
            </button>
          </div>
          <div className="celda">
            <button onClick={f_modulo} type="button" id="%">
              %
            </button>
          </div>
          <div className="celda">
            <button onClick={divide} type="button" id="/">
              /
            </button>
          </div>
          <div className="celda">
            <button onClick={introducirNumero} type="button" id="7">
              7
            </button>
          </div>
          <div className="celda">
            <button onClick={introducirNumero} type="button" id="8">
              8
            </button>
          </div>
          <div className="celda">
            <button onClick={introducirNumero} type="button" id="9">
              9
            </button>
          </div>
          <div className="celda">
            <button onClick={multiplica} type="button" id="X">
              X
            </button>
          </div>
          <div className="celda">
            <button onClick={introducirNumero} type="button" id="4">
              4
            </button>
          </div>
          <div className="celda">
            <button onClick={introducirNumero} type="button" id="5">
              5
            </button>
          </div>
          <div className="celda">
            <button onClick={introducirNumero} type="button" id="6">
              6
            </button>
          </div>
          <div className="celda">
            <button onClick={resta} type="button" id="-">
              -
            </button>
          </div>
          <div className="celda">
            <button onClick={introducirNumero} type="button" id="1">
              1
            </button>
          </div>
          <div className="celda">
            <button onClick={introducirNumero} type="button" id="2">
              2
            </button>
          </div>
          <div className="celda">
            <button onClick={introducirNumero} type="button" id="3">
              3
            </button>
          </div>
          <div className="celda">
            <button onClick={suma} type="button" id="+">
              +
            </button>
          </div>
          <div className="celda cero">
            <button onClick={introducirNumero} type="button" id="0">
              0
            </button>
          </div>
          <div className="celda">
            <button type="button">.</button>
          </div>
          <div className="celda">
            <button onClick={resultado} type="button" id="=">
              =
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
