function without(array, itemsToRemove) {
  // return a subset of array, removing unwanted elements.
  // unwanted elements are specified by itemsToRemove.
  let newArray = [];
  for (const item of array) {
    let keepItem = true;
    for (const remove of itemsToRemove) {
      if (remove === item) {
        keepItem = false;
      }
    }
    if (keepItem) {
      newArray.push(item);
    }
  }
  return newArray;
};
module.exports = without;