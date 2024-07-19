const sendPaymentRequestToApi = require("./5-payment");
const sinon = require("sinon");
let { expect } = require("chai");

describe("calculateNumber", function () {
  let spyConsole;

  beforeEach(function () {
    spyConsole = sinon.spy(console, "log");
  });
  afterEach(function () {
    spyConsole.restore();
  });

  it("should return correct value for 100, 20", () => {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly("The total is: 120")).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });

  it("should return correct value for 10, 10", () => {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWithExactly("The total is: 20")).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
});
