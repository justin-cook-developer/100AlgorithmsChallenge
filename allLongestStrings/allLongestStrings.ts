function allLongestStrings(inputArray) {
  let longestStringLength = 0;
  let longestStrings = [];

  inputArray.forEach(elem => {
    const length = elem.length;
    if(length > longestStringLength) {
      longestStringLength = length;
      longestStrings = [elem];
    } else if(length === longestStringLength) {
      longestStrings.push(elem);
    }
  });

  return longestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
