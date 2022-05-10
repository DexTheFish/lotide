# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by myself, Dex Davis, as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@dexthefish/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(a,b)`: log a message indicating (in)equality of arrays a,b
* `assertEqual(a,b))`: log a message indicating (in)equality of primitives a,b
* `assertObjectsEqual(a,b)`: log a message indicating (in)equivalence of objects a,b
* `countLetters(s)`: sort the characters of a string s into bins with counts
* `countOnly(a,b)`: sort the elements of an array a into bins with counts, but only if they can be found somewhere in b
* `eqArrays(a,b)`: return true iff a and b refer to the same array
* `eqObjects(a,b)`: return true iff a and b refer to the same object
* `findKey(a,callback)`: return the first key of a whose value satisfies callback
* `findKeyByValue(a,b)`: return the first key of a whose value equals b
* `head(a)`: return first element of an array
* `letterPositions(s)`: map the unique characters of s to the set of indices at which they occur
* `map(a,callback)`: return a sub-array of a, taking elements iff they satisfy callback
* `middle(a)`: return the middle element(s) of a as an array
* `tail(a)`: return a new array by excluding the first element of a
* `takeUntil(a,callback)`: return a new array by truncating a at the first element which satisfies callback
* `without(a,callback)`: return a new array by excluding the elements of a which satisfy callback
