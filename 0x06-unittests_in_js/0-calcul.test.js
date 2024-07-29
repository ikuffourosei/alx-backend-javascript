const { expect } = require('chai');
const Utils = require('./utils');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      const result = Utils.calculateNumber('SUM', 1.4, 4.5);
      expect(result).to.equal(6);
    });

    it('should return 0 when inputs are -1.4 and 1.4', () => {
      const result = Utils.calculateNumber('SUM', -1.4, 1.4);
      expect(result).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      const result = Utils.calculateNumber('SUBTRACT', 1.4, 4.5);
      expect(result).to.equal(-4);
    });

    it('should return 1 when inputs are 1.5 and 0.5', () => {
      const result = Utils.calculateNumber('SUBTRACT', 1.5, 0.5);
      expect(result).to.equal(1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      const result = Utils.calculateNumber('DIVIDE', 1.4, 4.5);
      expect(result).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      const result = Utils.calculateNumber('DIVIDE', 1.4, 0);
      expect(result).to.equal('Error');
    });

    it('should return -1 when inputs are -4.5 and 4.5', () => {
      const result = Utils.calculateNumber('DIVIDE', -4.5, 4.5);
      expect(result).to.equal(-0.8);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for invalid operation type', () => {
      expect(() => Utils.calculateNumber('INVALID', 1, 2)).to.throw('Invalid operation type');
    });
  });
});
