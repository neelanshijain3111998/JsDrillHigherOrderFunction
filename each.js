//Multiply By Ten
//const elements = [1, 2, 3, 4, 5, 5];    //output=[10,20,30,40,50,50]
//The Each() method executes a provided function once for each array element.

//higherOrderfunction
function each(elements, cb) {
  console.log(elements);
  console.log("Multiply By Ten");
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i]); //using for loop calling callback function.
  }
}

const MultiplyByTen = (element) => console.log(element * 10); //callbackFunction //Multiplying BY ten by each element

module.exports = {
  PublicEach: each,
  PublicMultiplyByTen: MultiplyByTen,
};