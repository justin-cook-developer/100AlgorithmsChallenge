function evenDigitsOnly(n) {
  return n.toString().split('').every(number => parseInt(number) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
