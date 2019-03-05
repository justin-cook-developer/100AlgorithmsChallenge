const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const transformArray = (array, isOdd) => {
  const combine = isOdd ? add : multiply;
  const transformedArray = [];

  for (let i = 0; i < array.length; i += 2) {
    const left = array[i];
    const right = array[i + 1];
    const result = combine(left, right) || left;
    transformedArray.push(result);
  }

  return transformedArray;
}

function arrayConversion(inputArray) {
  let toIterate = [...inputArray];
  let isOdd = true;

  while(toIterate.length > 1) {
    toIterate = transformArray(toIterate, isOdd);
    isOdd = !isOdd;
  }

  return toIterate[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8, 2]));
