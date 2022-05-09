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

////////////////////////////////////

function without(source, itemsToRemove) {
  // make a new array
  // loop through s in source
  // check if s is in itemsToRemove
  // if not, push s to new array
  let newArray = [];
  for (const s of source) {
    let remove = false;
    for (const i of itemsToRemove) {
      if (i === s) {
        remove = true;
      }
    }
    if (remove === false) {
      newArray.push(s);
    }
  }
  return newArray;
}
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);