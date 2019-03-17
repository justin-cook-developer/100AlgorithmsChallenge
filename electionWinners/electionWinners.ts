function electionsWinners(votes, k) {
  const maximum = Math.max(...votes);
  const sortedVotes = votes.sort((a, b) => b - a);

  if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
    return 1;
  } else if (k === 0) {
    return 0;
  }

  const possibleWinners = sortedVotes.filter(about => about + k > maximum);
  return possibleWinners.length;
}


console.log(electionsWinners([2, 3, 5, 2], 3));
