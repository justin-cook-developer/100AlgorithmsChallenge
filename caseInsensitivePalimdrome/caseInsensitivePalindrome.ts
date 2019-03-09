function isCaseInsensitivePalindrome(inputString) {
  const similarCasing = inputString.toLowerCase();
  const length = similarCasing.length;

  let left = 0;
  let right = length - 1;

  while(left <= right) {
    if (similarCasing[left] !== similarCasing[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
