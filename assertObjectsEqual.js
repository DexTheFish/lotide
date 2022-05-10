const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual,expected)) {
    console.log(`🍀🍀🍀 Assertion passed: the objects are equal!`);
  } else {
    console.log(`😡😡😡 Assertion failed: the objects are not the same.  `)
  }
};

/*
const x = {
  a: 'a',
  b: 'b',
  c: 'c'
}
const y = {
  a: 'a',
  b: 'b',
  c: 'c'
}
const z = {
  d: 'd',
  e: 'e',
  f: 'f'
}
const t = {
  a: 'q',
  b: 'v',
  c: 'w'
}

assertObjectsEqual(x,y);
assertObjectsEqual(x,z);
assertObjectsEqual(x,t);

*/
