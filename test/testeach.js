//The Each() method executes a provided function once for each array element.
//Program Multiply By Ten
const id1 = require("../each.js");
const items = [1, 2, 3, 4, 5, 5];

const MultiplyByTen = (element) => console.log(element * 10); //callbackFunction  //Multiplying BY ten by each element

id1.PublicEach(items, MultiplyByTen);
