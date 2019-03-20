const map = {
  0: 'UberX',
  1: 'UberXL',
  2: 'UberPlus',
  3: 'UberBlack',
  4: 'UberSUV',
};

function fancyRide(l, fares) {
  let typeOfRide = null;

  for (let i = 0; i < fares.length; i++) {
    const total = fares[i] * l;
    if (total <=  20) {
     typeOfRide = map[i];
    } else {
      break;
    }
  }

  return typeOfRide;
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
