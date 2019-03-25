function longestDigitsPrefix(input) {
  let prefix = '';
  let i = 0;

  while (parseInt(input[i])) {
    prefix += input[i];
    i++;
  }

  return prefix;
}

console.log(longestDigitsPrefix('123aa1'));
