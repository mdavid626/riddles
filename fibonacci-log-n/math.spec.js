const { expect } = require('chai');

const { power, getLastDigits, getPowersOf2 } = require('./math');

const multiply = (a, b) => a * b;

describe('math', () => {
  describe('getLastDigits', () => {
    it('should get last digits of 2', () => {
      const result = getLastDigits(2, 6);
      expect(result).to.be.equal(2);
    });

    it('should get last digits of 1234567', () => {
      const result = getLastDigits(1234567, 6);
      expect(result).to.be.equal(234567);
    });
  });

  describe('getPowersOf2', () => {
    it('should get powers of 2 for 0', () => {
      const result = getPowersOf2(0);
      expect(result).to.be.deep.equal([]);
    });

    it('should get powers of 2 for 1', () => {
      const result = getPowersOf2(1);
      expect(result).to.be.deep.equal([0]);
    });

    it('should get powers of 2 for 2', () => {
      const result = getPowersOf2(2);
      expect(result).to.be.deep.equal([1]);
    });

    it('should get powers of 2 for 3', () => {
      const result = getPowersOf2(3);
      expect(result).to.be.deep.equal([0, 1]);
    });

    it('should get powers of 2 for 5', () => {
      const result = getPowersOf2(5);
      expect(result).to.be.deep.equal([0, 2]);
    });

    it('should get powers of 2 for 100', () => {
      const result = getPowersOf2(100);
      expect(result).to.be.deep.equal([2, 5, 6]);
    });
  });

  describe('power', () => {
    it('should raise 2 to power of 2', () => {
      const result = power(2, 2, multiply);
      expect(result).to.be.equal(4);
    });

    it('should raise 2 to power of 3', () => {
      const result = power(2, 3, multiply);
      expect(result).to.be.equal(8);
    });

    it('should raise 3 to power of 5', () => {
      const result = power(3, 5, multiply);
      expect(result).to.be.equal(243);
    });

    it('should raise 3 to power of 18', () => {
      const result = power(3, 18, multiply);
      expect(result).to.be.equal(387420489);
    });
  });
});
