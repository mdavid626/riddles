const distribute = (hostSpec, vms) =>
  vms.reduce((distribution, vm) => {
    const lastHost = distribution[distribution.length - 1] || [];
    const possibleHost = [...lastHost, vm];
    const sum = possibleHost.reduce(
      (acc, item) => ({
        cpu: (acc.cpu || 0) + item.cpu,
        ram: (acc.ram || 0) + item.ram,
        hdd: (acc.hdd || 0) + item.hdd,
      }),
      {}
    );
    const fits =
      sum.cpu <= hostSpec.cpu &&
      sum.ram <= hostSpec.ram &&
      sum.hdd <= hostSpec.hdd;
    return [
      ...distribution.filter((_, index) => index !== distribution.length - 1),
      ...(fits ? [possibleHost] : [lastHost, [vm]]),
    ];
  }, []);

module.exports = distribute;
