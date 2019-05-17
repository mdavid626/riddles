const { expect } = require('chai');

const { runNTimes } = require('./utils');

const pow2 = (n) => n * n;

describe('utils', function () {
  describe('runNTimes', function () {
    it('should run fn 0 times', function () {
      const result = runNTimes(pow2, 0, 123);
      expect(result).to.be.equal(123);
    });

    it('should run fn 1 times', function () {
      const result = runNTimes(pow2, 1, 2);
      expect(result).to.be.equal(4);
    });

    it('should run fn 3 times', function () {
      const result = runNTimes(pow2, 3, 2);
      expect(result).to.be.equal(256);
    });
  });
});
