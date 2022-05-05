function eqArrays(firstArray, secondArray) {
  let result = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      result = false;
    }
  }
  if (firstArray.length !== secondArray.length) {
    result = false;
  }
  return result;
};

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function assertArraysEqual(first, second) {
  console.log(assertEqual(eqArrays(first, second), true));
};


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key in object1) {
      if (!object2[key]) {
        return false;
      } else {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (!eqArrays(object1[key],object2[key])) {
            return false;
          }
        } else if (object1[key] !== object2[key]) {
          return false;
        }
      }
      }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual,expected)) {
    console.log(`🍀🍀🍀 Assertion passed: the objects are equal!`);
  } else {
    console.log(`😡😡😡 Assertion failed: the objects are not the same.  `)
  }
};



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


