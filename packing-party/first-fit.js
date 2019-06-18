const distribute = (host, items, doFit) =>
  items.reduce((distribution, item) => {
    const lastGroupIndex = distribution.length - 1;
    const lastGroup = distribution[lastGroupIndex] || [];
    const possibleGroup = [...lastGroup, item];
    const fits = doFit(host, possibleGroup);
    return [
      ...distribution.filter((_, index) => index !== lastGroupIndex),
      ...(fits ? [possibleGroup] : [lastGroup, [item]]),
    ];
  }, []);

module.exports = distribute;
