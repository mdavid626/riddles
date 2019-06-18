const distribute = (hostSpec, vms) =>
  vms.reduce((acc, vm) => {
    const lastHost = acc[acc.length - 1] || [];
    const possibleHost = [...lastHost, vm];
    const sum = possibleHost.reduce(
      (acc, vm) => ({
        cpu: (acc.cpu || 0) + vm.cpu,
        ram: (acc.ram || 0) + vm.ram,
        hdd: (acc.hdd || 0) + vm.hdd,
      }),
      {}
    );
    const fits =
      sum.cpu <= hostSpec.cpu &&
      sum.ram <= hostSpec.ram &&
      sum.hdd <= hostSpec.hdd;
    return [
      ...acc.filter((_, index) => index !== acc.length - 1),
      ...(fits ? [possibleHost] : [lastHost, [vm]]),
    ];
  }, []);

module.exports = distribute;
