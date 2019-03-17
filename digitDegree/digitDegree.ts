function digitDegree(n) {
  let iterations = 0;
  let numberStr = n.toString();

  while (numberStr.length > 1) {
    const some = numberStr.split('').reduce((a, b) => a + parseInt(b), 0);
    numberStr = some.toString();
    iterations++;
  }

  return iterations;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
