function matrixElementsSum(matrix) {
    const skipColumns = {};
    let total = 0;

    for (let row of matrix) {
        for (let i = 0; i < row.length; i++) {
            if (skipColumns[i]) {
                continue;
            } else if (row[i] === 0) {
                skipColumns[i] = true;
            } else {
                total += row[i];
            }
        }
    }

    return total;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
