const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should return the sum of rounded numbers", () => {
    const result = calculateNumber(3.1, 2.7);
    assert.strictEqual(result, 6); // Assert strict equality
  });

  it("should round down negative numbers", () => {
    const result = calculateNumber(-3.9, -2.1);
    assert.strictEqual(result, -6); // Assert strict equality
  });

  it("should handle zero values", () => {
    const result = calculateNumber(0.0, 0.0);
    assert.strictEqual(result, 0); // Assert strict equality
  });

  it("should handle large numbers", () => {
    const result = calculateNumber(123456.789, 987654.321);
    assert.strictEqual(result, 1111121); // Assert strict equality (rounded values)
  });
});
