const { expect } = require('chai');

const { doesFit } = require('./machine');

describe('machine', () => {
  describe('does fit', () => {
    it('should fit when cpu/ram/hdd fits', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [
        { cpu: 1, ram: 1, hdd: 1},
        { cpu: 1, ram: 1, hdd: 1},
        { cpu: 1, ram: 1, hdd: 1},
      ];

      const fits = doesFit(host, vms);

      expect(fits).to.be.true;
    });

    it('should not fit when cpu does not fit', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [
        { cpu: 1, ram: 1, hdd: 1},
        { cpu: 3, ram: 1, hdd: 1},
      ];

      const fits = doesFit(host, vms);

      expect(fits).to.be.false;
    });

    it('should not fit when ram does not fit', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [
        { cpu: 1, ram: 1, hdd: 1},
        { cpu: 1, ram: 3, hdd: 1},
      ];

      const fits = doesFit(host, vms);

      expect(fits).to.be.false;
    });

    it('should not fit when hdd does not fit', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [
        { cpu: 1, ram: 1, hdd: 1},
        { cpu: 1, ram: 1, hdd: 3},
      ];

      const fits = doesFit(host, vms);

      expect(fits).to.be.false;
    });
  });
});
