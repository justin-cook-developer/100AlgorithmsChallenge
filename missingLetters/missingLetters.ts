function missingLetters(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const characterCode = str.charCodeAt(i);
    const nextCharacterCode = str.charCodeAt(i + 1);

    if (characterCode + 1 !== nextCharacterCode) {
      return String.fromCharCode(characterCode + 1);
    }
  }

  return undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
