const multiplyMatrix = (matrix1, matrix2) => {
  return [
    matrix1[0] * matrix2[0] + matrix1[1] * matrix2[2],
    matrix1[0] * matrix2[1] + matrix1[1] * matrix2[3],
    matrix1[2] * matrix2[0] + matrix1[3] * matrix2[2],
    matrix1[2] * matrix2[1] + matrix1[3] * matrix2[3],
  ];
};

module.exports = {
  multiplyMatrix,
};
