function alternatingSums(a) {
  return a.reduce(([someone, some2], currentValue, index) => {
    if(index  % 2 === 0) {
      return [someone + currentValue, some2];
    } else {
      return [someone, some2 + currentValue];
    }
  }, [0, 0]);
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
