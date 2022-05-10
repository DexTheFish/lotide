const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");

const assertArraysEqual = function(first, second) {
  assertEqual(eqArrays(first, second), true);
};
module.exports = assertArraysEqual;