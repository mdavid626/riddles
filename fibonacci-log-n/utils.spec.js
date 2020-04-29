const { expect } = require('chai');

const { runNTimes } = require('./utils');

const pow2 = (n) => n * n;

describe('utils', () => {
  describe('runNTimes', () => {
    it('should run fn 0 times', () => {
      const result = runNTimes(pow2, 0, 123);
      expect(result).to.be.equal(123);
    });

    it('should run fn 1 times', () => {
      const result = runNTimes(pow2, 1, 2);
      expect(result).to.be.equal(4);
    });

    it('should run fn 3 times', () => {
      const result = runNTimes(pow2, 3, 2);
      expect(result).to.be.equal(256);
    });
  });
});
