const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const transformArray = (array, combinationFunction) => {
  const transformedArray = [];

  for (let i = 0; i < array.length; i += 2) {
    const left = array[i];
    const right = array[i + 1];
    const result = combinationFunction(left, right) || left;
    transformedArray.push(result);
  }

  return transformedArray;
}

function arrayConversion(inputArray) {
  let toIterate = [...inputArray];
  let iteration = 1;

  while(toIterate.length > 1) {
    const combine = iteration % 2 === 1 ? add : multiply;
    toIterate = transformArray(toIterate, combine);
    iteration++;
  }

  return toIterate[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8, 2]));
