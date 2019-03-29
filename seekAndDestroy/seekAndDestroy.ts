function seekAndDestroy(arr, arr2) {
  const results = arr.reduce(({ record, filtered }, element) => {
    if (record[element]) {
      return { record, filtered };
    } else if (arr2.includes((element))) {
      record[element] = true;
      return { record, filtered };
    } else {
      return { record, filtered: [...filtered, element] };
    }
  }, { record: {}, filtered: [] });

  return results.filtered;
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
