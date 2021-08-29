//Program=find value greater than two from array
//The find() method returns the value of the first element in the provided array that satisfies
// the provided testing function. If no values satisfy the testing function, undefined is returned.

function find(elements, cb) {
  //looping for calling callback for each element
  for (let i = 0; i < elements.length; i++) {
    // If `cb` returns `true` then return that element.
    if (cb(elements[i])) {
      return elements[i];
      break;
    } else if (i == elements.length - 1) {
      // Return `undefined` if no elements pass the truth test.
      return "undefined";
    }
  }
}

const ValueGreaterThanTwo = (element) => element > 2; //condition check

module.exports = {
  PublicFind: find,
  PublicGreaterThanTwo: ValueGreaterThanTwo,
};
