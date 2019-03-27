function palindromeRearranging(inputString){
  const characters = inputString.split('');
  const characterCount = characters.reduce((accumulator, character) => {
    if (accumulator[character]) {
      accumulator[character]++;
    } else {
      accumulator[character] = 1;
    }
    return accumulator;
  }, {});

  const { even, odd } = Object.values(characterCount).reduce((accumulator, value) => {
    if (value % 2 === 0) {
      accumulator.even++
    } else {
      accumulator.odd++;
    }
    return accumulator;
  }, { odd: 0, even: 0 });

  return (even % 2 === 0 && odd === 0) || (even % 2 === 0 && odd === 1) || (even === 1 && odd === 0) || (odd === 1 && even === 0);
}

console.log(palindromeRearranging('adb'));
