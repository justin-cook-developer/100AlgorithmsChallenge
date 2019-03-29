function stolenLunch(note) {
  const numberMap = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    '3': 'd',
    '4': 'e',
    '5': 'f',
    '6': 'g',
    '7': 'h',
    '8': 'i',
    '9': 'j',
  }

  const oppositeMap = Object.entries(numberMap).map(x => x.slice().reverse());

  const answerMap = oppositeMap.reduce((map, [key, value]) => {
    map[key] = value;
    return map;
  }, {});

  const [characters, answer] = note.split(':');

  const transformedCharacters = characters.split('').map(character => {
    if (numberMap[character]) {
      return numberMap[character];
    } else {
      return character;
    }
  });

  const transformToAnswer = answer.split('').map(character => {
    if (answerMap[character]) {
      return answerMap[character];
    } else {
      return character;
    }
  });

  return `${transformedCharacters.join('')}:${transformToAnswer.join('')}`;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
