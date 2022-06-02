const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual,expected)) {
    console.log(`🍀🍀🍀 Assertion passed: the objects are equal!`);
  } else {
    console.log(`😡😡😡 Assertion failed: the objects are not the same.  `)
  }
};
module.exports = assertObjectsEqual;