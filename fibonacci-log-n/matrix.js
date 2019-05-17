const multiplyMatrix = (matrix1, matrix2) => [
  [
    matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0],
    matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1],
  ],
  [
    matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0],
    matrix1[1][0] * matrix2[0][1] + matrix1[1][1] * matrix2[1][1],
  ],
];

module.exports = {
  multiplyMatrix,
};
