function circleOfNumbers(n, firstNumber) {
  const half = Math.floor(n / 2);

  if (firstNumber >= half) {
    return firstNumber - half;
  } else {
    return firstNumber + half;
  }
}

console.log(circleOfNumbers(10, 5));
