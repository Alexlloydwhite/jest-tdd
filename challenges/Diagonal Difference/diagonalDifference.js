/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(array) {
  let diagonal1Total = 0;
  let diagonal2Total = 0;

  for (let i = 0; i < array.length; i++) {
    diagonal1Total += array[i][i];
    diagonal2Total += array[i][array.length - 1 - i];
  }

  return Math.abs(diagonal1Total - diagonal2Total);
}

module.exports = diagonalDifference;
