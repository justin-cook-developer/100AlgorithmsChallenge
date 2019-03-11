function chunkyMonkey(arr, size) {
  return arr.reduce((accumulator, current, i) => {
    if(i % size === 0) {
      const chunk = [current];
      return [...accumulator, chunk];
    } else {
      accumulator[accumulator.length - 1].push(current);
      return accumulator;
    }
  }, []);
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
