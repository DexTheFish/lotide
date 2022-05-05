const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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







const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true) // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false) // => false