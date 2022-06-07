const { assert } = require("chai");
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  it("should not count items that aren't specified", () => {
    assert.equal(result.Agouhanna, undefined);
  });
  it("should properly count an item that appears once", () => {
    assert.equal(result.Jason, 1);
  });
  it("should properly count an item that appears several times", () => {
    assert.equal(result.Fang, 2);
  });
  it("should not count items that appear zero times", () => {
    assert.equal(result.Karima, undefined);
  });
});