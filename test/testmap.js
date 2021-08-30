//The map() method creates a new array populated with the results of
//calling a provided function on every element in the calling array.

const items = [1, 2, 3, 4, 5, 5];

const id1 = require("../map.js");

//callback function
const OddEven = function (element) {
  if (element % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

let array = id1.PublicMap(items, OddEven); //PublicMap is higherorder function
console.log(array);
