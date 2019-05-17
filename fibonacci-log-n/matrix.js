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

const getPowersOf2 = (n) =>
  n.toString(2)
    .split('')
    .reverse()
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item !== '0')
    .map(({ index }) => index);

const raiseMatrixToPower = (matrix, power) => {
  const powersOf2 = getPowersOf2(power);

  const subResults = powersOf2.map((power) => runNTimes(
    (result) => multiplyMatrixLastDigits(result, result),
    power,
    matrix
  ));

  const result = subResults.filter((_, index) => index > 0)
    .reduce((acc, item) =>
      multiplyMatrixLastDigits(acc, item), subResults[0]
    );

  return result;
};

module.exports = {
  multiplyMatrix,
  raiseMatrixToPower,
};
