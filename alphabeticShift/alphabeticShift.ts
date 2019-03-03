function shiftForward(character) {
  const characterCode = character.charCodeAt(0);
  if(characterCode === 122) {
    return 'a';
  } else {
    return String.fromCharCode(characterCode + 1);
  }
}

function alphabeticShift(inputString) {
  let newString = '';
  for(let i = 0; i < inputString.length; i++) {
    newString += shiftForward(inputString[i]);
  }
  return newString;
}

console.log(alphabeticShift('crazy'));
