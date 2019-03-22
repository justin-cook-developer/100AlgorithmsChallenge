function houseNumbersSum(inputArray) {
  const first0 = inputArray.indexOf(0);
  return inputArray.slice(0, first0).reduce((a, b) => a+b);
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
