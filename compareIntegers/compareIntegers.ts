function compareIntegers(a, b) {
  const first = parseInt(a);
  const second = parseInt(b);

  if (first === second) {
    return "equal";
  }
  return first > second ? 'greater' : 'less';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
