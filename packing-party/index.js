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

const distribute = (hostSpec, vms) =>
  vms.reduce((distribution, vm) => {
    const lastHost = distribution[distribution.length - 1] || [];
    const possibleHost = [...lastHost, vm];
    const fits = getFits(hostSpec, possibleHost);
    return [
      ...distribution.filter((_, index) => index !== distribution.length - 1),
      ...(fits ? [possibleHost] : [lastHost, [vm]]),
    ];
  }, []);

module.exports = distribute;
