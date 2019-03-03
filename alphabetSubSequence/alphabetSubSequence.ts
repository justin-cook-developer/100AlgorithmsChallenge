function alphabetSubsequence(s) {
  let lastCharacterCode = s.charCodeAt(0);

  for(let i = 1; i < s.length; i++) {
    const characterCode = s.charCodeAt(i);
    if (characterCode <= lastCharacterCode) {
      return false;
    } else {
      lastCharacterCode = characterCode;
    }
  }

  return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
