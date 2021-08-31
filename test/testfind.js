//Program=find value greater than two from array
const items = [1, 2, 3, 4, 5, 5];

const id1 = require("../find.js");

const ValueGreaterThanTwo = (element) => element > 2; //condition check

console.log(`Value > 2 is ${id1.PublicFind(items, ValueGreaterThanTwo)}`); //display element which satisfy condition else display undefined.
