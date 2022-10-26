function sumar(x, y) {
  return x + y;
}

function restar(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  return x * y;
}

function modulo(x, y){
  return x % y;
}

// Exporta directamente la función Dividir.
export function dividir(x, y) {
  return y === 0 ? "No se puede dividir entre cero." : x / y;
}

// Exporta los elementos situados entre las llaves.
export { sumar, restar, multiplicar, modulo};
// Exporta el elemento con un seudónimo.
export { multiplicar as multi };
