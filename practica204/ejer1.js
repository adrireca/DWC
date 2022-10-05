"use strict";

let sudoku=[[2, 2, 3, 4, 5, 6, 7, 8, 9],
             [7, 8, 9, 1, 2, 3, 4, 5, 6],
             [4, 5, 6, 7, 8, 9, 1, 2, 3],
             [3, 1, 2, 6, 4, 5, 9, 7, 8],
             [9, 7, 8, 3, 1, 2, 6, 4, 5],
             [6, 4, 5, 9, 7, 8, 3, 1, 2],
             [2, 3, 1, 5, 6, 4, 8, 9, 7],
             [8, 9, 7, 2, 3, 1, 5, 6, 4],
             [5, 6, 4, 8, 9, 7, 2, 3, 1]];



function comprobarSudoku(tablero) {
    for (var i = 0; i < tablero.length; i++) {
    for (var j = 0; j < tablero[i].length; j++) {
        for (var k = j + 1; k < tablero.length; k++) {
        if (tablero[i][j] == tablero[i][k]) {
          console.log('H', tablero[i][j], i+'-'+j, i+'-'+k)
            return false;
        }
        if (tablero[j][i] == tablero[k][i]) {
            console.log('V', tablero[j][i], j+'-'+i, k+'-'+i)
            return false;
        }
        if (tablero[Math.floor(i/3) * 3 + Math.floor(j/3)][i%3 * 3 + j%3] == tablero[Math.floor(i/3) * 3 + Math.floor(k/3)][i%3 * 3 + k%3]) {
          console.log('C', tablero[Math.floor(i/3) * 3 + Math.floor(j/3)][i%3 * 3 + j%3], (Math.floor(i/3) * 3 + Math.floor(j/3))+'-'+ (i%3 * 3 + j%3), (Math.floor(i/3) * 3 + Math.floor(k/3))+'-'+(i%3 * 3 + k%3));
            return false;
        }
      }
    }
  }
  
  return "Sudoku correcto";
}

console.log(comprobarSudoku(sudoku));