////reduce() is to return the sumg of all the elements in an array.
const items = [1, 2, 3, 4, 5, 5];

StartingValue = 0;
const id1 = require("../reduce.js");

const SumOfAll = function (startingValue, element) {
  return startingValue + element;
};

console.log(id1.PublicReduce(items, SumOfAll, StartingValue));
//Inside Reduce function passing three arguments.
