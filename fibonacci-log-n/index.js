const { multiplyMatrix } = require('./matrix');
const { power } = require('./math');

const NUMBER_OF_DIGITS = 6;

const getLastDigits = (n) =>
  parseInt(n.toString().substr(
    Math.max(n.toString().length - NUMBER_OF_DIGITS, 0),
    NUMBER_OF_DIGITS
  ), 10);

const multiplyMatrixLastDigits = (matrix1, matrix2) =>
  multiplyMatrix(matrix1, matrix2).map(getLastDigits);

const fibonacciLast6Digits = (n) => {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const q = [1, 1, 1, 0];
  const raisedQ = power(q, n - 1, multiplyMatrixLastDigits);
  return raisedQ[0];
};

module.exports = fibonacciLast6Digits;
