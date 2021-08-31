//Program=Select Even no's from array
//The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.

const filter = function (elements, cb) {
  let Evenarray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) Evenarray.push(elements[i]); //if Cb return true then store the element in array.
  }
  return Evenarray; //return an array of all elements that passed the truth test
};

module.exports = {
  PublicFilter: filter,
};
