const head   = require('./head');
const tail   = require('./tail');
const map    = require('./map');
const middle = require('./middle');
const eqObjects = require('./eqObjects');
const eqArrays  = require('./eqArrays');
const countOnly = require('./countOnly');
const findKey   = require('./findKey');
const findKeyByValue  = require('./findKeyByValue');
const countLetters    = require('./countLetters');
const letterPositions = require('./letterPositions');
const assertEqual     = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual  = require('./assertArraysEqual');
module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  map: map,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  countLetters: countLetters,
  letterPositions: letterPositions,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual,
};