function arrayMaximalAdjacentDifference(inputArray) {
  let maximumDifference = -Infinity;

  for (let i = 0; i < inputArray.length - 1; i++) {
    const left = inputArray[i];
    const right = inputArray[i + 1];
    const difference = Math.abs(right - left);
    if (difference > maximumDifference) {
      maximumDifference = difference;
    }
  }

  return maximumDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
