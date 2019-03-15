function depositProfit(deposit, rate, threshold) {
  let amount = deposit;
  let years = 0;

  while (amount < threshold) {
    const interest = amount * (rate / 100);
    amount += interest;
    years++;
  }

  return years;
}

console.log(depositProfit(100, 20, 170))
