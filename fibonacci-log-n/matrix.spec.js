const { expect } = require('chai');

const { multiplyMatrix } = require('./matrix');

describe('matrix', () => {
  it('should multiply matrixes', () => {
    const matrix1 = [
      [2, 3],
      [4, 5],
    ];
    const matrix2 = [
      [6, 7],
      [8, 9],
    ];
    const result = multiplyMatrix(matrix1, matrix2);
    expect(result).to.be.deep.equal([
      [36, 41],
      [64, 73],
    ]);
  });
});
