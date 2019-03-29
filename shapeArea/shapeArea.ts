function shapeArea(n) {
  if (n === 1) {
    return 1;
  }

  const middle = (n * 2) - 1;
  let area = middle;

  let top = 0;
  let row = middle - 2;
  while (row > 0) {
    top += row;
    row -= 2;
  }

  area += (top * 2);

  return area;
}

console.log(shapeArea(2));
console.log(shapeArea(3));
