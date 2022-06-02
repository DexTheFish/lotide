const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
    console.log(key);
  }
};
module.exports = findKey;