const { expect } = require('chai');

const distributeVms = require('./index');

describe('vm distribution', () => {
  it('should distribute vms', () => {
    const host = { cpu: 3, ram: 5, hdd: 10 };
    const vms = [
      { name: 'vm1', cpu: 1, ram: 2, hdd: 3 },
      { name: 'vm2', cpu: 2, ram: 2, hdd: 3 },
      { name: 'vm3', cpu: 2, ram: 2, hdd: 3 },
    ];

    const distribution = distributeVms(host, vms);

    expect(distribution).to.deep.equal([
      [
        { name: 'vm1', cpu: 1, ram: 2, hdd: 3 },
        { name: 'vm2', cpu: 2, ram: 2, hdd: 3 },
      ],
      [{ name: 'vm3', cpu: 2, ram: 2, hdd: 3 }],
    ]);
  });
});
