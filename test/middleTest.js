const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");
const middle = require("../middle")

assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertEqual(middle([1,2,3]),2);
console.log(middle([5,6]));
console.log(middle([1]));
console.log(middle([5,6,7,8,9]));
