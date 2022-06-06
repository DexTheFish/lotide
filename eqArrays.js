const eqArrays = function(firstArray, secondArray) {
  if (!Array.isArray(firstArray || !Array.isArray(secondArray))) {
    throw new Error("typeError: expected eqArrays to receive two arrays");
  }
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i in firstArray) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;