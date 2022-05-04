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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions('hello').h, [0]);
console.log(letterPositions('lighthouse in the house'));
console.log(letterPositions('lighthouse in the house')["h"]);