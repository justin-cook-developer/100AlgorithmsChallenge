function differentSymbolsNaive(string) {
  const characters = string.split('');
  const uniqueCharacters = new Set(characters);

  return uniqueCharacters.size;
}

console.log(differentSymbolsNaive('cabca'));
