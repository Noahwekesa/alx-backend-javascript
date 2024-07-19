const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return rounded sum", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(3.7, 4), 8);
    assert.strictEqual(calculateNumber(3.2, 3), 6);
    assert.strictEqual(calculateNumber(0, 3), 3);
    assert.strictEqual(calculateNumber(6.9, 1), 8);
  });
});
