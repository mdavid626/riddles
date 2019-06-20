const distribute = (host, items, doFit) =>
  items.reduce((distribution, item) => {
    const lastGroup = distribution[distribution.length - 1] || [];
    const possibleGroup = [...lastGroup, item];
    const fit = doFit(host, possibleGroup);
    return [
      ...distribution.filter((_, index) => index !== distribution.length - 1),
      ...(fit ? [possibleGroup] : [lastGroup, [item]]),
    ];
  }, []);

module.exports = distribute;
