function incorrectPasscodeAttempts(passcode, attempts) {
  let consecutiveIncorrect = 0;

  for(let i = 0; i < attempts.length; i++) {
    const attempt = attempts[i];
    if (attempt !== passcode) {
      consecutiveIncorrect++;
      if (consecutiveIncorrect >= 10) {
        return true;
      }
    } else {
      consecutiveIncorrect = 0;
    }
  }

  return false;
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));
