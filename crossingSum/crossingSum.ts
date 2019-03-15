function crossingSum(matrix, a, b) {
    return matrix.reduce((accumulator, current, i) => {
        if (i == a) {
            return accumulator + current.reduce((a, b) => a + b, 0,);
        } else {
            return accumulator + current[b];
        }
    }, 0);
}

console.log(crossingSum([[1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]], 1, 3));
