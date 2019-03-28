const transformCharacter = character => {
  const code = character.charCodeAt(0);
  
  if (code < 109) {
    const difference = code - 97;
    return String.fromCharCode(122 - difference);
  } else {
    const difference = 122 - code;
    return String.fromCharCode(97 + difference);
  }
}

function reflectString(inputString) {
  const characters = inputString.split('');
  const transformedCharacters = characters.map(transformCharacter);
  return transformedCharacters.join('');
}

console.log(reflectString("name"));
