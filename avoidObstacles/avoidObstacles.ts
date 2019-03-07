function avoidObstacles(inputArray) {
  let jump = 1;
  let clearingObstacles = false;

  while(!clearingObstacles) {
    jump++;
    clearingObstacles = inputArray.every(element => element % jump !== 0);
  }

  return jump;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
