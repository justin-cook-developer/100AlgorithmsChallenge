function getTheSmallestValue(inputArray, comparison) {
  for (let i = inputArray.length - 1; i >= 0; i--) {
    const element = inputArray[i];
    if (element < comparison) {
      return element;
    }
  }
  
  return -1;
}

function arrayPreviousLess(items) {
  return items.map((item, i, originalArray) => {
    const replacement = getTheSmallestValue(originalArray.slice(0, i), item);
    return replacement;
  });
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
