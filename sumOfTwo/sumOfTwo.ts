function sumOfTwo(a, b, v) {
  const numbers = a.reduce((a, b) => {
    a[b] = true;
    return a;
  }, {});

  return b.find(number => {
    const difference = v - number;
    return numbers[difference];
  }) !== undefined;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
