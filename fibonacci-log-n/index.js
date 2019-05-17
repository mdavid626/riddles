const { multiplyMatrix } = require('./matrix');
const { power, getLastDigits } = require('./math');

const NUMBER_OF_DIGITS = 6;
const MATRIX_Q = [[1, 1], [1, 0]];

const getLastDigitsFn = (n) => getLastDigits(n, NUMBER_OF_DIGITS);

const multiplyMatrixLastDigits = (matrix1, matrix2) =>
  multiplyMatrix(matrix1, matrix2)
    .map(row => row.map(getLastDigitsFn));

const fibonacciLast6Digits = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }

  const matrix = power(MATRIX_Q, n - 1, multiplyMatrixLastDigits);
  return matrix[0][0];
};

module.exports = fibonacciLast6Digits;
