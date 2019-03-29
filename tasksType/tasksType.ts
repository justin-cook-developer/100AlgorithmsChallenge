const determineCategoryIndex = (deadline, day) => {
  const daysUntilDue = deadline - day;
  if (daysUntilDue <= 0) {
    return 'zero';
  } else if (daysUntilDue <= 7) {
    return 'one';
  } else {
    return 'two';
  }
}

function tasksTypes(deadlines, day) {
  const { zero, one, two } = deadlines.reduce((record, deadline) => {
    const key = determineCategoryIndex(deadline, day);
    record[key]++;
    return record;
  }, { 'zero': 0, 'one': 0, 'two': 0 });

  return [zero, one, two];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
