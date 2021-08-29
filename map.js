//The map() method creates a new array populated with the results of calling
// a provided function on every element in the calling array.

//Program=check If no is odd or even

const items = [1, 2, 3, 4, 5, 5];

//higher order function
function map(elements, cb) {
  let array = [];
  for (let i = 0; i < elements.length; i++) {
    array[i] = cb(elements[i]); //
  }
  console.log(elements);
  return array; //Array of odd even
}

//callback function
const OddEven = function (element) {
  if (element % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

module.exports = {
  PublicMap: map,
  PublicOddEven: OddEven,
};
