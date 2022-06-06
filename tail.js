const tail = function(array) {
  if (Array.isArray(array)) {
    return array.slice(1);
  }
}
module.exports = tail;