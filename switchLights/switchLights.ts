const switchLight = n => (n === 0 ? 1 : 0);

function switchLights(a) {
  let lights = a;

  for (let j = 0; j < a.length; j++) {
    lights = lights.map((light, i) => {
      if (i > j) {
        return light;
      } else {
        return switchLight(light);
      }
    });
  }

  return lights;
}


console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
