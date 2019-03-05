const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function arrayConversion(inputArray) {
  let toIterate = [...inputArray];
  let iteration = 1;

  while(toIterate.length > 1) {
    const transformedArray = [];
    const combine = iteration % 2 === 1 ? add : multiply;

    for (let i = 0; i < toIterate.length; i += 2) {
      const left = toIterate[i];
      const right = toIterate[i + 1];
      const result = combine(left, right) || left;
      transformedArray.push(result);
    }

    toIterate = transformedArray;
    iteration++;
  }

  return toIterate[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8, 2]));
