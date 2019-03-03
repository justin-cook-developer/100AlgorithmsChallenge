function almostIncreasingSequence(sequence) {
  let elemsOutOfOrder = 0;

  for(let i = 0; i < sequence.length; i++) {
    const current = sequence[i];
    const prior = sequence[i - 1];
    if(prior >= current) {
      elemsOutOfOrder++;
      const twoPrior = sequence[i - 2];
      const next = sequence[i + 1];
      // still failing upon removing either element
      if(twoPrior >= current && prior >= next) {
        return false;
      }
    }
  }

  return elemsOutOfOrder <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))
