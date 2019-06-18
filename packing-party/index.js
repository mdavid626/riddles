const getFits = (hostSpec, vms) => {
  const sum = vms.reduce(
    (acc, vm) => ({
      cpu: (acc.cpu || 0) + vm.cpu,
      ram: (acc.ram || 0) + vm.ram,
      hdd: (acc.hdd || 0) + vm.hdd,
    }),
    {}
  );
  return (
    sum.cpu <= hostSpec.cpu &&
    sum.ram <= hostSpec.ram &&
    sum.hdd <= hostSpec.hdd
  );
};

const distribute = (host, items) =>
  items.reduce((distribution, item) => {
    const lastGroupIndex = distribution.length - 1;
    const lastGroup = distribution[lastGroupIndex] || [];
    const possibleGroup = [...lastGroup, item];
    const fits = getFits(host, possibleGroup);
    return [
      ...distribution.filter((_, index) => index !== lastGroupIndex),
      ...(fits ? [possibleGroup] : [lastGroup, [item]]),
    ];
  }, []);

module.exports = distribute;
