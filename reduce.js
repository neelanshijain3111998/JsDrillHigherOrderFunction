//reduce() is to return the sum of all the elements in an array.
function reduce(elements, cb, startingValue) {
  for (let i = 0; i < elements.length; i++) {
    startingValue = cb(startingValue, elements[i]);
  }
  return startingValue;
}

const SumOfAll = function (startingValue, element) {
  return startingValue + element;
};

module.exports = {
  PublicReduce: reduce,
  PublicSum: SumOfAll,
};
