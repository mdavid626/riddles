const { expect } = require('chai');

const fibonacci = require('./index');

const test = (n, result) => {
  it(`should be ${result} for N = ${n}`, function () {
    expect(fibonacci(n)).to.be.equal(result);
  }).timeout(500 * 1000);
};

describe('fibonacci last 6 digits', () => {
  test(0, 0);
  test(1, 1);
  test(2, 1);
  test(3, 2);
  test(4, 3);
  test(5, 5);
  test(6, 8);
  test(7, 13);
  test(8, 21);
  test(9, 34);
  test(10, 55);
  test(11, 89);
  test(12, 144);
  test(13, 233);
  test(14, 377);
  test(30, 832040);
  test(31, 346269);
  test(298, 369399);
  test(299, 610201);
  test(300, 979600);
  test(470, 592585);
  test(500, 294125);
  test(100000, 746875);
  test(1000000, 546875); // 400 ms
  test(10000000, 546875); // 1.5 sec
  // test(100000000, 546875); // 30sec
  // test(1000000000, 546875);
  // test(2000000000, 546875);
  // test(2147483647, 546875);
});
