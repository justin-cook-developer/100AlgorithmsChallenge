function flattenArray(makeFlat) {
  if (makeFlat.length === 0) {
    return makeFlat;
  }

  return makeFlat.reduce((flattened, element) => {
    if (Array.isArray(element)) {
      return [...flattened, ...flattenArray(element)];
    } else {
      return [...flattened, element];
    }
  }, []);
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
