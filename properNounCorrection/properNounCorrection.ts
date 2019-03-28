function properNounCorrection(noun) {
  const firstLetter = noun[0].toUpperCase();
  const rest = noun.slice(1).toLowerCase();

  return firstLetter + rest;
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));
