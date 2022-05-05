const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqObjects = function(object1, object2) {
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

/* TESTS
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('a', 'a');
assertEqual(0, 0);
assertEqual(2, 1.1);
assertEqual('1', 1);
*/