const sinon = require('sinon');
const { expect } = require('chai');
const { sendPaymentRequestToApi } = require('./utils');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberStub.restore();
  });

  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
