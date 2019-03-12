function confirmEnding(str, target) {
   const ending = str.substring(str.length - target.length);
   return target === ending;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
