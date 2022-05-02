const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* TESTS
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('a', 'a');
assertEqual(0, 0);
assertEqual(2, 1.1);
assertEqual('1', 1);
*/