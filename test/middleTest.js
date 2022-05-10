const assert = require("chai").assert;
const middle = require("../middle")

describe("#middle", () => {
  it("should return the two middle elements of an even-length array", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });
  it("should return the middle element of an odd-length array", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });
it("should return an empty array when given an array that is too short", () => {
  assert.deepEqual(middle([5,'6']), []);
  assert.deepEqual(middle([1]), []);
  assert.deepEqual(middle([]), []);
  });
});