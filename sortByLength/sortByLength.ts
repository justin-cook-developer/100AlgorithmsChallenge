function sortByLength(inputArray) {
  const copy = inputArray.slice();
  
  copy.sort((a, b) => a.length - b.length);

  return copy;
}

console.log(sortByLength(["abc",
"",
"aaa",
"a",
"zz"]));
