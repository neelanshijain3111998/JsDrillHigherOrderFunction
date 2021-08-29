const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten' [1, 2, 3, 4];

const id1 = require("../flatten.js");
console.log(id1.PublicFlatten(nestedArray));
