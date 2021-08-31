//const elements = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'
// output=[1,2,3,4]

const flatten = (elements) => {
  let output = [];

  //check elements is array or value
  if (!Array.isArray(elements)) {
    return elements;
  }

  for (let data of elements) {
    output = output.concat(flatten(data)); //if data part is array then again flatten call
  }
  return output;
};

module.exports = {
  PublicFlatten: flatten,
};
