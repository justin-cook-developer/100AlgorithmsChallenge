function launchSequenceChecker(systemName, stepNumbers) {
  const stages = {};

  for (let i = 0; i < systemName.length; i++) {
    const stage = systemName[i];
    const number = stepNumbers[i];
    const lastNumber = stages[stage];
    
    if (lastNumber) {
      if (lastNumber < number) {
        stages[stage] = number;
      } else {
        return false;
      }
    } else {
      stages[stage] = number;
    }
  }

  return true;
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));
