//Program=Select Even no's from array
//The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.

function filter(elements, cb) {
  let Evenarray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) Evenarray.push(elements[i]); //if Cb return true then store the element in array.
  }
  return Evenarray; //return an array of all elements that passed the truth test
}

const EvenNumbers = (element) => element % 2 == 0; //check element is even or not

module.exports = {
  PublicFilter: filter,
  PublicEvenNumbers: EvenNumbers,
};
