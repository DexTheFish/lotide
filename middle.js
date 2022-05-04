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

const middle = function(array) {
  let l = array.length;
  if (l <= 2) {
    return [];
  } else if (l % 2 === 0) {
    return [array[l / 2 - 1], array[l / 2]];
  } else if (l % 2 === 1) {
    return array[Math.floor(l / 2)];
  }
};

console.log(assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]));
console.log(assertEqual(middle([1,2,3]),2));
console.log(middle([5,6]));
console.log(middle([1]));
console.log(middle([5,6,7,8,9]));



