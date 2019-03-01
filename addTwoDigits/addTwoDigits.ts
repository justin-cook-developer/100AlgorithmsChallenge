function addTwoDigits(n) {
  const[numOne, numTwo] = n.toString().split('');
  return parseInt(numOne) + parseInt(numTwo);
}

console.log(addTwoDigits(29));
