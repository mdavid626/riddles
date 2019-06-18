const { expect } = require('chai');

const distribute = require('./index');

const test = ({ host, vms, distribution }) =>
  it('should distribute', () => {
    expect(distribute(host, vms)).to.be.deep.equal(distribution);
  });

describe('distribute vms', () => {
  test({
    host: { cpu: 1, ram: 1, hdd: 1 },
    vms: [],
    distribution: [],
  });

  test({
    host: { cpu: 1, ram: 1, hdd: 1 },
    vms: [{ cpu: 1, ram: 1, hdd: 1 }],
    distribution: [[{ cpu: 1, ram: 1, hdd: 1 }]],
  });

  test({
    host: { cpu: 2, ram: 2, hdd: 2 },
    vms: [{ cpu: 1, ram: 1, hdd: 1 }],
    distribution: [[{ cpu: 1, ram: 1, hdd: 1 }]],
  });

  test({
    host: { cpu: 1, ram: 1, hdd: 1 },
    vms: [{ cpu: 1, ram: 1, hdd: 1 }, { cpu: 1, ram: 1, hdd: 1 }],
    distribution: [[{ cpu: 1, ram: 1, hdd: 1 }], [{ cpu: 1, ram: 1, hdd: 1 }]],
  });

  test({
    host: { cpu: 2, ram: 2, hdd: 2 },
    vms: [{ cpu: 1, ram: 1, hdd: 1 }, { cpu: 1, ram: 1, hdd: 1 }],
    distribution: [[{ cpu: 1, ram: 1, hdd: 1 }, { cpu: 1, ram: 1, hdd: 1 }]],
  });
});
