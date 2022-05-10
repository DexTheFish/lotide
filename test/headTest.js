const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([1, 2, 3]), head([1, 4, 5]));
assertEqual(head([1, 2, 3]), head([4, 5, 6, 7]));
assertEqual(head(['a', 2, 3]), head(['a', 'c']));
assertEqual(head([]), head([]));
assertEqual(head([]), head([1, 2]));
