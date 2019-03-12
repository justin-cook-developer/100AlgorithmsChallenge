function composeRanges(nums) {
  const ranges = [];

  let start = null;
  let end = null;

  nums.forEach((current, i) => {
    if (i === 0) {
      start = current;
    } else if (current === nums[i - 1] + 1) {
      end = current;
    } else {
      ranges.push(start && end ? `${start}->${end}` : `${start}`);
      start = current;
      end = null;
    }
  });

  ranges.push(start && end ? `${start}->${end}` : `${start}`);

  return ranges;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
