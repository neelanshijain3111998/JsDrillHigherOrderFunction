//reduce() is to return the sum of all the elements in an array.
const reduce = function (elements, cb, StartingValue) {
  for (let i = 0; i < elements.length; i++) {
    StartingValue = cb(StartingValue, elements[i]);
  }
  return StartingValue;
};

module.exports = {
  PublicReduce: reduce,
};
