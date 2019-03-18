function factorializeANumber(num) {
  let total = 1;

  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
