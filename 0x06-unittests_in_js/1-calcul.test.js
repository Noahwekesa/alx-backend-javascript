const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  it("should return 6", function () {
    assert.equal(calculateNumber("SUM", 1.4, 4.5), 6);
  });

  it("should return -4", function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), 4);
  });

  it("should return 0.2", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
  });

  it("should return divide by 0 Error", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
  });
});
