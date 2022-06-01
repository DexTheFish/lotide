const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");

const assertArraysEqual = function(firstArray, secondArray) {
  assertEqual(eqArrays(firstArray, secondArray), true);
};
module.exports = assertArraysEqual;