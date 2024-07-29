const sinon = require('sinon');
const { expect } = require('chai');
const { sendPaymentRequestToApi } = require('./utils');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogStub;
  let calculateNumberStub;

  beforeEach(() => {
    consoleLogStub = sinon.stub(console, 'log');
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);
  });

  afterEach(() => {
    consoleLogStub.restore();
    calculateNumberStub.restore();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogStub.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
});
