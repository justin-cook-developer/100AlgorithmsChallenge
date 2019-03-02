function adjacentElementsProduct(inputArray) {
  let left = 0;
  let right = 1;
  let largestProduct = -Infinity;

  while(inputArray[right] !== undefined) {
    const leftOperand = inputArray[left];
    const rightOperand = inputArray[right];
    const product = leftOperand * rightOperand;
    if(product >= largestProduct) {
      largestProduct = product;
    }
    left++;
    right++;
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
