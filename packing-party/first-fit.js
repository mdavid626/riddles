const distribute = (host, items, doFit) =>
  items.reduce((distribution, item) => {
    const lastGroup = distribution[distribution.length - 1] || [];
    return [
      ...distribution.slice(0, -1),
      ...(doFit(host, [...lastGroup, item])
        ? [[...lastGroup, item]]
        : [lastGroup, [item]]),
    ];
  }, []);

module.exports = distribute;
