const isEven = number => number % 2 === 0;

function chessBoardCellColor(cell1, cell2) {
  const mapping = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
  };

  const x1 = mapping[cell1[0]];
  const y1 = parseInt(cell1[1]);
  const x2 = mapping[cell2[0]];
  const y2 = parseInt(cell2[1]);

  const total1 = x1 + y1;
  const total2 = x2 + y2;

  return isEven(total1) === isEven(total2);
}

console.log(chessBoardCellColor('B1', 'D3'));
console.log(chessBoardCellColor('A1', 'H3'));

