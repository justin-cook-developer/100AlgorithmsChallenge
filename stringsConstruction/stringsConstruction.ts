const determineOccurrences = str => {
  const occurrences = {};

  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (occurrences[character]) {
      occurrences[character]++;
    } else {
      occurrences[character] = 1;
    }
  }

  return occurrences;
}

function stringsConstruction(a, b) {
  const firstOccurrences = determineOccurrences(a);
  const secondOccurrences = determineOccurrences(b);
  const ratios = [];

  for (let key in firstOccurrences) {
    if (secondOccurrences[key]) {
      const ratio = Math.floor(secondOccurrences[key] / firstOccurrences[key]);
      ratios.push(ratio);
    } else {
      return 0;
    }
  }

  return Math.min(...ratios);
}

console.log(stringsConstruction('abcc', 'abccba'));
