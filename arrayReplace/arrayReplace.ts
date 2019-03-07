function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(element => element === elemToReplace ? substitutionElem : element);
}

console.log(arrayReplace([1, 2, 1], 1, 3));
