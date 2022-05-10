const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1,2],[1,2]);
assertArraysEqual([1,2],[3,4]);
assertArraysEqual([1,2],[3]);

