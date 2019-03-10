function characterParity(symbol)  {
  const parsed = parseInt(symbol);
  if (isNaN(parsed)) {
    return 'not a digit';
  } else if (parsed % 2 === 0) {
    return 'even';
  }
  return 'odd';
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
