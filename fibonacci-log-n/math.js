const runNTimes = (fn, n, initialValue) => {
  let result = initialValue;
  for (let i = 0; i < n; i++) {
    result = fn(result);
  }
  return result;
};

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
    item
  ));

  const result = subResults.filter((_, index) => index > 0)
    .reduce((acc, item) =>
      multiplyFn(acc, item), subResults[0]
    );

  return result;
};

module.exports = {
  power,
};
