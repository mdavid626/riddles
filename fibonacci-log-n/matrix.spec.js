const { expect } = require('chai');

const { multiplyMatrix, raiseMatrixToPower } = require('./matrix');

describe('matrix operations', function () {
  it('should multiply matrixes', function () {
    const matrix1 = [[2, 3], [4, 5]];
    const matrix2 = [[6, 7], [8, 9]];
    const result = multiplyMatrix(matrix1, matrix2);
    expect(result).to.be.deep.equal([[36, 41], [64, 73]]);
  });

  it('should raise matrix to power of 2', function () {
    const matrix = [[2, 3], [4, 5]];
    const result = raiseMatrixToPower(matrix, 2);
    expect(result).to.be.deep.equal([[16, 21], [28, 37]]);
  });

  it('should raise matrix to power of 3', function () {
    const matrix = [[2, 3], [4, 5]];
    const result = raiseMatrixToPower(matrix, 3);
    expect(result).to.be.deep.equal([[116, 153], [204, 269]]);
  });
});
