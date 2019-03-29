const digitProduct = n => {
  if (0 <= n && n <= 9) {
    return n;
  } else {
    return n.toString().split('').reduce((a, b) => parseInt(a) * parseInt(b));
  }
}

function uniqueDigitProducts(a) {
  const products = a.map(digitProduct);
  const uniqueProducts = new Set(products);
  return uniqueProducts.size;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
