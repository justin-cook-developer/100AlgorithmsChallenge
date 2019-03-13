function convertString(s, t) {
  let word = '';
  let position = 0;

  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    if (character === t[position]) {
      word += character;
      position++;
      if (word === t) {
        return true;
      }
    }
  }

  return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
