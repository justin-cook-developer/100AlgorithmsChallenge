function reverseAString(str) {
  let reversed = '';

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));
