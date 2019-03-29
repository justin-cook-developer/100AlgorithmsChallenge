function seatsInTheater(nCols, nRows, col, row) {
  const rows = nRows - row;
  const columns = nCols - col + 1;

  return rows * columns;
}

console.log(seatsInTheater(16, 11, 5, 3));
