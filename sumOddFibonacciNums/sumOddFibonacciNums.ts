function sumOddFibonacciNums(num) {
  const record = {
    left: 1,
    right: 1,
    total: 2,
  };

  while (record.total < num) {
    const { left, right } = record;
    const next = left + right;

    if (next > num) {
      break;
    } else if (next % 2 !== 0) {
      record.total += next;
    }

    record.left = right;
    record.right = next;
  }

  return record.total;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
