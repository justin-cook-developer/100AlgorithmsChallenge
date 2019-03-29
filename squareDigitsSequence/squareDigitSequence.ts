function squareDigitsSequence(a0) {
  let number = a0;
  let iterations = 1;
  const occurrences = {};

  while (!occurrences[number]) {
    occurrences[number] = true;
    iterations++;

    const next = number.toString()
      .split('')
      .reduce((a, b) => Math.pow(parseInt(a), 2) + Math.pow(parseInt(b), 2));

    number = next;
  }

  return iterations;
}


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
