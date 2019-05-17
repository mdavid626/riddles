const { expect } = require('chai');

const { power } = require('./math');

const multiply = (a, b) => a * b;

describe('math operations', function () {
  it('should raise 2 to power of 2', function () {
    const result = power(2, 2, multiply);
    expect(result).to.be.deep.equal(4);
  });

  it('should raise 2 to power of 3', function () {
    const result = power(2, 3, multiply);
    expect(result).to.be.deep.equal(8);
  });
});
