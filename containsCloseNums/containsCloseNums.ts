// my solution
// const meetCondition = (indexes, k) => {
//   let result = false;

//   indexes.forEach((originalPosition, i) => {
//     indexes.slice(i + 1).forEach(value => {
//       if (Math.abs(originalPosition - value) <= k) {
//         result = true;
//       }
//     });
//   });

//   return result;
// }

// function containsCloseNums(nums, k) {
//   const indices = nums.reduce((accumulator, current, i) => {
//     if (accumulator[current]) {
//       accumulator[current] = [...accumulator[current], i];
//     } else {
//       accumulator[current] = [i];
//     }
//     return accumulator;
//   }, {});

//   return Object.values(indices)
//     .filter(indexes => indexes.length > 1)
//     .some(indexes => meetCondition(indexes, k));
// }

function containsCloseNums(numbers, k) {
  for (let i = 0; i < numbers.length; i++) {
    const first = numbers[i];
    for(let j = i + 1; j < numbers.length; j++) {
      const second = numbers[j];
      if (first === second && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }

  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
