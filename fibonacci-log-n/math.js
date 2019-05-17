const { runNTimes } = require('./utils');

const getLastDigits = (n, numberOfDigits) =>
  parseInt(n.toString().substr(
    Math.max(n.toString().length - numberOfDigits, 0),
    numberOfDigits,
  ), 10);

const getPowersOf2 = (n) =>
  n.toString(2)
    .split('')
    .reverse()
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item !== '0')
    .map(({ index }) => index);

const power = (item, power, multiplyFn) => {
  const powersOf2 = getPowersOf2(power);

  const subResults = powersOf2.map((power) => runNTimes(
    (result) => multiplyFn(result, result),
    power,
    item,
  ));

  const result = subResults
    .filter((_, index) => index > 0)
    .reduce((acc, item) =>
      multiplyFn(acc, item),
      subResults[0],
    );

  return result;
};

module.exports = {
  getLastDigits,
  runNTimes,
  getPowersOf2,
  power,
};
