const takeUntil = function(array, callback) {
  let result = [];
  for (const a of array) {
    if (callback(a)) {
      break;
    } else {
      result.push(a);
    }
  }
  return result;
};
module.exports = takeUntil;