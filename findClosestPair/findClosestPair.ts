function findClosestPair(nums, sum) {
  const numbers = {};
  let minimumDistance = -1;

  nums.forEach((number, i) => {
    const difference =  sum - number;

    if (numbers[difference] !== undefined) {
      const distance = Math.abs(i - numbers[difference]);
      if (distance < minimumDistance || minimumDistance === -1) {
        minimumDistance = distance;
      }
    }

    numbers[number] = i;
  });

  return minimumDistance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
