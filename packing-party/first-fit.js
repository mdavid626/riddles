const distribute = (host, items, doesFit) =>
  items.reduce((distribution, item) => {
    const lastGroupIndex = distribution.length - 1;
    const lastGroup = distribution[lastGroupIndex] || [];
    const possibleGroup = [...lastGroup, item];
    const fits = doesFit(host, possibleGroup);
    return [
      ...distribution.filter((_, index) => index !== lastGroupIndex),
      ...(fits ? [possibleGroup] : [lastGroup, [item]]),
    ];
  }, []);

module.exports = distribute;
