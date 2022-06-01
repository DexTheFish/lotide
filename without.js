// *note* we are avoiding .includes() as an exercise.
// I want to avoid ALL built in methods >:)

const without = function(array, itemsToRemove) {
  // return a subset of array, removing unwanted elements.
  // unwanted elements are specified by itemsToRemove.
  let newArray = [];
  for (const item of array) {
    let keepItem = true;
    for (const remove of itemsToRemove) {
      if (remove === item) {
        keepItem = false;
        break; // improves runtime
      }
    }
    if (keepItem) {
      newArray.push(item);
    }
  }
  return newArray;
};
module.exports = without;