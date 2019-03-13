function convertString(s, t) {
  let lastPosition = s.indexOf(t[0]);
  if (lastPosition === -1) {
    return false;
  }

  for (let i = 1; i < t.length; i++) {
    const position = s.indexOf(t[i]);
    const latterPosition = s.lastIndexOf(t[i]);
    if (position === -1) {
      return false;
    } else if (position <= lastPosition && latterPosition <= lastPosition) {
      return false;
    } else {
      lastPosition = position <= lastPosition ? latterPosition : position;
    }
  }

  return true;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
