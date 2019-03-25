function isLucky(n) {
  const numberAsList = n.toString().split('');
  const length = numberAsList.length;

  const { left, right } = numberAsList.reduce(({ left, right }, element, i) => {
    if (i < (length / 2)) {
      return { right, left: left + parseInt(element) };
    } else {
      return { left, right: right + parseInt(element) };
    }
  }, { left: 0, right: 0 });

  return left === right;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
