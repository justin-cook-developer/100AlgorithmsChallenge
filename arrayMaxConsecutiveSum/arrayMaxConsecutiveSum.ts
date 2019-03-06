function arrayMaxConsecutiveSum(inputArray, k) {
  let maximum = 0;
  let s = 0;

  for (let i = 0; i < k; i++) {
    s += inputArray[i];
  }

  maximum = s;

  for (let i = k; i < inputArray.length; i++) {
    s -= inputArray[i - k];
    s += inputArray[i];
    if (s > maximum) {
      maximum = s;
    }
  }

  return maximum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
