const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function sumAllPrimes(num) {
  let total = 2;

  for (let i = 3; i <= num; i++) {
    if (isPrime(i)) {
      total += i;
    }
  }

  return total;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
