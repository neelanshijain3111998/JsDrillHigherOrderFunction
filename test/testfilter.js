//Program=Filter Even no's from array
const items = [1, 2, 3, 4, 5, 5];

const id1 = require("../filter.js");

const EvenNumbers = (element) => element % 2 == 0; //check element is even or not

console.log(id1.PublicFilter(items, EvenNumbers)); //display even no from array
