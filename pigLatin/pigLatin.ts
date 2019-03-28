function pigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(str[0])) {
    return str + 'way';
  }

  let newStr = '';
  while (!vowels.includes(str[0]) && str.length > 0) {
    newStr = newStr + str[0];
    str = str.slice(1);
  }

  return `${str}${newStr}ay`
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
