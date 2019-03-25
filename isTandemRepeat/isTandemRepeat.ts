function isTandemRepeat(inputString) {
  const length = inputString.length;

  if (length % 2 !== 0) {
    return false;
  } else {
    const halfway = length / 2;
    return inputString.slice(0, halfway) === inputString.slice(halfway);
  }
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
