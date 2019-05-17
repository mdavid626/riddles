const NUMBER_OF_DIGITS = 6;

const getLastDigits = (n) =>
  parseInt(n.toString().substr(
    Math.max(n.toString().length - NUMBER_OF_DIGITS, 0),
    NUMBER_OF_DIGITS
  ), 10);

const multiplyMatrix = (matrix1, matrix2) => {
  return [
    [
      matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0],
      matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1],
    ],
    [
      matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0],
      matrix1[1][0] * matrix2[0][1] + matrix1[1][1] * matrix2[1][1],
    ]
  ];
};

const onlySixDigits = (matrix) => [
  [getLastDigits(matrix[0][0]), getLastDigits(matrix[0][1])],
  [getLastDigits(matrix[1][0]), getLastDigits(matrix[1][1])]
];

const multiplyMatrixLastDigits = (matrix1, matrix2) =>
  onlySixDigits(multiplyMatrix(matrix1, matrix2));

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
