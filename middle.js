// return a new array containing the middle of array.
// if the length is less than 3, the middle is empty.
// if the length is even, the middle is a pair of elements.
// if the length is odd, the middle is a single element.
const middle = function(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  if (array.length <= 2) {
    return [];
  }
  const startIndex = Math.ceil(array.length / 2) - 1;
  const endIndex   = Math.floor(array.length / 2) + 1;
  return array.slice(startIndex, endIndex);
};
module.exports = middle;