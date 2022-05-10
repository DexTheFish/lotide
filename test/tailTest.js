const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should leave the original array unchanged", () => {
    let x = [1,2,3];
    tail(x);
    assert.deepEqual(([1, 2, 3]), x);
  });
  it("should return the correct tail", () => {
    assert.deepEqual(tail(['5','6','7']), ['6','7']); 
  });
  it("should return an empty array when given a singleton array", () => {
    assert.deepEqual(tail([1]), []);
  })
  it("should return an empty array when given an empty array", () => {
    assert.deepEqual(tail([]), []);
  })
});