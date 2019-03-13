function containsDuplicates(a) {
  const set = new Set(a);
  return a.length !== set.size;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
