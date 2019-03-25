function lateRide(n) {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;

  const time = `${hours}${minutes}`;

  return time.split('').reduce((summation, number) => summation + parseInt(number), 0);
}

console.log(lateRide(240));
console.log(lateRide(808));
