const middle = function(array) {
  // return a new array containing the middle of array.
  // if the length is less than 3, the middle is empty.
  // if the length is even, the middle is a pair of elements.
  // if the length is odd, the middle is a single element.
  let length = array.length;
  let middle = [];
  if (length % 2 === 0 && length > 2) {
    middle = [array[length / 2 - 1], array[length / 2]];
  }
  if (length % 2 === 1 && length > 2) {
    middle = [array[Math.floor(length / 2)]];
  }
  return middle;
};
module.exports = middle;