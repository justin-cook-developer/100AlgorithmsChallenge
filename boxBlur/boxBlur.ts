function getAverage(image) {
    const middle = Math.floor(image.length / 2);
    const indexes = [middle - 1, middle, middle + 1];

    const average = image.reduce((a, b, i) => {
        if (indexes.includes(i)) {
            const rowValues = b.slice(indexes[0], indexes[2] + 1).reduce((a, b) => a + b);
            return a + rowValues;
        }  else {
            return a;
        }
    }, 0) / 9;

    return Math.floor(average);
}

function boxBlur(image) {
    const average = getAverage(image);

    const newImageLength = image.length - 2;
    const newImage = Array(newImageLength).fill(Array(newImageLength).fill(average));

    return newImage;
}

console.log(boxBlur([[1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]]));
