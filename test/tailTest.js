const assertEqual = require("../assertEqual");
const tail = require("../tail");


// Test: original array is unchanged
const words = ["Ay Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
// Test: returned array is correct
const result = tail(words);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1], "Labs");
// Test: singletons and empties have empty tails
assertEqual(tail([1]).length, 0);
assertEqual(tail([]).length, 0);
console.log(tail([1,2]));
console.log(tail([1]));
console.log(tail([]));
