const { multiplyMatrix } = require('./matrix');
const { power, getLastDigits } = require('./math');

const MATRIX_Q = [
  [1, 1],
  [1, 0],
];

const fibonacciLastDigits = (n, numberOfDigits) => {
  if (n === 0 || n === 1) {
    return n;
  }

  const getLastDigitsFn = (n) => getLastDigits(n, numberOfDigits);

  const multiplyMatrixLastDigits = (matrix1, matrix2) =>
    multiplyMatrix(matrix1, matrix2).map((row) => row.map(getLastDigitsFn));

  const matrix = power(MATRIX_Q, n - 1, multiplyMatrixLastDigits);
  return matrix[0][0];
};

module.exports = fibonacciLastDigits;
