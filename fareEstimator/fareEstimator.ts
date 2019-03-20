function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  const prices = [];

  for(let i = 0; i < cost_per_minute.length; i++) {
    const timeCost = ride_time * cost_per_minute[i];
    const distanceCost = ride_distance * cost_per_mile[i];
    const totalCost = (timeCost + distanceCost).toFixed(1);
    prices.push(parseFloat(totalCost));
  }

  return prices;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
