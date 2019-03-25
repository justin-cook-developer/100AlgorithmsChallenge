function integerToStringOfFixedWidth(number, width) {
  const numberStr = number.toString();
  const length = numberStr.length;

  if (width <= length) {
    return numberStr.slice(length - width);
  } else {
    const difference = Math.abs(length - width);
    const additions = "0".repeat(difference);
    return additions + numberStr;
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
