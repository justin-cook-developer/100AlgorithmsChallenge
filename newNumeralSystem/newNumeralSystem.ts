function determineValue(character) {
  return character.charCodeAt(0) - 65;
}

function getCharacterFromValue(number) {
  return String.fromCharCode(number + 65);
}

function newNumeralSystem(number) {
  const inputValue = determineValue(number);
  const combinations = [];

  for (let i = 0; i < 26; i++) {
    for (let j = i; j < 25; j++) {
      if (i + j === inputValue) {
        const [first, second] = [i, j].map(getCharacterFromValue);
        combinations.push(`${first} + ${second}`);
      }
    }
  }

  return combinations;
}


console.log(newNumeralSystem('G'));
