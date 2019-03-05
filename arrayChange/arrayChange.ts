function arrayChange(inputArray) {
 const copies = [...inputArray];
 let changes = 0;

 for(let i = 0; i < copies.length - 1; i++) {
   const left = copies[i];
   const right = copies[i + 1];
   if (right <= left) {
    const difference = left - right;
    const amountToIncrement = (difference + 1)
    changes += amountToIncrement;
    copies[i + 1] = right + amountToIncrement;
   }
 }

 return changes;
}

console.log(arrayChange([2, 1, 1]));
