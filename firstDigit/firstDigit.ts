function firstDigit(inputString) {
  const numbers = '0123456789';

  for(let i = 0; i < inputString.length; i++) {
    const character = inputString[i];
    if (numbers.includes(character)) {
      return character;
    }
  }

  return null;
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
