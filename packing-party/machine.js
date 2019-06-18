const doesFit = (host, vms) => {
  const sum = vms.reduce(
    (acc, vm) => ({
      cpu: (acc.cpu || 0) + vm.cpu,
      ram: (acc.ram || 0) + vm.ram,
      hdd: (acc.hdd || 0) + vm.hdd,
    }),
    {}
  );
  return sum.cpu <= host.cpu && sum.ram <= host.ram && sum.hdd <= host.hdd;
};

module.exports = {
  doesFit,
};
