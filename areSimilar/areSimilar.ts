function areSimilar(a, b) {
  if (a.join('') === b.join('')) {
    return true;
  }

  const c = [];
  const d = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }

  d.reverse();
  if (c.length === 2 && c.join('') === d.join('')) {
    return true;
  }

  return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
