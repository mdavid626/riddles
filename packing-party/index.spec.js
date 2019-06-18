const { expect } = require('chai');

const distribute = require('./index');

describe('distribute vms', () => {
  it('should distribute to one machine', () => {
    const host = {
      cpu: 1,
      ram: 1,
      hdd: 1,
    };
    const vms = [
      {
        cpu: 1,
        ram: 1,
        hdd: 1,
      },
    ];

    const distribution = distribute(host, vms);

    expect(distribution).to.be.deep.equal([
      [
        {
          cpu: 1,
          ram: 1,
          hdd: 1,
        },
      ],
    ]);
  });
});
