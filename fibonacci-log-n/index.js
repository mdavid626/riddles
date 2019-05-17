const { raiseMatrixToPower } = require('./matrix');

const fibonacciLast6Digits = (n) => {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const q = [[1, 1], [1, 0]];
  const raisedQ = raiseMatrixToPower(q, n - 1);
  return raisedQ[0][0];
};

module.exports = fibonacciLast6Digits;
