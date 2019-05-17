const runNTimes = (fn, n, initialValue) => {
  let result = initialValue;
  for (let i = 0; i < n; i++) {
    result = fn(result);
  }
  return result;
};

module.exports = {
  runNTimes,
};
