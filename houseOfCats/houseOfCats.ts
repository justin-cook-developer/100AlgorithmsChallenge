function houseOfCats(legs) {
  const upperBound = Math.floor(legs / 2);
  if (upperBound === 0) {
    return [];
  }
  const numberHumans = [upperBound];

  let catCount = 1;
  while ((catCount * 4) < legs) {
    const remainingLegs = legs - (catCount * 4);
    const humans = remainingLegs / 2;

    if (Number.isInteger(humans)) {
      numberHumans.unshift(humans);
    }
    catCount++;
  }

  return numberHumans;
}

console.log(houseOfCats(1));
console.log(houseOfCats(10));
