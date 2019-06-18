const distribute = (host, vms) =>
  vms.reduce((acc, vm) => {
    const lastHost = acc[acc.length - 1] || [];
    const current = [...lastHost, vm].reduce(
      (acc, vm) => ({
        cpu: (acc.cpu || 0) + vm.cpu,
        ram: (acc.ram || 0) + vm.ram,
        hdd: (acc.hdd || 0) + vm.hdd,
      }),
      {}
    );
    const fits =
      current.cpu <= host.cpu &&
      current.ram <= host.ram &&
      current.hdd <= host.hdd;
    return fits
      ? [
        ...acc.filter((_, index) => index !== acc.length - 1),
        [...lastHost, vm],
      ]
      : [...acc, [vm]];
  }, []);

module.exports = distribute;
