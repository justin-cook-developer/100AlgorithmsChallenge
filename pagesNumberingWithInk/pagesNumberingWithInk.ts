const getDigits = number => number.toString().length;

function pagesNumberingWithInk(current, numberOfDigits) {
  const initial = getDigits(current);

  if (initial > numberOfDigits) {
    return null;
  }

  numberOfDigits -= initial;

  while (getDigits(current) <= numberOfDigits) {
    numberOfDigits -= getDigits(current);
    current++;
  }

  return current;
}

console.log(pagesNumberingWithInk(1, 5));
