function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = upSpeed;
  let days = 1;

  while(height < desiredHeight) {
    height -= downSpeed;
    height += upSpeed;
    days++;
  }

  return days;
}

console.log(growingPlant(100, 10, 910))
