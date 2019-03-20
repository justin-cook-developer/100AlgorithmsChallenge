function findEmailDomain(address) {
  const strengths = address.split('@');
  return strengths[strengths.length - 1];
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
