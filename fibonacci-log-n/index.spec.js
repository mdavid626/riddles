const { expect } = require('chai');

const fibonacci = require('./index');

describe('fibonacci last 6 digits', () => {
  it('should be 0 for N = 0', function () {
    expect(fibonacci(0)).to.be.equal(0);
  });
});
