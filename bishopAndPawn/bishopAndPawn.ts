const createMapping = () => {
  const mapping = {};

  for (let i = 1; i < 9; i++) {
    const characterCode = 96 + i;
    const character = String.fromCharCode(characterCode);
    mapping[character] = i;
  }

  return mapping;
}

const makeCoordinates = (coordinates) => {
  const mapping = createMapping();
  return coordinates.map(coordinate => mapping[coordinate] || parseInt(coordinate));
}


function bishopAndPawn(bishop, pawn) {
  const splitCoordinates = [bishop, pawn].map(coordinate => coordinate.split(''));
  const [transformedBishop, transformedUpon] = splitCoordinates.map(makeCoordinates);

  if ((transformedBishop[0] + transformedBishop[1]) === (transformedUpon[0] + transformedUpon[1])) {
    return true;
  } else if ((transformedBishop[0] + transformedUpon[0]) === (transformedBishop[1] + transformedUpon[1])) {
    return true;
  }
  return false;
}

console.log(bishopAndPawn('a1', 'c3'));
