const NUMBER_OF_DIGITS = 6;

const getLastDigits = (n) =>
  parseInt(n.toString().substr(
    Math.max(n.toString().length - NUMBER_OF_DIGITS, 0),
    NUMBER_OF_DIGITS
  ), 10);

const multiplyMatrix = (matrix1, matrix2) => {
  return [
    matrix1[0] * matrix2[0] + matrix1[1] * matrix2[2],
    matrix1[0] * matrix2[1] + matrix1[1] * matrix2[3],
    matrix1[2] * matrix2[0] + matrix1[3] * matrix2[2],
    matrix1[2] * matrix2[1] + matrix1[3] * matrix2[3],
  ];
};

const multiplyMatrixLastDigits = (matrix1, matrix2) =>
  multiplyMatrix(matrix1, matrix2).map(getLastDigits);

const runNTimes = (fn, n, initialValue) => {
  let result = initialValue;
  for (let i = 0; i < n; i++) {
    result = fn(result);
  }
  return result;
};

const raiseMatrixToPower = (matrix, power) => {
  const highestPowerOf2 = Math.floor(Math.log2(power));
  const rest = power - Math.pow(2, highestPowerOf2);

  const subResult = runNTimes(
    (result) => multiplyMatrixLastDigits(result, result), highestPowerOf2, matrix);

  const result = runNTimes(
    (result) => multiplyMatrixLastDigits(result, matrix), rest, subResult);

  return result;
};

module.exports = {
  multiplyMatrix,
  raiseMatrixToPower,
};
