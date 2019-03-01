function absoluteValuesSumMinimization(a) {
  const length = a.length;
  const isEven = length % 2 === 0;

  return isEven ? a[(length / 2) - 1] : a[Math.floor(length / 2)]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
