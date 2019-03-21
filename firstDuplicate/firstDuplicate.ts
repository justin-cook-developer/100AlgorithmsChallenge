function firstDuplicate(a) {
  const occurrences = {};

  for (let i = 0; i < a.length; i++) {
    const current = a[i];
    if (occurrences[current]) {
      return current;
    } else {
      occurrences[current] = true;
    }
  }

  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
