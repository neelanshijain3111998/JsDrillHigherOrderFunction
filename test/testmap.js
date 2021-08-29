//The map() method creates a new array populated with the results of
//calling a provided function on every element in the calling array.

const items = [1, 2, 3, 4, 5, 5];

const id1 = require("../map.js");
let array = id1.PublicMap(items, id1.PublicOddEven); //PublicMap is higherorder function
console.log(array);
