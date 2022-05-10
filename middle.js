const middle = function(array) {
  let l = array.length;
  if (l <= 2) {
    return [];
  } else if (l % 2 === 0) {
    return [array[l / 2 - 1], array[l / 2]];
  } else if (l % 2 === 1) {
    return array[Math.floor(l / 2)];
  }
};
module.exports = middle;