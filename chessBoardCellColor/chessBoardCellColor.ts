const mapToNumber = character => {
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

  return mapping[character] ? mapping[character] : parseInt(character);
}

const isEven = number => number % 2 === 0;

function chessBoardCellColor(cell1, cell2) {
  const [first, second] = [cell1, cell2].map(position => {
    return position.split('').map(character => mapToNumber(character));
  });

  const x1 = first[0];
  const y1 = first[1];
  const x2 = second[0];
  const y2 = second[1];

  if (isEven(x1) === isEven(x2)) {
    return isEven(y1) === isEven(y2);
  } else if (isEven(x1) !== isEven(x2)) {
      return isEven(y1) !== isEven(y2);
  }
}

console.log(chessBoardCellColor('B1', 'D3'));
console.log(chessBoardCellColor('A1', 'H3'));

