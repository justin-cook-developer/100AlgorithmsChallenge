const getCharacterCounts = string => {
  const characterCount = {};

  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (characterCount[character]) {
      characterCount[character]++;
    } else {
      characterCount[character] = 1;
    }
  }

  return characterCount;
}

function commonCharacterCount(s1, s2) {
  const count1 = getCharacterCounts(s1);
  const count2 = getCharacterCounts(s2);

  let similarCount = 0;

  for (let key in count1) {
    if (count2[key]) {
      const commonOccurrence = count1[key] > count2[key] ? count2[key] : count1[key];
      similarCount += commonOccurrence;
    }
  }

  return similarCount;
}

console.log(commonCharacterCount('aabcca', 'adcaa'));
