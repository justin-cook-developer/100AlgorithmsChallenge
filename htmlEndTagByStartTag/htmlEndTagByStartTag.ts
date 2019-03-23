function htmlEndTagByStartTag(startTag) {
  let tag = '';

  for (let i = 1; i < startTag.length - 1; i++) {
    const character = startTag[i];
    if (character === ' ' || character === '>') {
      break;
    } else {
      tag += character;
    }
  }

  return `</${tag}>`;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))
