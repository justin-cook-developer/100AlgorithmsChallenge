function addBorder(picture) {
  const length = picture[0].length;
  const border = '*'.repeat(length + 2);

  const pictureWithBorder = picture.map(line => `*${line}*`);

  return [border, ...pictureWithBorder, border];
}

console.log(addBorder(["abc", "ded"]));
