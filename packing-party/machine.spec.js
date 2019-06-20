const { expect } = require('chai');

const { doFit } = require('./machine');

describe('machine', () => {
  describe('do fit', () => {
    it('should fit when cpu/ram/hdd fits without gap', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [
        { cpu: 1, ram: 1, hdd: 1 },
        { cpu: 1, ram: 1, hdd: 1 },
        { cpu: 1, ram: 1, hdd: 1 },
      ];

      const fits = doFit(host, vms);

      expect(fits).to.be.true;
    });

    it('should fit when cpu/ram/hdd fits with gap', () => {
      const host = { cpu: 4, ram: 4, hdd: 4 };
      const vms = [
        { cpu: 1, ram: 1, hdd: 1 },
        { cpu: 1, ram: 1, hdd: 1 },
        { cpu: 1, ram: 1, hdd: 1 },
      ];

      const fits = doFit(host, vms);

      expect(fits).to.be.true;
    });

    it('should not fit when cpu does not fit without gap', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [{ cpu: 1, ram: 1, hdd: 1 }, { cpu: 3, ram: 1, hdd: 1 }];

      const fits = doFit(host, vms);

      expect(fits).to.be.false;
    });

    it('should not fit when cpu does not fit with gap', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [{ cpu: 1, ram: 1, hdd: 1 }, { cpu: 4, ram: 1, hdd: 1 }];

      const fits = doFit(host, vms);

      expect(fits).to.be.false;
    });

    it('should not fit when ram does not fit without gap', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [{ cpu: 1, ram: 1, hdd: 1 }, { cpu: 1, ram: 3, hdd: 1 }];

      const fits = doFit(host, vms);

      expect(fits).to.be.false;
    });

    it('should not fit when ram does not fit with gap', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [{ cpu: 1, ram: 1, hdd: 1 }, { cpu: 1, ram: 4, hdd: 1 }];

      const fits = doFit(host, vms);

      expect(fits).to.be.false;
    });

    it('should not fit when hdd does not fit without gap', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [{ cpu: 1, ram: 1, hdd: 1 }, { cpu: 1, ram: 1, hdd: 3 }];

      const fits = doFit(host, vms);

      expect(fits).to.be.false;
    });

    it('should not fit when hdd does not fit with gap', () => {
      const host = { cpu: 3, ram: 3, hdd: 3 };
      const vms = [{ cpu: 1, ram: 1, hdd: 1 }, { cpu: 1, ram: 1, hdd: 4 }];

      const fits = doFit(host, vms);

      expect(fits).to.be.false;
    });
  });
});
