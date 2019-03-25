function getNecessaryInformation(input) {
  return input.reduce((data, element) => {
    if (element > data.max) {
      data.max = element;
    }

    if (element < data.minimum) {
      data.minimum = element;
    }

    data.numbersPresent[element] = true;

    return data;
  }, { numbersPresent: {}, max: -Infinity, minimum: Infinity });
}

function makeArrayConsecutive2(input) {
  const { numbersPresent, max, minimum } = getNecessaryInformation(input);1

  let additions = 0;
  for (let i = minimum; i <= max; i++) {
    if (!numbersPresent[i]) {
      additions++;
    }
  }

  return additions;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
