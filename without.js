function without(source, itemsToRemove) {
  // make a new array
  // loop through s in source
  // check if s is in itemsToRemove
  // if not, push s to new array
  let newArray = [];
  for (const s of source) {
    let remove = false;
    for (const i of itemsToRemove) {
      if (i === s) {
        remove = true;
      }
    }
    if (remove === false) {
      newArray.push(s);
    }
  }
  return newArray;
};
module.exports = without;