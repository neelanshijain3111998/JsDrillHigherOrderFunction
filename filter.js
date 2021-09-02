//Program=Select Even no's from array
//The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.
//const items = [1, 2, 3, 4, 5, 5];

const filter = (elements, cb) => {
  let EvenArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) EvenArray.push(elements[i]); //if Cb return true then store the element in array.
  }
  return EvenArray; //return an array of all elements that passed the truth test
};

module.exports = {
  PublicFilter: filter,
};
