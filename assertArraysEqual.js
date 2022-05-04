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

assertArraysEqual([1,2],[1,2]);
assertArraysEqual([1,2],[3,4]);
assertArraysEqual([1,2],[3]);