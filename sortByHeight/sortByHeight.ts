function sortByHeight(a) {
  const numbers = a.filter(x => x !== -1).sort((a, b) => a - b);

  let count = 0;

  return a.map(x => {
    if (x === -1) {
      return x;
    } else {
      const element = numbers[count];
      count++;
      return element;
    }
  });
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
